---
id: "repertorio-liturgico"
title: "Repertorio Litúrgico"
subtitle: "Gestión avanzada de música para coros y ministerios litúrgicos con diseño moderno."
description: "PWA integral para la administración de canciones y repertorios litúrgicos. Permite la gestión de acordes, transporte de tonos, uso de capotraste y personalización estética según el tiempo litúrgico, ofreciendo una experiencia visual tipo 'liquid glass'."
stack: ["React", "Node.js", "MySQL", "Vite", "PWA"]
github: ""
live: "https://repertorioliturgico.bermudeztech.com"
images: [
  "https://placehold.co/800x450/171717/38bdf8.png?text=Repertorio+Liturgico+Dashboard",
  "https://placehold.co/800x450/171717/38bdf8.png?text=Editor+de+Acordes+y+Tonos",
  "https://placehold.co/800x450/171717/38bdf8.png?text=Interfaz+Liquid+Glass"
]
---
**Repertorio Litúrgico** es una Progressive Web App (PWA) diseñada específicamente para optimizar la organización y ejecución musical en celebraciones religiosas. Permite a los grupos musicales gestionar su base de datos de canciones y crear repertorios personalizados con herramientas dinámicas de edición musical.

**Logros técnicos clave:**

- **Editor Musical Inteligente:** Sistema avanzado para la colocación de acordes sobre letras, permitiendo el transporte de tonos en tiempo real e implementación de capotraste para facilitar la ejecución en guitarra.
- **Experiencia de Usuario Moderna (2026):** Actualización integral de la UI utilizando metodologías de diseño contemporáneo, integrando una estética *liquid glass* que mejora la legibilidad y el atractivo visual sin sacrificar la funcionalidad.
- **Arquitectura PWA:** Capacidad de instalación nativa en dispositivos móviles y funcionamiento offline para asegurar el acceso a las letras y acordes en entornos sin conectividad.
- **Gestión de Roles:** Sistema de autenticación con niveles de acceso: administradores (edición completa) y usuarios de prueba (modo lectura).
- **Adaptabilidad Litúrgica:** Temas dinámicos que cambian automáticamente según el tiempo litúrgico, mejorando la inmersión y organización durante las celebraciones.

## El Problema

Los grupos musicales litúrgicos tradicionalmente enfrentaban tres barreras operativas:

1. **Desorganización de recursos:** El manejo de canciones en papel o archivos dispersos dificultaba la creación rápida de repertorios para cada domingo o festividad.
2. **Rigidez técnica:** La falta de herramientas para transportar tonos o ajustar acordes obligaba a los músicos a realizar transcripciones manuales tediosas.
3. **Falta de portabilidad:** La dependencia de impresiones físicas o archivos pesados limitaba la flexibilidad en ensayos y celebraciones.

## El Reto Técnico

El desarrollo de esta plataforma se enfocó en equilibrar una interfaz compleja con una ejecución técnica sencilla:

- **Sincronización y CRUD:** Desarrollar un backend robusto en **Node.js** con **MySQL** que permitiera el manejo de datos relacionales entre canciones, repertorios y tiempos litúrgicos, garantizando integridad y rapidez.
- **Motor de Transporte:** Implementar un algoritmo capaz de transponer acordes dinámicamente y calcular la posición del capotraste, manteniendo la alineación precisa con la letra de la canción.
- **Estética y Funcionalidad:** El reto de 2026 fue implementar el diseño *liquid glass* utilizando CSS moderno, asegurando que la interfaz mantuviera su rendimiento y *responsive design* en todo tipo de pantallas sin degradar la experiencia de edición.

## La Solución

Desarrollé una PWA construida con **React** y **Vite**, optimizando los tiempos de carga y la interactividad. La plataforma permite crear repertorios rápidamente consultando la base de datos centralizada, ofreciendo una función de selección aleatoria para ensayos y herramientas de gestión que simplifican el flujo de trabajo del director del coro.

La integración de una base de datos centralizada permite realizar cambios globales y búsquedas eficientes por tiempo litúrgico, mientras que el control de acceso asegura la integridad de los datos. La implementación permite que los músicos se concentren en la alabanza, dejando la logística de preparación y transporte de tonos a un sistema automatizado y visualmente intuitivo.