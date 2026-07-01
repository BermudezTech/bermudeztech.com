"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

// Full projects detailed mockup data
const projectsData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    challenge: string;
    solution: string;
    tags: string[];
    role?: string;
    githubUrl?: string;
    liveUrl?: string;
    images: string[];
  }
> = {
  "anku-cmms": {
    title: "Anku APP CMMS",
    subtitle: "Gestión inteligente de mantenimiento e inventario con arquitectura offline-first.",
    description:
      "Plataforma progresiva (PWA) comercial para la digitalización y optimización de informes operativos en campo para el sector de mantenimiento industrial.",
    problem:
      "Los técnicos en plantas industriales y obras remotas a menudo pierden conectividad a internet, lo que provocaba retrasos críticos en el envío de informes, errores en el inventario físico y paradas no planificadas de maquinaria por falta de información actualizada.",
    challenge:
      "Diseñar un sistema de sincronización bidireccional y almacenamiento local tolerante a fallos sin cobertura de red, capaz de fusionar de forma automatizada los cambios realizados sin perder coherencia en la base de datos central.",
    solution:
      "Se desarrolló una PWA con almacenamiento local estructurado en IndexedDB. En caso de corte de red, las operaciones se encolan y guardan de manera segura. Al reconectarse, un middleware en NestJS resuelve conflictos basado en marcas de tiempo y actualiza la base de datos PostgreSQL de forma transparente, reduciendo en un 80% el tiempo de generación y consulta de reportes.",
    tags: ["React", "NestJS", "PostgreSQL", "IndexedDB", "Tailwind CSS"],
    role: "Líder de Desarrollo / Arquitecto de Software",
    githubUrl: "https://github.com/BermudezTech",
    liveUrl: "https://anku.bermudeztech.com",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Panel+Principal",
      "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Offline+Sync",
      "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Reporte+de+Campo",
    ],
  },
  "scalelink": {
    title: "ScaleLink Weighing System",
    subtitle: "Automatización e integración de hardware de pesaje industrial en tiempo real.",
    description:
      "Software multiplataforma de escritorio que integra hardware y software en la nube para la gestión automatizada de pesaje industrial y despacho.",
    problem:
      "La recopilación de pesos en tolvas y básculas dependía de la anotación manual por parte del operario al ver las pantallas industriales, resultando en pérdidas económicas por errores humanos, transcripciones lentas y lentitud en los despachos.",
    challenge:
      "Lograr una lectura continua a alta velocidad a través de conexiones serie RS232 con básculas industriales heredadas de múltiples marcas, aislando el ruido electrónico de las tramas binarias.",
    solution:
      "Construcción de una aplicación de escritorio nativa con Electron + Node.js. Mediante la librería SerialPort, se implementó un flujo de decodificación reactivo que filtra y estabiliza el peso automáticamente a través de algoritmos, eliminando el 100% de la digitación manual y subiendo los resultados en tiempo real a bases de datos relacionales en la nube.",
    tags: ["Electron", "Node.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Full-Stack Developer & Hardware Integration",
    githubUrl: "https://github.com/BermudezTech",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=ScaleLink+Dashboard+Desktop",
      "https://placehold.co/800x450/171717/38bdf8.png?text=ScaleLink+Conexion+Serial+RS232",
      "https://placehold.co/800x450/171717/38bdf8.png?text=ScaleLink+Historicos+de+Pesaje",
    ],
  },
  "scara-control": {
    title: "Panel de Control SCARA",
    subtitle: "Instrumentación HMI y control cinemático en tiempo real de robótica industrial.",
    description:
      "Interfaz gráfica HMI interactiva en C++ y Qt para el control, calibración y enseñanza de trayectorias físicas para un brazo robótico de 3 grados de libertad.",
    problem:
      "Los técnicos carecían de una representation visual tridimensional interactiva y amigable al calibrar robots SCARA, dependiendo únicamente de código numérico complejo en consolas obsoletas.",
    challenge:
      "Resolver de manera instantánea ecuaciones de cinemática directa e inversa tridimensional y sincronizar los pulsos de control del procesador con los motores físicos a alta velocidad.",
    solution:
      "Desarrollé una interfaz moderna con Qt y C++ que calcula perfiles polinomiales de trayectoria suaves. Se acopló con visualización gráfica interactiva y transmisión de paquetes seriales formateados a un controlador Arduino local que maneja los servomotores y encoders en la planta física.",
    tags: ["C++", "Qt", "Arduino", "Python"],
    role: "Ingeniero Mecatrónico",
    githubUrl: "https://github.com/BermudezTech",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=Control+SCARA+Visualizador+3D",
      "https://placehold.co/800x450/171717/38bdf8.png?text=Control+SCARA+Curvas+de+Trayectoria",
      "https://placehold.co/800x450/171717/38bdf8.png?text=Control+SCARA+Calibracion+Motores",
    ],
  },
  "iot-telemetry": {
    title: "Visualizador de Telemetría IoT",
    subtitle: "Dashboard en la nube para monitorización en tiempo real de instrumentación industrial.",
    description:
      "Sistema IoT escalable que captura, transmite y visualiza en tiempo real datos procedentes de sensores y sistemas de automatización industrial.",
    problem:
      "La visualización de variables físicas de plantas (temperaturas, niveles, presiones) estaba limitada a pantallas locales locales, impidiendo a la administración monitorizar u obtener históricos remotamente.",
    challenge:
      "Asegurar una latencia mínima de milisegundos en la ingesta y transmisión de cientos de puntos de telemetría continuos y concurrentes en la nube sin saturar los recursos de red del cliente.",
    solution:
      "Se construyó un dashboard web con Next.js y WebSockets, acoplado con un broker de datos contenerizado. Los datos se transmiten de manera eficiente a AWS EC2, permitiendo la monitorización en vivo y el almacenamiento de históricos optimizados para análisis rápido de tendencias.",
    tags: ["Next.js", "Docker", "Node.js", "AWS EC2"],
    role: "Desarrollador de Software",
    githubUrl: "https://github.com/BermudezTech",
    liveUrl: "https://telemetry.bermudeztech.com",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=IoT+Telemetry+Monitoreo+Hornos",
      "https://placehold.co/800x450/171717/38bdf8.png?text=IoT+Telemetry+AWS+Infrastructure",
    ],
  },
  "cinematica-3d": {
    title: "Simulador de Cinemática 3D",
    subtitle: "Visualizador interactivo web en 3D de modelos mecánicos articulados en el navegador.",
    description:
      "Experimento interactivo de simulación web que permite modelar y calcular los parámetros físicos cinemáticos de brazos mecánicos.",
    problem:
      "La enseñanza y aprendizaje de la cinemática de robots suele ser abstracta y compleja de entender únicamente a través de fórmulas y matrices matemáticas DH estáticas.",
    challenge:
      "Renderizar fluidamente un modelo tridimensional articulado a 60 FPS dentro de un navegador utilizando cálculos matemáticos tridimensionales dinámicos.",
    solution:
      "Se desarrolló un simulador interactivo utilizando Three.js y TypeScript. El usuario puede mover mandos deslizantes virtuales para rotar articulaciones, recalculando al instante la cinemática directa y mostrando visualmente el espacio de trabajo resultante del robot.",
    tags: ["Three.js", "TypeScript", "HTML5"],
    githubUrl: "https://github.com/BermudezTech",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=Simulador+SCARA+Visor+Three.js",
    ],
  },
  "serial-rs232": {
    title: "Lector Serial RS232",
    subtitle: "Script ligero y modular para ingesta y limpieza de tramas seriales.",
    description:
      "Script ligero en Node.js y SerialPort diseñado para conectarse y escuchar de manera estable puertos COM locales en entornos de fábrica.",
    problem:
      "Los paquetes de datos seriales binarios crudos provenientes de básculas industriales a menudo vienen con caracteres de control corruptos y ruido eléctrico, dificultando la lectura directa del texto de peso.",
    challenge:
      "Crear un decodificador reactivo de muy bajo consumo que procese flujos de datos continuos de puerto COM sin fugas de memoria o bloqueos de la terminal de producción.",
    solution:
      "Un script escrito en Node.js optimizado con flujos de lectura que fragmentan, decodifican y limpian las tramas binarias de datos seriales heredados de forma determinista, emitiendo eventos de peso depurados para el consumo de bases de datos.",
    tags: ["Node.js", "SerialPort"],
    githubUrl: "https://github.com/BermudezTech",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=Script+Node-Serialport+Console",
    ],
  },
  "iot-dashboard-lite": {
    title: "IoT Dashboard Lite",
    subtitle: "Tablero minimalista de tiempo real sin frameworks para sensores analógicos.",
    description:
      "Dashboard web super liviano sin frameworks externos que consume telemetría en tiempo real y grafica en vivo variables físicas.",
    problem:
      "Los frameworks modernos a veces añaden overhead innecesario para páginas web básicas de monitoreo industrial en terminales de bajo hardware de planta.",
    challenge:
      "Mantener un renderizado fluido de múltiples gráficas en tiempo real operando a 60 FPS en navegadores embebidos sin comprometer el rendimiento general.",
    solution:
      "Construcción de un cliente estático en HTML puro y CSS Grid que abre una conexión WebSockets directa al sensor. Grafica las lecturas usando buffers cíclicos con Chart.js nativo para optimizar el dibujo de curvas en pantalla de forma ultrarrápida.",
    tags: ["HTML", "Vanilla JS", "Chart.js"],
    githubUrl: "https://github.com/BermudezTech",
    images: [
      "https://placehold.co/800x450/171717/38bdf8.png?text=Dashboard+Lite+HTML5+Realtime",
    ],
  },
};

interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { id } = use(params);
  const project = projectsData[id];
  const [activeSlide, setActiveSlide] = useState(0);

  // If project not found
  if (!project) {
    return (
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Proyecto no encontrado
        </h1>
        <Link
          href="/projects"
          className="text-brand-lightblue hover:text-brand-darkblue font-semibold underline"
        >
          Volver a Proyectos
        </Link>
      </main>
    );
  }

  const hasMultipleImages = project.images.length > 1;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, hasMultipleImages]);

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-transparent">
      {/* Back Button */}
      <Link
        href="/projects"
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
        Volver a proyectos
      </Link>

      {/* Header Info */}
      <section className="mb-8">
        {project.role && (
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-lightblue/10 dark:bg-brand-lightblue/25 text-brand-darkblue dark:text-brand-lightblue text-xs font-semibold mb-3 tracking-wide uppercase">
            {project.role}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight transition-colors duration-500">
          {project.title}
        </h1>
        <p className="font-sans text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-semibold leading-relaxed transition-colors duration-500">
          {project.subtitle}
        </p>
      </section>

      {/* Action CTA Buttons */}
      <section className="flex flex-wrap gap-4 mb-10">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-lightblue px-6 py-3 font-display text-sm font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-darkblue hover:shadow-lg active:translate-y-0"
          >
            Visitar sitio
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-display text-sm font-bold tracking-wide text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-900 active:translate-y-0 flex items-center gap-2"
          >
            <svg className="h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Código fuente
          </a>
        )}
      </section>

      {/* Image Carousel */}
      <section className="mb-12">
        <div className="relative w-full aspect-video md:h-[450px] overflow-hidden rounded-2xl border border-neutral-200/50 bg-white/40 shadow-lg backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40 flex items-center justify-center">
          {project.images.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${idx === activeSlide ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <Image
                src={img}
                alt={`${project.title} - Imagen ${idx + 1}`}
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Siguiente imagen"
                className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 dark:bg-neutral-900/70 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm shadow-md hover:bg-brand-lightblue hover:text-white dark:hover:bg-brand-lightblue dark:hover:text-white transition-all cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 flex gap-2 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Ir a imagen ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeSlide ? "w-6 bg-brand-lightblue" : "w-2.5 bg-neutral-400/60 hover:bg-neutral-400"}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Description (Problem, Challenge, Solution) */}
      <section className="space-y-10 mb-12">
        {/* General Overview */}
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
            Descripción General
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium transition-colors duration-500">
            {project.description}
          </p>
        </div>

        {/* Problem */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40">
          <h3 className="font-display text-base font-bold text-red-600 dark:text-red-400 mb-3 uppercase tracking-wider">
            🚨 El Problema
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
            {project.problem}
          </p>
        </div>

        {/* Technical Challenge */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40">
          <h3 className="font-display text-base font-bold text-orange-600 dark:text-orange-400 mb-3 uppercase tracking-wider">
            ⚙️ El Reto Técnico
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/40">
          <h3 className="font-display text-base font-bold text-brand-darkblue dark:text-brand-lightblue mb-3 uppercase tracking-wider">
            💡 La Solución
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="border-t border-neutral-200/50 dark:border-neutral-800/50 pt-10">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-6">
          🛠️ Tecnologías Empleadas
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors duration-500"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
