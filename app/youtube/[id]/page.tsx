"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface VideoDetail {
  id: string;
  title: string;
  channel: "bermudeztech" | "dardo bermudez";
  duration: string;
  views: string;
  date: string;
  thumbnail: string;
  flag?: string;
  ribbon?: string;
  subscribers: string;
  description: string;
  likes: string;
}

const videosData: Record<string, VideoDetail> = {
  "vlog-13": {
    id: "vlog-13",
    title: "CAJÓN DEL MAIPO: La EXCURSIÓN que NO PUEDES PERDERTE en Santiago 🏔️ | Dardo's Vlog 13",
    channel: "dardo bermudez",
    duration: "27:22",
    views: "895 vistas",
    date: "3 de noviembre",
    flag: "🇨🇱",
    ribbon: "VLOG #13",
    subscribers: "1.2k suscriptores",
    likes: "124",
    thumbnail: "https://placehold.co/640x360/18181b/ef4444.png?text=Cajon+del+Maipo+Vlog+13",
    description:
      "Mi último día en Chile y lo guardé para el final... ¡El Cajón del Maipo y el espectacular Embalse El Yeso! 🏔️💙\n\nA solo 2 horas de Santiago se encuentra uno de los paisajes más impresionantes que he visto: montañas de los Andes, aguas turquesas y una experiencia inolvidable. Un día completo de aventura, nuevos amigos, gastronomía chilena auténtica y despedidas. La forma perfecta de cerrar esta increíble aventura en Chile.\n\n🏔️ El gran final de mi viaje a Chile:\n- Madrugada rumbo al Cajón del Maipo\n- Desayuno tradicional en el camino\n- Paisajes de montaña hacia el embalse\n- Embalse El Yeso: aguas turquesas a 2500 msnm\n- Conociendo gente y compartiendo experiencias\n- Visita a la granja y las cabras\n- Almuerzo con vista a las montañas\n- La Casa del Chocolate: dulce tentación\n- Fiesta Chilena: música, baile y despedidas\n- Regreso a Santiago al atardecer\n- Última cena: Machas a la Parmesana (¡imperdible!)\n- Camino al aeropuerto: adiós Chile\n\nCAPÍTULOS:\n00:00 Introducción\n02:15 Rumbo al Cajón del Maipo\n07:40 El Embalse El Yeso\n15:30 Almuerzo de Montaña\n22:10 La Casa del Chocolate",
  },
  "vlog-12": {
    id: "vlog-12",
    title: "PROBANDO MOTE CON HUESILLO y PASTEL DE CHOCLO en Santiago | Dardo's Vlog 12",
    channel: "dardo bermudez",
    duration: "20:16",
    views: "402 vistas",
    date: "3 de noviembre",
    flag: "🇨🇱",
    ribbon: "VLOG #12",
    subscribers: "1.2k suscriptores",
    likes: "85",
    thumbnail: "https://placehold.co/640x360/18181b/ef4444.png?text=Mote+con+Huesillo+Vlog+12",
    description:
      "Probando la gastronomía chilena tradicional en las calles de Santiago. Mote con huesillo en el centro histórico y un increíble pastel de choclo casero en el Cerro San Cristóbal.\n\nUn recorrido culinario imperdible probando los sabores auténticos del país.\n\nCAPÍTULOS:\n00:00 Introducción\n03:10 Buscando el mejor Mote con Huesillo\n08:45 Primera impresión\n12:30 Almorzando Pastel de Choclo\n18:15 Veredicto final",
  },
  "docker-guide": {
    id: "docker-guide",
    title: "Aprende Docker desde Cero para Desarrolladores | Guía Definitiva 2026",
    channel: "bermudeztech",
    duration: "18:45",
    views: "1.2k vistas",
    date: "15 de octubre",
    subscribers: "5.4k suscriptores",
    likes: "250",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=Docker+Desde+Cero",
    description:
      "Guía definitiva de Docker para desarrolladores de software. Aprende a crear contenedores, configurar Dockerfiles y manejar Docker Compose paso a paso.\n\nUna introducción práctica para agilizar tu flujo de desarrollo local y asegurar un despliegue sin fallas.\n\nCAPÍTULOS:\n00:00 Introducción\n02:15 ¿Qué es un contenedor?\n05:40 Instalación y primeros comandos\n10:15 Escribiendo un Dockerfile\n14:30 Orquestación con Docker Compose",
  },
  "vlog-11": {
    id: "vlog-11",
    title: "SUBÍ al CERRO SAN CRISTÓBAL y TUVE QUE BAJAR CAMINANDO 😅 Santiago Chile | Dardo's Vlog 11",
    channel: "dardo bermudez",
    duration: "11:35",
    views: "413 vistas",
    date: "5 de octubre",
    flag: "🇨🇱",
    ribbon: "VLOG #09",
    subscribers: "1.2k suscriptores",
    likes: "92",
    thumbnail: "https://placehold.co/640x360/18181b/ef4444.png?text=Cerro+San+Cristobal+Vlog+11",
    description:
      "Subí al Cerro San Cristóbal utilizando el funicular y tuve que bajar caminando porque cerraron el servicio más temprano. Una caminata hermosa por el sendero pero agotadora.\n\nDisfruta de las vistas panorámicas de Santiago de Chile desde el mirador de la virgen.\n\nCAPÍTULOS:\n00:00 Introducción\n02:30 Subida en Funicular\n05:15 Vista panorámica de Santiago\n08:40 El descenso imprevisto\n10:50 Conclusiones",
  },
  "pwa-sync": {
    id: "pwa-sync",
    title: "Sincronización Offline-First con NestJS e IndexedDB | Arquitectura PWA",
    channel: "bermudeztech",
    duration: "32:10",
    views: "950 vistas",
    date: "20 de septiembre",
    subscribers: "5.4k suscriptores",
    likes: "188",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=PWA+Offline+Sincronizacion",
    description:
      "Aprende cómo construir una PWA offline-first con sincronización automática de datos en segundo plano usando IndexedDB, Service Workers y NestJS.\n\nIdeal para aplicaciones que operan en campo o zonas de baja conectividad.\n\nCAPÍTULOS:\n00:00 Introducción\n03:30 Configuración de IndexedDB\n10:15 Service Workers e inyección de datos\n18:45 Backend con NestJS y sincronización\n28:30 Pruebas offline",
  },
  "termodinamica-5": {
    id: "termodinamica-5",
    title: "5 experimentos de TERMODINÁMICA para hacer en CASA",
    channel: "bermudeztech",
    duration: "12:15",
    views: "65k vistas",
    date: "5 de septiembre",
    subscribers: "5.4k suscriptores",
    likes: "1.2k",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=Termodinamica+en+Casa",
    description:
      "5 experimentos prácticos y visuales sobre termodinámica y transferencia de calor que puedes recrear fácilmente en casa para comprender los principios físicos de la termodinámica.\n\nPerfecto para estudiantes de ingeniería y aficionados a la ciencia física.\n\nCAPÍTULOS:\n00:00 Introducción\n02:15 Experimento 1: El globo termodinámico\n05:40 Experimento 2: Conducción en metales\n08:10 Experimento 3: Presión y vacío\n10:15 Experimento 4 y 5: Convección térmica",
  },
  "electron-serial": {
    id: "electron-serial",
    title: "Electron + RS232: Lectura de Balanzas Industriales en Node.js",
    channel: "bermudeztech",
    duration: "15:20",
    views: "1.4k vistas",
    date: "10 de agosto",
    subscribers: "5.4k suscriptores",
    likes: "210",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=Electron+y+Puerto+Serial",
    description:
      "Conecta tus aplicaciones de Electron con hardware externo usando puertos serie RS232. Ingesta de curvas de pesaje industrial paso a paso.\n\nAprende a implementar parsers para limpiar tramas y capturar datos en tiempo real.\n\nCAPÍTULOS:\n00:00 Introducción\n02:40 Configuración de Node-Serialport\n06:15 Lectura del puerto COM\n10:30 Formateo de tramas y solución de ruido\n14:00 Integración HMI con React",
  },
  "postgres-aws": {
    id: "postgres-aws",
    title: "Cómo desplegar tu base de datos PostgreSQL en AWS EC2 con Docker",
    channel: "bermudeztech",
    duration: "22:15",
    views: "820 vistas",
    date: "5 de julio",
    subscribers: "5.4k suscriptores",
    likes: "95",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=PostgreSQL+en+AWS+EC2",
    description:
      "Despliega una base de datos PostgreSQL en producción sobre una instancia EC2 de AWS utilizando Docker y configurando volúmenes seguros para persistencia.\n\nUn tutorial paso a paso sobre redes de Docker, variables de entorno y backups automatizados.\n\nCAPÍTULOS:\n00:00 Introducción\n03:15 Configuración de instancia EC2\n08:30 AWS Security Groups\n14:20 Configuración de Volúmenes y Redes\n19:50 Backups automatizados",
  },
  "mecatronica-antes": {
    id: "mecatronica-antes",
    title: "ANTES de estudiar INGENIERÍA MECATRÓNICA 🤖 mira esto | ¿Qué materias se ven?",
    channel: "bermudeztech",
    duration: "11:28",
    views: "32k vistas",
    date: "19 de junio",
    subscribers: "5.4k suscriptores",
    likes: "1.1k",
    thumbnail: "https://placehold.co/640x360/18181b/38bdf8.png?text=Estudiar+Mecatronica",
    description:
      "¿Qué materias se ven en Ingeniería Mecatrónica? Te explico el pensum semestre a semestre y qué conocimientos clave de electrónica, mecánica y software debes saber antes de iniciar esta maravillosa carrera.\n\nCAPÍTULOS:\n00:00 Introducción\n02:30 Estructura curricular\n05:15 Área de Mecánica y Diseño\n08:10 Área de Electrónica y Control\n10:00 Programación y Robótica",
  },
  "mecatronica-vida": {
    id: "mecatronica-vida",
    title: "Mi vida como estudiante de INGENIERÍA MECATRÓNICA | Séptimo Semestre 🎓",
    channel: "dardo bermudez",
    duration: "19:02",
    views: "12k vistas",
    date: "12 de junio",
    flag: "🇨🇱",
    ribbon: "VLOG #01",
    subscribers: "1.2k suscriptores",
    likes: "504",
    thumbnail: "https://placehold.co/640x360/18181b/ef4444.png?text=Vida+como+Estudiante",
    description:
      "Vlog de mi día a día como estudiante de séptimo semestre de Ingeniería Mecatrónica, cursando laboratorios de robótica industrial, programación de PLCs y sistemas de control.\n\nUna mirada sincera al trabajo real detrás de las aulas de ingeniería.\n\nCAPÍTULOS:\n00:00 Introducción\n03:10 Entrada al laboratorio de control\n08:45 Programando el PLC\n14:30 Pruebas físicas de actuadores\n17:50 Cierre de semestre",
  },
};

interface YouTubeWatchPageProps {
  params: Promise<{ id: string }>;
}

export default function YouTubeWatchPage({ params }: YouTubeWatchPageProps) {
  const { id } = use(params);
  const video = videosData[id];
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // If video not found
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

  // Get other videos for the sidebar recommendations (excluding active video)
  const recommendations = Object.values(videosData).filter((v) => v.id !== video.id);

  // Render chapters styled in blue color
  const renderDescription = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      // Check if line starts with a timestamp e.g. 00:00 or 12:30
      const timestampMatch = line.match(/^(\d{2}:\d{2})\s(.*)$/);
      if (timestampMatch) {
        return (
          <div key={index} className="py-0.5 text-sm">
            <span className="text-brand-lightblue dark:text-brand-lightblue font-bold hover:underline cursor-pointer mr-2">
              {timestampMatch[1]}
            </span>
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
              {timestampMatch[2]}
            </span>
          </div>
        );
      }
      return (
        <p key={index} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium mb-2.5">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-transparent">
      {/* Back Button */}
      <Link
        href="/youtube"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-brand-darkblue dark:text-neutral-400 dark:hover:text-brand-lightblue transition-colors duration-200 mb-6 group"
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
        Volver a la lista de videos
      </Link>

      {/* Main YouTube Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player, Metadata, Description */}
        <div className="lg:col-span-2 flex flex-col">
          
          {/* Mock Video Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 group shadow-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 brightness-95"
            />

            {/* Red Diagonal Ribbon overlay for Vlogs */}
            {video.ribbon && (
              <div className="absolute top-0 right-0 overflow-hidden w-20 h-20 pointer-events-none rounded-tr-2xl z-10">
                <div className="absolute bg-red-600 text-white text-[9px] font-black text-center py-1 w-28 rotate-45 translate-x-6 translate-y-2 uppercase shadow-sm tracking-wider">
                  {video.ribbon}
                </div>
              </div>
            )}

            {/* Custom SVG Flag Badge */}
            {video.flag && (
              <div className="absolute top-4 left-4 h-7 w-10 bg-white/95 dark:bg-neutral-900/95 rounded shadow-lg flex items-center justify-center pointer-events-none border border-neutral-200/30 dark:border-neutral-800/30 z-10">
                <span className="text-base leading-none">{video.flag}</span>
              </div>
            )}

            {/* Glowing Red Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors duration-300 z-10">
              <button
                aria-label="Reproducir video"
                className="flex h-16 w-20 sm:h-20 sm:w-28 items-center justify-center rounded-2xl bg-red-600 text-white shadow-xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:bg-red-700 cursor-pointer shadow-red-600/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 sm:h-10 sm:w-10 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* HTML5 Player Bar overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col gap-2 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {/* Progress Bar */}
              <div className="relative w-full h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer group/progress">
                <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-red-600 group-hover/progress:h-1.5 transition-all" />
              </div>
              
              {/* Media Controls */}
              <div className="flex items-center justify-between text-white text-xs mt-1">
                <div className="flex items-center gap-4">
                  {/* Play Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4 cursor-pointer">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {/* Volume Icon */}
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <div className="w-12 h-1 bg-white/40 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-white" />
                    </div>
                  </div>
                  {/* Time Stamp */}
                  <span className="font-semibold select-none">0:00 / {video.duration}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Subtitles Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v11.25A1.875 1.875 0 0 1 18.375 19.5H5.625A1.875 1.875 0 0 1 3.75 17.625V6.375A1.875 1.875 0 0 1 5.625 4.5Z" />
                  </svg>
                  {/* Gear Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 cursor-pointer animate-[spin_8s_linear_infinite]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  {/* Fullscreen Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0 6 6M9 15l-6 6m0 0v-4.5m0 4.5h4.5M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m6 5.25V20.25m0 0h-4.5m4.5 0-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-50 mt-4 leading-tight">
            {video.title}
          </h1>

          {/* Channel Info & Action Buttons row (YouTube style) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3 pb-4 border-b border-neutral-200/30 dark:border-neutral-800/30">
            
            {/* Left side: Avatar, Name, Subs */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center font-display text-sm font-black shadow-xs select-none">
                {video.channel === "bermudeztech" ? (
                  <span className="text-brand-darkblue dark:text-brand-lightblue bg-brand-lightblue/10 dark:bg-brand-lightblue/20 w-full h-full flex items-center justify-center">
                    BT
                  </span>
                ) : (
                  <span className="text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/20 w-full h-full flex items-center justify-center">
                    DB
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display font-bold text-neutral-900 dark:text-neutral-50 text-sm sm:text-base leading-tight">
                  {video.channel === "bermudeztech" ? "BermudezTech" : "Dardo Bermúdez"}
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                  {video.subscribers}
                </p>
              </div>

              {/* Subscribe button */}
              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`ml-3 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSubscribed
                    ? "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    : "bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
                }`}
              >
                {isSubscribed ? "✓ Suscrito" : "Suscribirse"}
              </button>
            </div>

            {/* Right side: Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Share button */}
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 transition-colors cursor-pointer text-xs font-bold text-neutral-700 dark:text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
                <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Video Description Box (Premium layout, expandable) */}
          <div className="mt-4 p-4 rounded-xl border border-neutral-200/50 bg-white/40 dark:border-neutral-800/50 dark:bg-neutral-950/40 shadow-xs backdrop-blur-md transition-all duration-300">
            <div className="flex gap-2.5 text-xs text-neutral-500 dark:text-neutral-400 font-bold mb-2">
              <span>{video.views}</span>
              <span>•</span>
              <span>Subido el {video.date}</span>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-full" : "max-h-36"}`}>
              {renderDescription(video.description)}
            </div>

            {/* Expand / Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3.5 text-xs font-black text-brand-darkblue dark:text-brand-lightblue hover:underline cursor-pointer select-none"
            >
              {isExpanded ? "Mostrar menos" : "... Mostrar más"}
            </button>
          </div>

        </div>

        {/* Right Column: Recommendations (Sidebar) */}
        <div className="flex flex-col gap-5">
          <h2 className="text-base font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-200/30 dark:border-neutral-800/30 pb-3">
            Otros Videos
          </h2>

          <div className="flex flex-col gap-4.5">
            {recommendations.map((rec) => (
              <div key={rec.id} className="group flex gap-3 cursor-default">
                {/* Small Thumbnail */}
                <Link
                  href={`/youtube/${rec.id}`}
                  className="relative aspect-video w-32 sm:w-36 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 shrink-0 shadow-xs cursor-pointer block"
                >
                  <Image
                    src={rec.thumbnail}
                    alt={rec.title}
                    fill
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Ribbon overlay for Vlogs in Sidebar */}
                  {rec.ribbon && (
                    <div className="absolute top-0 right-0 overflow-hidden w-12 h-12 pointer-events-none rounded-tr-xl">
                      <div className="absolute bg-red-600 text-white text-[6px] font-black text-center py-0.5 w-18 rotate-45 translate-x-4 translate-y-1 uppercase shadow-sm">
                        {rec.ribbon}
                      </div>
                    </div>
                  )}

                  {/* Flag overlay for Sidebar */}
                  {rec.flag && (
                    <div className="absolute top-1 left-1 h-4 w-6 bg-white/90 dark:bg-neutral-900/90 rounded flex items-center justify-center pointer-events-none border border-neutral-200/20">
                      <span className="text-[10px] leading-none">{rec.flag}</span>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <span className="absolute bottom-1.5 right-1.5 bg-neutral-950/80 px-1 py-0.5 text-[9px] font-bold text-white rounded pointer-events-none tracking-wide">
                    {rec.duration}
                  </span>
                </Link>

                {/* Rec Text details */}
                <div className="flex-1 flex flex-col justify-center">
                  <Link href={`/youtube/${rec.id}`}>
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-50 line-clamp-2 leading-snug group-hover:text-brand-lightblue transition-colors cursor-pointer">
                      {rec.title}
                    </h3>
                  </Link>
                  <p className="text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-semibold">
                    {rec.channel === "bermudeztech" ? "BermudezTech" : "Dardo Bermúdez"}
                  </p>
                  <p className="text-[9px] sm:text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 font-medium">
                    {rec.views} • {rec.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
