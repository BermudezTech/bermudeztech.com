"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/app/lib/youtube";

interface YouTubePageClientProps {
  initialVideos: Video[];
}

export default function YouTubePageClient({ initialVideos }: YouTubePageClientProps) {
  const [activeFilter, setActiveFilter] = useState<"todos" | "tech" | "vlogs">("todos");

  const channelsInfo = {
    tech: {
      name: "BermudezTech",
      description: "Canal dedicado a tutoriales de programación, desarrollo de software y contenido técnico general.",
      handle: "@bermudeztech",
    },
    vlogs: {
      name: "Dardo Bermúdez",
      description: "Canal enfocado en vlogs de viajes, experiencias de vida y desarrollo personal.",
      handle: "@dardobermudez",
    },
  };

  const filteredVideos = initialVideos.filter((video) => {
    if (activeFilter === "tech") return video.channel === "bermudeztech";
    if (activeFilter === "vlogs") return video.channel === "dardo bermudez";
    return true;
  });

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-transparent">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-brand-darkblue dark:text-neutral-400 dark:hover:text-brand-lightblue transition-colors duration-200 mb-8 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Volver al inicio
      </Link>

      {/* Header Description */}
      <section className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-6 tracking-tight transition-colors duration-500">
          Mis Canales de YouTube
        </h1>

        {/* Channel Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* BermudezTech */}
          <div className="p-5 rounded-2xl border border-neutral-200/50 bg-white/40 shadow-xs backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="h-9 w-9 rounded-full overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center font-display text-sm font-extrabold shadow-xs select-none relative">
                  <Image
                    src="https://unavatar.io/youtube/UCA_hRDpRJLkSRDA62xKNFaQ"
                    alt={channelsInfo.tech.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-neutral-900 dark:text-neutral-50">{channelsInfo.tech.name}</h3>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 font-semibold">{channelsInfo.tech.handle}</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
                {channelsInfo.tech.description}
              </p>
            </div>
            <span className="mt-4 inline-block self-start px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase bg-brand-lightblue/5 text-brand-darkblue dark:text-brand-lightblue border-brand-lightblue/20">
              Contenido Técnico
            </span>
          </div>

          {/* Dardo Bermudez */}
          <div className="p-5 rounded-2xl border border-neutral-200/50 bg-white/40 shadow-xs backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="h-9 w-9 rounded-full overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center font-display text-sm font-black shadow-xs select-none relative">
                  <Image
                    src="https://unavatar.io/youtube/UCR5ZouoKM1rDshHxNOx3Z8Q"
                    alt={channelsInfo.vlogs.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-neutral-900 dark:text-neutral-50">{channelsInfo.vlogs.name}</h3>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 font-semibold">{channelsInfo.vlogs.handle}</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
                {channelsInfo.vlogs.description}
              </p>
            </div>
            <span className="mt-4 inline-block self-start px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase bg-red-500/5 text-red-600 dark:text-red-400 border-red-500/20">
              Vlogs y Crecimiento
            </span>
          </div>
        </div>
      </section>

      {/* Navigation & Filters Bar */}
      <section className="mb-8 border-b border-neutral-200/30 dark:border-neutral-800/30 pb-4">
        <div className="flex flex-wrap gap-2.5 items-center">
          <button
            onClick={() => setActiveFilter("todos")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${activeFilter === "todos"
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-950 dark:border-white shadow-sm"
                : "bg-white/40 text-neutral-600 border-neutral-200/50 hover:bg-neutral-100 dark:bg-neutral-950/20 dark:text-neutral-400 dark:border-neutral-800/50 dark:hover:bg-neutral-900/50"
              }`}
          >
            Todos los videos
          </button>
          <button
            onClick={() => setActiveFilter("tech")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${activeFilter === "tech"
                ? "bg-brand-lightblue text-white border-brand-lightblue shadow-sm"
                : "bg-white/40 text-neutral-600 border-neutral-200/50 hover:bg-neutral-100 dark:bg-neutral-950/20 dark:text-neutral-400 dark:border-neutral-800/50 dark:hover:bg-neutral-900/50"
              }`}
          >
            BermudezTech
          </button>
          <button
            onClick={() => setActiveFilter("vlogs")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer border ${activeFilter === "vlogs"
                ? "bg-red-600 text-white border-red-600 shadow-sm"
                : "bg-white/40 text-neutral-600 border-neutral-200/50 hover:bg-neutral-100 dark:bg-neutral-950/20 dark:text-neutral-400 dark:border-neutral-800/50 dark:hover:bg-neutral-900/50"
              }`}
          >
            Dardo Bermúdez
          </button>
        </div>
      </section>

      {/* Videos Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="group flex flex-col cursor-default">
              {/* Thumbnail Container */}
              <Link
                href={`/youtube/${video.id}`}
                className="relative block w-full aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 shadow-xs cursor-pointer"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />


                {/* Duration Badge */}
                <span className="absolute bottom-2.5 right-2.5 bg-neutral-950/80 backdrop-blur-xs px-1.5 py-0.5 text-[10px] font-bold text-white rounded pointer-events-none tracking-wide">
                  {video.duration}
                </span>
              </Link>

              {/* Video Details */}
              <div className="flex gap-3 mt-3 px-1">
                {/* Channel Avatar */}
                <div className="h-9 w-9 shrink-0 rounded-full overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center font-display text-xs font-black shadow-xs select-none relative">
                  {video.channelAvatar ? (
                    <Image
                      src={video.channelAvatar}
                      alt={video.channel === "bermudeztech" ? "BermudezTech" : "Dardo Bermúdez"}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  ) : video.channel === "bermudeztech" ? (
                    <span className="text-brand-darkblue dark:text-brand-lightblue bg-brand-lightblue/10 dark:bg-brand-lightblue/20 w-full h-full flex items-center justify-center">
                      BT
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/20 w-full h-full flex items-center justify-center">
                      DB
                    </span>
                  )}
                </div>

                {/* Title & Stats */}
                <div className="flex-1">
                  <Link href={`/youtube/${video.id}`}>
                    <h3 className="font-sans text-sm font-bold text-neutral-900 dark:text-neutral-50 line-clamp-2 leading-snug group-hover:text-brand-lightblue transition-colors duration-200 cursor-pointer">
                      {video.title}
                    </h3>
                  </Link>
                  <p
                    onClick={() => setActiveFilter(video.channel === "bermudeztech" ? "tech" : "vlogs")}
                    className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 font-semibold hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                  >
                    {video.channel === "bermudeztech" ? "BermudezTech" : "Dardo Bermúdez"}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 font-medium">
                    {video.views} • {video.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
