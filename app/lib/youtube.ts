import { sqlite } from "@/app/db";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channel: "bermudeztech" | "dardo bermudez";
  channelTitle: string;
  channelAvatar: string;
  duration: string;
  views: string;
  likes: string;
  subscribers: string;
  date: string;
  publishedAt: string;
  ribbon?: string;
}

// Format numbers like 1200 -> "1.2k", 65000 -> "65k"
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return String(num);
}

// Convert ISO date "2026-10-15T..." to Spanish "15 de octubre"
function formatSpanishDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  const currentYear = new Date().getUTCFullYear();
  if (year !== currentYear) {
    return `${day} de ${month} de ${year}`;
  }
  return `${day} de ${month}`;
}

// Parse ISO 8601 duration e.g. "PT1H2M10S" -> "1:02:10"
function parseISO8601Duration(durationStr: string): string {
  const match = durationStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "00:00";
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  const pad = (num: number) => String(num).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  } else {
    return `${pad(minutes)}:${pad(seconds)}`;
  }
}

// Extract vlog number for ribbon
function extractRibbon(title: string, description: string, channel: string): string | undefined {
  if (channel !== "dardo bermudez") return undefined;

  // Search in title/description for "Vlog 13" or "Vlog #13" or "VLOG # 13" or "vlog13"
  const match = (title + " " + description).match(/vlog\s*#?\s*(\d+)/i);
  if (match) {
    const num = parseInt(match[1]);
    return `VLOG #${num < 10 ? `0${num}` : num}`;
  }

  // Fallback for known mock vlogs just in case
  if (title.toLowerCase().includes("vida como estudiante")) {
    return "VLOG #01";
  }

  return undefined;
}

export async function loadVideos(): Promise<Video[]> {
  const API_key = process.env.YOUTUBE_API_KEY;
  const channelIdDardo = "UCR5ZouoKM1rDshHxNOx3Z8Q";
  const channelIdBT = "UCA_hRDpRJLkSRDA62xKNFaQ";
  const maxResults = 50;

  const cacheKey = "youtube_videos_cache";

  // Check SQLite cache
  try {
    const cached = sqlite.prepare("SELECT value, updated_at FROM youtube_cache WHERE key = ?").get(cacheKey) as { value: string; updated_at: number } | undefined;
    if (cached) {
      const diffInMinutes = (Date.now() - cached.updated_at) / (1000 * 60);
      if (diffInMinutes <= 60) {
        // Cache is fresh!
        return JSON.parse(cached.value);
      }
    }
  } catch (err) {
    console.error("Error reading cache from SQLite:", err);
  }

  // If cache is expired or missing, fetch from YouTube API
  try {
    console.log("Fetching new data from YouTube API...");

    // 1. Fetch channel info (subscriber counts) in a single request
    const channelsUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelIdDardo},${channelIdBT}&part=statistics,snippet&key=${API_key}`;
    const channelsResponse = await fetch(channelsUrl);
    if (!channelsResponse.ok) {
      throw new Error(`YouTube Channels API failed with status ${channelsResponse.status}`);
    }
    const channelsData = await channelsResponse.json();

    const subscribersMap: Record<string, string> = {};
    if (channelsData.items) {
      for (const channelItem of channelsData.items) {
        const subCount = parseInt(channelItem.statistics?.subscriberCount || "0");
        subscribersMap[channelItem.id] = `${formatNumber(subCount)} suscriptores`;
      }
    }

    // 2. Fetch search list for Dardo Bermúdez channel
    const linkVideosDardo = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelIdDardo}&maxResults=${maxResults}&key=${API_key}`;
    const dardoRes = await fetch(linkVideosDardo);
    if (!dardoRes.ok) {
      throw new Error(`YouTube Search API for Dardo failed with status ${dardoRes.status}`);
    }
    const dardoData = await dardoRes.json();

    // 3. Fetch search list for Bermudez Tech channel
    const linkVideosBT = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelIdBT}&maxResults=${maxResults}&key=${API_key}`;
    const btRes = await fetch(linkVideosBT);
    if (!btRes.ok) {
      throw new Error(`YouTube Search API for BT failed with status ${btRes.status}`);
    }
    const btData = await btRes.json();

    // Combine search results of type 'youtube#video'
    const searchItems = [
      ...(dardoData.items || []).filter((item: any) => item.id?.kind === "youtube#video"),
      ...(btData.items || []).filter((item: any) => item.id?.kind === "youtube#video"),
    ];

    // Extract video IDs
    const videoIds = searchItems.map((item: any) => item.id.videoId);

    if (videoIds.length === 0) {
      return [];
    }

    // 4. Batch query video details in chunks of 50
    const videoDetails: any[] = [];
    const chunkSize = 50;
    for (let i = 0; i < videoIds.length; i += chunkSize) {
      const chunk = videoIds.slice(i, i + chunkSize);
      const idsParam = chunk.join(",");
      const videosInfoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${idsParam}&part=contentDetails,snippet,statistics&key=${API_key}`;

      const videosInfoRes = await fetch(videosInfoUrl);
      if (!videosInfoRes.ok) {
        throw new Error(`YouTube Videos API failed with status ${videosInfoRes.status}`);
      }
      const data = await videosInfoRes.json();
      if (data.items) {
        videoDetails.push(...data.items);
      }
    }

    const channelMap: Record<string, "bermudeztech" | "dardo bermudez"> = {
      "UCR5ZouoKM1rDshHxNOx3Z8Q": "dardo bermudez",
      "UCA_hRDpRJLkSRDA62xKNFaQ": "bermudeztech"
    };

    // Map video details to our clean Video interface
    const videos: Video[] = videoDetails.map((item: any) => {
      const channelId = item.snippet.channelId;
      const channelKey = channelMap[channelId] || "bermudeztech";

      const rawViews = parseInt(item.statistics?.viewCount || "0");
      const rawLikes = parseInt(item.statistics?.likeCount || "0");
      const duration = parseISO8601Duration(item.contentDetails?.duration || "PT0S");
      const title = item.snippet?.title || "Sin título";
      const description = item.snippet?.description || "";

      // Snag standard thumbnail URL or fall back
      const thumbnails = item.snippet?.thumbnails;
      const thumbnailUrl = thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "";

      return {
        id: item.id,
        title,
        description,
        thumbnail: thumbnailUrl,
        channel: channelKey,
        channelTitle: item.snippet?.channelTitle || (channelKey === "bermudeztech" ? "BermudezTech" : "Dardo Bermúdez"),
        channelAvatar: `https://unavatar.io/youtube/${channelId}`,
        duration,
        views: `${formatNumber(rawViews)} vistas`,
        likes: formatNumber(rawLikes),
        subscribers: subscribersMap[channelId] || (channelKey === "bermudeztech" ? "5.4k suscriptores" : "1.2k suscriptores"),
        date: formatSpanishDate(item.snippet?.publishedAt || new Date().toISOString()),
        publishedAt: item.snippet?.publishedAt || new Date().toISOString(),
        ribbon: extractRibbon(title, description, channelKey),
      };
    });

    // Sort by publication time (most recent first)
    videos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Update SQLite cache
    try {
      sqlite.prepare("INSERT OR REPLACE INTO youtube_cache (key, value, updated_at) VALUES (?, ?, ?)")
        .run(cacheKey, JSON.stringify(videos), Date.now());
    } catch (err) {
      console.error("Error writing cache to SQLite:", err);
    }

    // Console log cache creation/update
    console.log("YouTube videos cache created/updated successfully.");

    return videos;
  } catch (error) {
    console.error("Error fetching from YouTube API, falling back to cache if available:", error);

    // In case of error (e.g. rate limit, offline), try to return expired cache if it exists
    try {
      const cached = sqlite.prepare("SELECT value FROM youtube_cache WHERE key = ?").get(cacheKey) as { value: string } | undefined;
      if (cached) {
        console.log("Serving expired cache as fallback");
        return JSON.parse(cached.value);
      }
    } catch (cacheErr) {
      console.error("Error reading expired cache:", cacheErr);
    }

    // If no cache at all, return empty array
    return [];
  }
}
