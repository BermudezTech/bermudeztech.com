"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const hasMultipleImages = images.length > 1;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, hasMultipleImages, images.length]);

  if (images.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="relative w-full aspect-video md:h-[450px] overflow-hidden rounded-2xl border border-neutral-200/50 bg-white/40 shadow-lg backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 flex items-center justify-center">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              idx === activeSlide
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Image
              src={img}
              alt={`${title} - Imagen ${idx + 1}`}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Left/Right Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Imagen anterior"
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 dark:bg-neutral-900/70 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm shadow-md hover:bg-brand-lightblue hover:text-white dark:hover:bg-brand-lightblue dark:hover:text-white transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente imagen"
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 dark:bg-neutral-900/70 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm shadow-md hover:bg-brand-lightblue hover:text-white dark:hover:bg-brand-lightblue dark:hover:text-white transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Ir a imagen ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide
                    ? "w-6 bg-brand-lightblue"
                    : "w-2.5 bg-neutral-400/60 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
