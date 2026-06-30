"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jose@bermudeztech.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el correo: ", err);
    }
  };

  return (
    <main className="relative flex flex-1 items-start md:items-center justify-center bg-transparent pt-2 pb-6 md:pt-4 md:pb-8 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 items-center w-full">
        {/* Left Side: Info */}
        <div className="flex flex-col items-start lg:col-span-7 order-2 lg:order-1">
          {/*<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue text-sm font-semibold tracking-wide uppercase mb-4 transition-colors duration-500">
            Hola 👋
          </span>*/}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-5 leading-tight transition-colors duration-500">
            {/*Mi nombre es <br className="hidden sm:inline" />*/}
            <span className="bg-gradient-to-r from-brand-darkblue to-brand-lightblue bg-clip-text text-transparent">
              José Eduardo <br className="sm:hidden" /> Bermúdez Garavito
            </span>
          </h1>
          <p className="font-sans text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 mb-1.5 font-bold transition-colors duration-500">
            Ingeniero de Software Full-Stack
          </p>
          <p className="font-sans text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mb-6 font-medium transition-colors duration-500">
            Ingeniero mecatrónico
          </p>

          {/* Highlighted Stack */}
          <div className="mb-8 w-full">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Tecnologías Clave
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue border border-brand-lightblue/20 dark:border-brand-lightblue/30 transition-colors duration-500">
                JavaScript / TypeScript <span className="text-neutral-400 dark:text-neutral-500 font-normal">(React, Node.js, NestJS)</span>
              </span>
              <span className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue border border-brand-lightblue/20 dark:border-brand-lightblue/30 transition-colors duration-500">
                SQL
              </span>
              <span className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue border border-brand-lightblue/20 dark:border-brand-lightblue/30 transition-colors duration-500">
                Docker
              </span>
              <span className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue border border-brand-lightblue/20 dark:border-brand-lightblue/30 transition-colors duration-500">
                AWS
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="rounded-full bg-brand-darkblue px-6 py-3 font-display text-sm font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-lightblue hover:shadow-lg active:translate-y-0"
              >
                Ver proyectos
              </Link>
              <Link
                href="/about-me"
                className="rounded-full bg-brand-lightblue px-6 py-3 font-display text-sm font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-darkblue hover:shadow-lg active:translate-y-0"
              >
                Sobre mí
              </Link>
            </div>
            
            <button
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-2 font-sans text-sm font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue transition-colors duration-200 mt-1 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4.5 w-4.5 text-neutral-400 group-hover:text-brand-darkblue dark:group-hover:text-brand-lightblue transition-colors duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>jose@bermudeztech.com</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 text-neutral-400 group-hover:text-brand-darkblue dark:group-hover:text-brand-lightblue transition-colors duration-200 opacity-60 group-hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-3a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.375Z"
                />
              </svg>
              
              {/* Dual-State Tooltip Notification */}
              <span className={`absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg bg-neutral-900 text-white text-xs px-2.5 py-1.5 transition-all duration-300 shadow-md font-sans font-medium whitespace-nowrap dark:bg-neutral-800 border border-neutral-700/50 dark:border-neutral-700/80 ${copied ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible"}`}>
                {copied ? "¡Copiado al portapapeles!" : "Copiar al portapapeles"}
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Photo Frame */}
        <div className="flex items-center justify-center lg:col-span-5 order-1 lg:order-2">
          <div className="relative flex items-center justify-center">
            {/* Decorative Ambient Glow */}
            <div className="absolute w-[18vh] h-[18vh] max-w-[45vw] max-h-[45vw] rounded-full bg-gradient-to-r from-brand-lightblue to-brand-darkblue opacity-25 blur-3xl dark:opacity-35 animate-pulse duration-[8000ms]" />

            {/* Outer Elegant Gradient Frame */}
            <div className="relative w-[20vh] h-[20vh] max-w-[50vw] max-h-[50vw] md:w-96 md:h-96 rounded-full p-1 md:p-2.5 bg-gradient-to-tr from-brand-darkblue to-brand-lightblue shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
              {/* Inner White/Dark Circle acting as a matte border */}
              <div className="w-full h-full rounded-full p-0.5 md:p-1.5 bg-white dark:bg-neutral-950 transition-colors duration-500">
                {/* Photo container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative">
                  <Image
                    src="/profile.png"
                    alt="José Eduardo Bermúdez Garavito"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
