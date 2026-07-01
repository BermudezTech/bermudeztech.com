"use client";

import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featuredProjects = [
    {
      id: "anku-cmms",
      title: "Anku APP CMMS",
      description:
        "Plataforma progresiva (PWA) de gestión de mantenimiento e inventario industrial. Diseñada con arquitectura offline-first y almacenamiento local mediante IndexedDB, sincroniza datos de forma bidireccional y reduce en un 80% el tiempo de generación y envío de informes operativos desde el campo.",
      tags: ["React", "NestJS", "PostgreSQL", "IndexedDB", "Tailwind CSS"],
      image: "/projects/anku_cmms.png",
      role: "Líder de Desarrollo",
      githubUrl: "https://github.com/BermudezTech",
      liveUrl: "#",
    },
    {
      id: "scalelink",
      title: "ScaleLink Weighing System",
      description:
        "Aplicación de escritorio multiplataforma comercial para la automatización del pesaje en plantas de producción. Implementa captura en tiempo real de básculas industriales mediante protocolo serial RS232 directo a Node.js, procesamiento de curvas de carga y eliminación total de errores manuales de digitación.",
      tags: ["Electron", "Node.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/projects/scalelink_weight.png",
      role: "Desarrollador Full-Stack",
      githubUrl: "https://github.com/BermudezTech",
    },
  ];

  const standardProjects = [
    {
      id: "scara-control",
      title: "Panel de Control SCARA",
      description:
        "Software HMI interactivo de calibración y telemetría para un brazo robótico SCARA de tres grados de libertad. Ejecuta modelado de cinemática inversa y directa con control de trayectorias en tiempo real mediante microcontroladores.",
      tags: ["C++", "Qt", "Arduino", "Python"],
      image: "/projects/robotic_control.png",
      role: "Ingeniero Mecatrónico",
      githubUrl: "https://github.com/BermudezTech",
    },
    {
      id: "iot-telemetry",
      title: "Visualizador de Telemetría IoT",
      description:
        "Dashboard en la nube para monitorización remota de variables industriales. Ingesta datos de sensores mediante WebSockets y los procesa en un servidor ligero contenerizado listo para producción.",
      tags: ["Next.js", "Docker", "Node.js", "AWS EC2"],
      role: "Software Engineer",
      githubUrl: "https://github.com/BermudezTech",
      liveUrl: "#",
    },
  ];

  const playgroundProjects = [
    {
      id: "cinematica-3d",
      title: "Simulador de Cinemática 3D",
      description:
        "Visor interactivo en la web para calcular y visualizar los ángulos de articulación de un brazo robótico de forma gráfica.",
      tags: ["Three.js", "TypeScript", "HTML5"],
      image: "/projects/playground_3d.png",
      githubUrl: "https://github.com/BermudezTech",
    },
    {
      id: "serial-rs232",
      title: "Lector Serial RS232",
      description:
        "Script modular ligero en Node.js diseñado para escuchar, decodificar y limpiar tramas binarias de básculas Mettler Toledo.",
      tags: ["Node.js", "SerialPort"],
      image: "/projects/playground_serial.png",
      githubUrl: "https://github.com/BermudezTech",
    },
    {
      id: "iot-dashboard-lite",
      title: "IoT Dashboard Lite",
      description:
        "Un tablero de instrumentación minimalista en tiempo real que consume y grafica señales analógicas por WebSockets.",
      tags: ["HTML", "Vanilla JS", "Chart.js"],
      image: "/projects/playground_dashboard.png",
      githubUrl: "https://github.com/BermudezTech",
    },
  ];

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

      {/* Title */}
      <section className="mb-12">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight transition-colors duration-500">
          Proyectos
        </h1>
        <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium transition-colors duration-500">
          Explora una selección de mis desarrollos más significativos, que van desde soluciones multiplataforma comerciales e integraciones de hardware hasta pequeños experimentos del playground.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          🌟 Proyectos Destacados
        </h2>
        <div className="flex flex-col gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              variant="featured"
              {...project}
            />
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          📁 Otros Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardProjects.map((project) => (
            <ProjectCard
              key={project.title}
              variant="standard"
              {...project}
            />
          ))}
        </div>
      </section>

      {/* Playground Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
          🧪 Playground & Experimentos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {playgroundProjects.map((project) => (
            <ProjectCard
              key={project.title}
              variant="minimal"
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
