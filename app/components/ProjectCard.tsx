"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
  variant?: "featured" | "standard" | "minimal";
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  role,
  githubUrl,
  liveUrl,
  detailsUrl = "#",
  variant = "standard",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isMinimal = variant === "minimal";

  if (isMinimal) {
    return (
      <div className="group flex flex-col justify-between p-5 rounded-2xl border border-neutral-200/40 bg-white/20 dark:border-neutral-800/40 dark:bg-neutral-950/20 hover:border-brand-lightblue/50 dark:hover:border-brand-lightblue/35 hover:-translate-y-1 transition-all duration-300 shadow-xs">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 group-hover:text-brand-lightblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>

            {/* Minimal Links */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand-darkblue dark:text-neutral-400 dark:hover:text-brand-lightblue">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand-darkblue dark:text-neutral-400 dark:hover:text-brand-lightblue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Minimal Image Support */}
          {image && (
            <div className="relative w-full h-24 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 mb-3">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          )}

          <h3 className="font-display text-sm font-bold text-neutral-900 dark:text-neutral-50 mb-1">
            {title}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium mb-2.5">
            {description}
          </p>

          {/* Read More Link */}
          <div className="mb-3.5">
            <Link
              href={detailsUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-darkblue hover:text-brand-lightblue dark:text-brand-lightblue dark:hover:text-brand-darkblue transition-colors cursor-pointer group/link"
            >
              <span>Ver más</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-2.5 w-2.5 transition-transform group-hover/link:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 text-[10px] font-semibold border border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`group flex flex-col ${isFeatured ? "lg:flex-row gap-6 p-6 md:p-8" : "p-5"} rounded-2xl border border-neutral-200/50 bg-white/40 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 hover:border-brand-lightblue/50 dark:hover:border-brand-lightblue/35 hover:-translate-y-1 transition-all duration-300`}>
      {/* Project Image */}
      {image && (
        <div className={`relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 ${isFeatured ? "w-full lg:w-1/2 aspect-video lg:h-64 h-auto shrink-0" : "w-full aspect-video mb-4"}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
          />
        </div>
      )}

      {/* Project Details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              {role && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-lightblue/10 dark:bg-brand-lightblue/25 text-brand-darkblue dark:text-brand-lightblue text-xs font-semibold mb-2 tracking-wide uppercase">
                  {role}
                </span>
              )}
              <h3 className={`font-display font-bold text-neutral-900 dark:text-neutral-50 leading-tight ${isFeatured ? "text-xl md:text-2xl" : "text-base"}`}>
                {title}
              </h3>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-brand-lightblue/10 hover:text-brand-darkblue dark:hover:bg-brand-lightblue/20 dark:hover:text-brand-lightblue transition-all duration-200"
                >
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver Demo"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-brand-lightblue/10 hover:text-brand-darkblue dark:hover:bg-brand-lightblue/20 dark:hover:text-brand-lightblue transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4.5 w-4.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <p className={`text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-3 transition-colors ${isFeatured ? "text-base" : "text-sm"}`}>
            {description}
          </p>

          {/* Read More Link */}
          <div className="mb-4">
            <Link
              href={detailsUrl}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkblue hover:text-brand-lightblue dark:text-brand-lightblue dark:hover:text-brand-darkblue transition-colors cursor-pointer group/link"
            >
              <span>Leer más</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-semibold border border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
