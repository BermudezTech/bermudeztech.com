---
id: "anku-cmms"
title: "Anku APP CMMS"
subtitle: "Gestión inteligente de mantenimiento y soporte técnico con arquitectura offline-first."
description: "Plataforma progresiva (PWA) de gestión de mantenimiento. Diseñada con arquitectura offline-first y almacenamiento local mediante IndexedDB, sincroniza datos de forma bidireccional y reduce en un 80% el tiempo de generación y envío de informes operativos desde el campo. Incluye módulos de Inteligencia Artificial."
stack: ["React", "NestJS", "PostgreSQL", "IndexedDB", "Tailwind CSS"]
github: ""
live: ""
images: [
  "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Panel+Principal",
  "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Offline+Sync",
  "https://placehold.co/800x450/171717/38bdf8.png?text=Anku+CMMS+Reporte+de+Campo"
]
---
Anku es una Progressive Web App (PWA), diseñada para optimizar las operaciones críticas de mantenimiento técnico en campo. Construida bajo una arquitectura **offline-first**, Anku garantiza la continuidad operativa incluso en entornos sin conectividad, permitiendo a los técnicos realizar reportes, gestionar inventarios y auditar equipos con total fiabilidad.

**Logros técnicos clave:**

- **Arquitectura Offline-First:** Implementación avanzada de **IndexedDB** con **Dexie.js** para persistencia local y sincronización inteligente con **PostgreSQL**.

- **Gestión de Datos Críticos:** Desarrollo de una lógica de sincronización incremental y robusta, garantizando la integridad de datos entre el dispositivo móvil y la base de datos central.

- **Experiencia de Usuario en Campo:** Diseño de interfaces optimizadas para tabletas y móviles, incluyendo firma digital, lectura de códigos QR y generación dinámica de reportes en PDF.

- **Seguridad y Escalabilidad:** Implementación de autenticación segura (JWT con rotación de refresh tokens) y un flujo de trabajo que prioriza la validación técnica, reduciendo errores operativos.

- **Asistente Inteligente con RAG:** Integración de "Anku AI", un agente potenciado por Gemini y arquitectura RAG (Retrieval-Augmented Generation). Esta herramienta permite a los técnicos generar reportes con lenguaje técnico profesional y realizar consultas en tiempo real sobre la base de conocimiento y documentación técnica de la empresa, todo directamente desde la app.

## El Problema

Antes de Anku, las operaciones de mantenimiento dependían de un flujo de trabajo analógico basado en reportes en papel. Este modelo presentaba tres puntos críticos de fricción:

1. **Falta de trazabilidad:** Al no existir indexación de los documentos, era imposible buscar históricos de intervenciones de forma rápida.
2. **Limitaciones técnicas:** Impedía adjuntar evidencia visual (fotografías, documentos, certificados) o información detallada de las intervenciones.
3. **Dependencia absoluta de la conectividad:** Dejaba a los técnicos inoperantes en zonas remotas de las plantas sin señal de internet.

Además, el proceso carecía de un mecanismo ágil para la validación de servicios por parte del cliente, lo que retrasaba la gestión administrativa y la facturación.

## El Reto Técnico

El desarrollo de Anku enfrentó desafíos críticos de ingeniería, principalmente al buscar continuidad operativa en entornos industriales sin conexión a internet. Mi enfoque técnico se centró en tres pilares fundamentales:

- **Arquitectura Offline-First de Alta Confiabilidad:** Diseñé un sistema de sincronización bidireccional utilizando **IndexedDB** (con **Dexie.js**) en el cliente como capa de persistencia local. El reto radicó en implementar una lógica de sincronización incremental inteligente que fusionara automáticamente los cambios realizados en campo con la base de datos central (**PostgreSQL**), garantizando la integridad referencial y evitando conflictos de datos, incluso tras periodos prolongados de desconexión.
- **Experiencia de Usuario (UX) Orientada a Campo:** Para eliminar la dependencia del papel, desarrollé un editor de reportes técnico avanzado integrado directamente en la PWA. Este sistema permite a los técnicos generar informes estructurados con texto enriquecido, adjuntar evidencias multimedia y gestionar datos complejos mediante una interfaz intuitiva, diseñada específicamente para ser funcional tanto en entornos de escritorio como en dispositivos móviles bajo condiciones exigentes.
- **Flujo Automatizado de Validaciones y Cierre:** Implementé un protocolo de validación in-situ mediante códigos QR, que permite al cliente autorizar las intervenciones de forma instantánea. Una vez validado, el sistema dispara un flujo automatizado que consolida la información en un formato PDF profesional y lo entrega al cliente vía correo electrónico en tiempo real, cerrando así el ciclo operativo de forma transparente, trazable y sin intervención manual.

## La Solución

Para resolver los retos operativos, diseñé una Progressive Web App (PWA) con una capa de persistencia local robusta basada en **IndexedDB (Dexie.js)**. 

Implementé una estrategia de sincronización bidireccional que encola operaciones ante la pérdida de conectividad, garantizando la integridad de los datos. Al recuperar el acceso a la red, un middleware especializado en **NestJS** procesa las colas mediante una resolución de conflictos basada en marcas de tiempo (timestamps), sincronizando de manera transparente con **PostgreSQL**.

Este sistema automatizado no solo digitalizó el flujo de trabajo, sino que **redujo en un 80% los tiempos de generación y consulta** de reportes técnicos, eliminando por completo la dependencia de procesos manuales. Además, integré un agente inteligente con capacidades de **RAG (Retrieval-Augmented Generation)**, potenciado por **Gemini**, que proporciona a los técnicos acceso inmediato a documentación técnica y genera reportes con lenguaje profesional, optimizando la eficiencia operativa.