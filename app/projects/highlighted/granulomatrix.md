---
id: "granulomatrix"
title: "Granulomatrix ©"
subtitle: "Software especializado para análisis y control de granulometría industrial"
description: "Aplicación de escritorio para la automatización de laboratorios de calidad. Optimiza la captura de datos en tiempo real mediante interfaces RS232 y automatiza el procesamiento matemático de curvas granulométricas, garantizando precisión y eficiencia en los controles de calidad."
stack: ["Electron", "Node.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "SQLite"]
github: ""
live: ""
images: [
  "/projects/granulomatrix/granulomatrix-1.png",
  "/projects/granulomatrix/granulomatrix-2.png",
  "/projects/granulomatrix/granulomatrix-3.png",
  "/projects/granulomatrix/granulomatrix-4.png",
  "/projects/granulomatrix/granulomatrix-5.png",
  "/projects/granulomatrix/granulomatrix-6.png",
]
---

Granulomatrix © es una aplicación técnica diseñada para la optimización de procesos de control de calidad en laboratorios. Desarrollada como una solución nativa multiplataforma, permite la integración directa con instrumentación de metrología, transformando datos brutos de balanzas industriales en reportes técnicos, gráficos semilogarítmicos y certificados de análisis trazables.

**Características principales:**

- **Integración Industrial:** Captura de datos en tiempo real desde instrumentos vía RS232/USB con manejo de protocolos seriales complejos.
- **Motor de Cálculo Especializado:** Generación automática de curvas granulométricas, cálculo de diámetros geométricos (DGW), desviación estándar (SGW) y área superficial.
- **Arquitectura Robusta:** Gestión de datos bajo una arquitectura de procesos segregados (Main Process / Renderer), asegurando estabilidad en entornos de producción.
- **Persistencia Local y Offline:** Base de datos embebida (SQLite) con persistencia local garantizada para entornos industriales sin conectividad constante.
- **Sistema de Licenciamiento Seguro:** Implementación de un backend en servidor dedicado que permite la comprobación de licencias en tiempo real, asegurando el uso autorizado del software.

## El Problema

Los laboratorios industriales operaban bajo metodologías fragmentadas y manuales, donde la transcripción de datos desde básculas hacia hojas de cálculo (Excel) representaba un punto crítico de error humano, pérdida de trazabilidad y riesgos de cumplimiento ante auditorías (ISO 17025).

## El Reto Técnico

Lograr una lectura estable y continua en entornos de alta interferencia electromagnética, decodificando tramas binarias de básculas heredadas de múltiples fabricantes y procesando cálculos matemáticos complejos en tiempo real sin bloquear el hilo principal de la interfaz de usuario.

## La Solución

Desarrollo de una aplicación nativa con **Electron + TypeScript**. Se implementó una capa de abstracción para hardware mediante un flujo de datos reactivo, utilizando algoritmos de filtrado para estabilizar las señales de las balanzas. La arquitectura integra una capa de persistencia local controlada con **Prisma ORM**, permitiendo que el laboratorio opere de manera autónoma y garantizando la integridad de los resultados, cumpliendo con los estándares de trazabilidad exigidos en el sector. Además, se integró un mecanismo de validación de licencias mediante comunicación con un servidor backend, lo que garantiza el control de acceso y la protección de la propiedad intelectual del software.