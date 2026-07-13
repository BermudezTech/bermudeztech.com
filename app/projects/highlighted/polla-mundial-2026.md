---
id: "polla-mundial-2026"
title: "Polla Mundial 2026"
subtitle: "Plataforma de gestión de pronósticos deportivos con arquitectura automatizada."
description: "Aplicación integral para la gestión de quinielas del Mundial 2026, con lógica de negocio avanzada para fases de grupos y eliminación directa, incluyendo un sistema de puntuación excluyente con bonificaciones especiales."
stack: ["React", "NestJS", "SQLite", "Prisma ORM", "Tailwind CSS", "Docker"]
github: "https://github.com/BermudezTech/pollaMundial2026"
live: "https://pollamundial.bermudeztech.com"
images: [
  "/projects/polla-mundial-2026/polla-mundial-2026-1.png",
  "/projects/polla-mundial-2026/polla-mundial-2026-2.png",
  "/projects/polla-mundial-2026/polla-mundial-2026-3.png",
  "/projects/polla-mundial-2026/polla-mundial-2026-4.png",
]
---

La aplicación **Polla Mundial 2026** es una plataforma diseñada para administrar el flujo completo de un torneo de pronósticos deportivos, automatizando la gestión de enfrentamientos y el cálculo de puntuaciones complejas.

**Logros técnicos clave:**

- **Arquitectura Modular y Escalable:** Construcción basada en **NestJS** para el backend, garantizando una arquitectura organizada con TypeScript nativo y validación automática de datos.
- **Sistema de Puntuación Dinámico:** Implementación de una lógica de negocio excluyente que calcula automáticamente los puntos obtenidos en cada partido, gestionando escenarios de penaltis y fases eliminatorias.
- **Persistencia Ágil:** Uso de **SQLite** combinado con **Prisma ORM**, facilitando migraciones rápidas y garantizando la integridad referencial de usuarios, partidos y pronósticos.
- **Despliegue Estandarizado:** Orquestación mediante **Docker y Docker Compose**, permitiendo que el entorno de desarrollo y producción sean idénticos.
- **Interfaz Reactiva:** Desarrollo de un frontend en **React (Vite)** y **Tailwind CSS**, optimizado para una navegación fluida y una visualización clara del *leaderboard* y los pronósticos.

## El Problema

Gestionar una quiniela deportiva mediante métodos tradicionales (hojas de cálculo o mensajes) resulta ineficiente y propenso a errores humanos. Los puntos críticos de fricción eran:

1. **Gestión de datos manual:** La dificultad de procesar varios pronósticos individuales y actualizar las tablas de posiciones sin intervención constante.
2. **Escalabilidad ante la demanda:** La necesidad de manejar el tráfico de usuarios consultando resultados y actualizaciones en tiempo real durante el torneo.
3. **Complejidad operativa:** La falta de una interfaz centralizada para gestionar apuestas, bloquear pronósticos tras el inicio de los partidos y calcular bonificaciones especiales.

## El Reto Técnico

El desarrollo se centró en resolver la complejidad de la lógica deportiva y la consistencia del sistema:

- **Sistema de Puntuación:** El reto principal fue programar la lógica de puntuación excluyente, diferenciando entre marcador exacto, ganador seco y acierto de goles, además de integrar reglas especiales para penaltis y bonificaciones como "Arco Invicto" o "Marcador Único" en fases eliminatorias.
- **Automatización de Llaves:** Implementación de un sistema de *placeholders* que define automáticamente los enfrentamientos de las fases eliminatorias (Octavos hasta la Final) según los resultados de los grupos.
- **Consistencia de Datos:** Asegurar que el estado de cada partido se sincronice correctamente para impedir la edición de pronósticos fuera de tiempo y garantizar la exactitud de los rankings globales.

## La Solución

Para resolver los retos, diseñé una aplicación web robusta con una base de datos local (SQLite) para un desarrollo ágil y un motor de reglas en NestJS que procesa cada jornada.

El sistema digitalizó el flujo de trabajo: al finalizar un partido, el motor calcula automáticamente los puntos obtenidos por cada participante según el marcador oficial, aplicando las reglas de fase de grupos o eliminación directa. Esto eliminó por completo el cálculo manual, reduciendo el error humano y permitiendo que los usuarios visualicen su posición en el ranking de forma instantánea tras la actualización de resultados.