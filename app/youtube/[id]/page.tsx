import { loadVideos } from "@/app/lib/youtube";
import YouTubeWatchClient from "./watch-client";
import Link from "next/link";

interface YouTubeWatchPageProps {
  params: Promise<{ id: string }>;
}

export default async function YouTubeWatchPage({ params }: YouTubeWatchPageProps) {
  const { id } = await params;
  const videos = await loadVideos();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Video no encontrado
        </h1>
        <Link
          href="/youtube"
          className="text-brand-lightblue hover:text-brand-darkblue font-semibold underline"
        >
          Volver a YouTube
        </Link>
      </main>
    );
  }

  const recommendations = videos.filter((v) => v.id !== video.id);

  return <YouTubeWatchClient video={video} recommendations={recommendations} />;
}
