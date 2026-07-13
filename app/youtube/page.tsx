import { loadVideos } from "@/app/lib/youtube";
import YouTubePageClient from "./youtube-client";

export default async function YouTubePage() {
  const videos = await loadVideos();

  return <YouTubePageClient initialVideos={videos} />;
}
