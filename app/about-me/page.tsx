"use client";

import { useState } from "react";
import Link from "next/link";

// Helper function to get clean custom icons for each technology
function getTechIcon(tech: string) {
  const normalized = tech.toLowerCase();

  if (normalized.includes("typescript")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 0h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM22 22V2H2v20h20zM12.9 14.3v1.3H10.1v-5.4h5.4v1.3h-4v1.4h3.4v1.4H11.5v1.4h1.4zm6.6-.2c0 .5-.2.9-.6 1.2s-.9.4-1.5.4c-.6 0-1.1-.1-1.5-.4s-.6-.7-.6-1.2h1.4c0 .3.1.5.3.6a.9.9 0 0 0 .5.2c.2 0 .4-.1.5-.2s.2-.3.2-.5c0-.2-.1-.3-.3-.4l-.8-.2a2.3 2.3 0 0 1-1.2-.7 1.8 1.8 0 0 1-.4-1.2c0-.5.2-.9.6-1.2s.9-.4 1.5-.4c.6 0 1.1.1 1.4.3s.5.6.6 1.1h-1.4c0-.2-.1-.4-.2-.5s-.3-.2-.5-.2c-.2 0-.4 0-.5.1s-.2.2-.2.4c0 .2.1.3.3.4l.8.2c.5.1.9.3 1.2.7.3.3.4.7.4 1.2z" />
      </svg>
    );
  }
  if (normalized.includes("react") || normalized.includes("react native")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-sky-500 animate-[spin_20s_linear_infinite] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      </svg>
    );
  }
  if (normalized.includes("next.js")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-neutral-800 dark:text-neutral-200 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.834 18.175l-6.495-8.337v6.62H9.689V7.618h1.65l6.05 7.765V7.618h1.65v10.557h-1.205z"/>
      </svg>
    );
  }
  if (normalized.includes("electron")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(45 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(-45 12 12)"/>
      </svg>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-teal-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.036c-2.285 0-3.708 1.143-4.272 3.429 1.714-.572 2.857-.286 3.428 1.142.857 2.143 2.143 3.143 4.286 3.143 2.286 0 3.708-1.143 4.272-3.429-1.714.572-2.857.286-3.428-1.142-.858-2.143-2.144-3.143-4.286-3.143zM6 13.464c-2.286 0-3.708 1.143-4.272 3.429 1.714-.572 2.857-.286 3.428 1.143.857 2.143 2.143 3.143 4.286 3.143 2.286 0 3.708-1.143 4.272-3.429-1.714.572-2.857.286-3.428-1.143-.858-2.143-2.143-3.143-4.286-3.143z"/>
      </svg>
    );
  }
  if (normalized.includes("shadcn")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-neutral-900 dark:text-neutral-100 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="4"/>
        <path d="M9 3v18M3 9h18"/>
      </svg>
    );
  }
  if (normalized.includes("node.js")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-green-600 dark:text-green-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.75v11.5L12 22l10-5.75V7.75L12 2zm-1 15.65l-5-2.88V9.08l5 2.88v5.69zm6-3.46l-5 2.88V9.08l5-2.88v5.69z"/>
      </svg>
    );
  }
  if (normalized.includes("nestjs")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-red-600 dark:text-red-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 5v10l-10 5-10-5V7l10-5zm0 2.5L4.5 8v8l7.5 3.75L19.5 16V8L12 4.5z"/>
      </svg>
    );
  }
  if (normalized.includes("prisma")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-teal-600 dark:text-teal-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
      </svg>
    );
  }
  if (normalized.includes("postgresql") || normalized.includes("mysql") || normalized.includes("sql")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
      </svg>
    );
  }
  if (normalized.includes("apis") || normalized.includes("api")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
      </svg>
    );
  }
  if (normalized.includes("docker")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-cyan-600 dark:text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917-2.305h2.119c.102 0 .186-.084.186-.186V6.468c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .101.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186V6.468c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .101.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186V6.468c0-.102-.084-.186-.186-.186H5.23c-.102 0-.186.084-.186.186v2.119c0 .101.084.186.186.186zm2.917 2.305h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.23c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.917 2.305h2.119c.102 0 .186-.084.186-.186v-2.119c0-.102-.084-.186-.186-.186H8.15c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186v-2.119c0-.102-.084-.186-.186-.186H5.23c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.917 0h2.119c.102 0 .186-.084.186-.186v-2.119c0-.102-.084-.186-.186-.186H2.31c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm16.713-3.616c.381 0 .668-.316.668-.7v-1.63c0-.384-.287-.7-.668-.7h-2.119c-.381 0-.668.316-.668.7v1.63c0 .384.287.7.668.7h2.119zm.068 4.708c0 .025 0 .047-.008.072-.119 1.636-1.127 2.97-2.614 3.738C12.3 20.323 7.368 18.6 7.368 18.6s-1.89-.5-3.32-.5l-.89-.044c-.754-.047-1.136-.5-1.136-.5s-.17-.186-.051-.627c.186-.67.754-.932 1.348-.966l4.9-.11h11.975c.102 0 .195.034.254.102a.256.256 0 0 1 .068.169v1.44z" />
      </svg>
    );
  }
  if (normalized.includes("ci/cd")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 1 1 21.27 8H18"/>
      </svg>
    );
  }
  if (normalized.includes("aws")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-orange-500 dark:text-orange-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    );
  }
  if (normalized.includes("linux")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-neutral-700 dark:text-neutral-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    );
  }
  if (normalized.includes("ia") || normalized.includes("inteligencia artificial") || normalized.includes("copilot")) {
    return (
      <svg className="w-3.5 h-3.5 mr-1.5 text-purple-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
      </svg>
    );
  }

  // Generic tag fallback icon
  return (
    <svg className="w-3.5 h-3.5 mr-1.5 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

export default function AboutMe() {
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

      {/* Main Header / Bio Intro */}
      <section className="mb-12">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-6 tracking-tight transition-colors duration-500">
          Acerca de mí
        </h1>
        <div className="space-y-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium transition-colors duration-500">
          <p>
            Ingeniero de Software Full-Stack e Ingeniero Mecatrónico con experiencia sólida en el diseño, construcción y despliegue de aplicaciones robustas orientadas a optimizar flujos de trabajo de ingeniería y resolver problemas reales de negocio e industria.
          </p>
          <p>
            Especializado en el ecosistema JavaScript/TypeScript, mi fuerte es el desarrollo multiplataforma (Web, Desktop y Mobile) utilizando arquitecturas escalables que integran bases de datos relacionales, sistemas de alta disponibilidad y soluciones de sincronización de datos.
          </p>
        </div>
      </section>

      {/* Achievements / Engineering Impact */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-6">
          🚀 Impacto y Soluciones de Ingeniería
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web/PWA Card */}
          <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 hover:border-brand-lightblue/50 dark:hover:border-brand-lightblue/30 transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Desarrollo Web y PWA
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              Diseñé desde cero la arquitectura y el frontend de aplicaciones progresivas (PWA) con enfoque offline-first utilizando IndexedDB y NestJS, logrando reducir en un 80% el tiempo de entrega de informes operativos en campo.
            </p>
          </div>

          {/* Desktop/Automation Card */}
          <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 hover:border-brand-lightblue/50 dark:hover:border-brand-lightblue/30 transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Desktop y Automatización
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              Construí aplicaciones de escritorio multiplataforma (Electron + Node.js) comerciales, implementando la lógica para la captura e ingesta de datos en tiempo real y el procesamiento de curvas complejas, eliminando errores de cálculo manual en un 100%.
            </p>
          </div>

          {/* Productivity Engineering Card */}
          <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 hover:border-brand-lightblue/50 dark:hover:border-brand-lightblue/30 transition-all duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Ingeniería de Productividad
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              Optimización de ciclos de entrega de software mediante flujos de desarrollo asistido por IA, empaquetamiento en contenedores Docker y despliegues eficientes en infraestructura en la nube AWS.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Ficha Técnica */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          🛠️ Ecosistema Técnico de Especialidad
        </h2>

        <div className="space-y-6">
          {/* Frontend Category */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl border border-neutral-200/40 bg-white/20 dark:border-neutral-800/40 dark:bg-neutral-950/20">
            <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:w-1/4 uppercase tracking-wider">
              🔹 Frontend & Multiplataforma
            </div>
            <div className="flex flex-wrap gap-2 sm:w-3/4">
              {["TypeScript", "React", "Next.js", "React Native", "Electron", "Tailwind CSS", "Shadcn/UI"].map((tech) => (
                <span key={tech} className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Category */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl border border-neutral-200/40 bg-white/20 dark:border-neutral-800/40 dark:bg-neutral-950/20">
            <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:w-1/4 uppercase tracking-wider">
              🔹 Backend, APIs & Datos
            </div>
            <div className="flex flex-wrap gap-2 sm:w-3/4">
              {["Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "MySQL", "REST APIs"].map((tech) => (
                <span key={tech} className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps Category */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl border border-neutral-200/40 bg-white/20 dark:border-neutral-800/40 dark:bg-neutral-950/20">
            <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:w-1/4 uppercase tracking-wider">
              🔹 DevOps e Infraestructura
            </div>
            <div className="flex flex-wrap gap-2 sm:w-3/4">
              {["Docker", "CI/CD", "AWS (EC2)", "Linux", "Desarrollo asistido por IA"].map((tech) => (
                <span key={tech} className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          💼 Experiencia Profesional
        </h2>
        
        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 pl-6 space-y-8">
          {/* Timeline Node */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-lightblue ring-4 ring-white dark:ring-neutral-950" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  Ingeniero de Soporte | Desarrollador de Software
                </h3>
                <p className="text-sm font-semibold text-brand-darkblue dark:text-brand-lightblue">
                  Ancoltec Soluciones Industriales
                </p>
              </div>
              <span className="inline-flex self-start sm:self-center px-3 py-1 rounded-full bg-brand-lightblue/10 text-brand-darkblue dark:bg-brand-lightblue/20 dark:text-brand-lightblue text-xs font-semibold tracking-wide">
                2024 – Actualidad
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium mb-4 leading-relaxed">
              Lideré el diseño y desarrollo desde cero de soluciones de software internas y comerciales de la compañía, logrando digitalizar procesos analógicos e industriales.
            </p>
            
            <ul className="space-y-3.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium pl-1">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-lightblue mt-1.5 select-none shrink-0 text-xs">▪</span>
                <span>
                  Desarrollé la arquitectura e interfaz de sistemas de uso diario para la gestión de mantenimientos e inventarios, reduciendo en un <strong>80% el tiempo de entrega de informes</strong> y consulta de historiales en campo (Anku APP CMMS).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-lightblue mt-1.5 select-none shrink-0 text-xs">▪</span>
                <span>
                  Implementé integraciones de hardware con software (comunicación serial RS232 a Electron) para automatizar la captura de datos de pesaje industrial, <strong>eliminando el error humano de digitación en un 100%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-lightblue mt-1.5 select-none shrink-0 text-xs">▪</span>
                <span>
                  Brindé soporte de hardware y software de segundo y tercer nivel en plantas de producción industrial, garantizando la operatividad de los sistemas clave del cliente.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          🎓 Educación
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ITC */}
          <div className="rounded-2xl border border-neutral-200/40 bg-white/20 p-5 dark:border-neutral-800/40 dark:bg-neutral-950/20 flex flex-col justify-between hover:border-brand-lightblue/40 transition-colors duration-300">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-darkblue/10 dark:bg-brand-lightblue/10 text-brand-darkblue dark:text-brand-lightblue text-xs font-semibold mb-3">
                Graduado en 2025
              </span>
              <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                Ingeniería Mecatrónica
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                Escuela Tecnológica Instituto Técnico Central
              </p>
            </div>
          </div>

          {/* SENA ADSI */}
          <div className="rounded-2xl border border-neutral-200/40 bg-white/20 p-5 dark:border-neutral-800/40 dark:bg-neutral-950/20 flex flex-col justify-between hover:border-brand-lightblue/40 transition-colors duration-300">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-darkblue/10 dark:bg-brand-lightblue/10 text-brand-darkblue dark:text-brand-lightblue text-xs font-semibold mb-3">
                Graduado en 2023
              </span>
              <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                Tecnólogo en Análisis y Desarrollo de Sistemas
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                SENA
              </p>
            </div>
          </div>

          {/* SENA Programación */}
          <div className="rounded-2xl border border-neutral-200/40 bg-white/20 p-5 dark:border-neutral-800/40 dark:bg-neutral-950/20 flex flex-col justify-between hover:border-brand-lightblue/40 transition-colors duration-300">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-darkblue/10 dark:bg-brand-lightblue/10 text-brand-darkblue dark:text-brand-lightblue text-xs font-semibold mb-3">
                Graduado en 2019
              </span>
              <h3 className="font-display text-base font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                Técnico en Programación de Software
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                SENA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Closing & Copy Email CTA */}
      <section className="border-t border-neutral-200/50 dark:border-neutral-800/50 pt-10 text-center">
        <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 font-medium leading-relaxed">
          Me enfoco en escribir código limpio, mantenible y estructurado bajo buenas prácticas de ingeniería, siempre con una mentalidad orientada al producto y al impacto medible en el negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="group relative flex items-center gap-2 font-sans text-sm font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue transition-colors duration-200 cursor-pointer"
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
            <span>📩 jose@bermudeztech.com</span>
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
            
            {/* Tooltip Notification */}
            <span className={`absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg bg-neutral-900 text-white text-xs px-2.5 py-1.5 transition-all duration-300 shadow-md font-sans font-medium whitespace-nowrap dark:bg-neutral-800 border border-neutral-700/50 dark:border-neutral-700/80 ${copied ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible"}`}>
              {copied ? "¡Copiado al portapapeles!" : "Copiar al portapapeles"}
            </span>
          </button>

          {/* Web Link */}
          <Link
            href="/"
            className="flex items-center gap-2 font-sans text-sm font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue transition-colors duration-200"
          >
            <span>🌐 bermudeztech.com</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
