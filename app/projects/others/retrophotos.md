---
id: "retrophotos"
title: "RETROPHOTOS"
subtitle: "Experiencia digital de álbumes familiares y colaboración fotográfica."
description: "Plataforma web diseñada para rescatar el valor de las fotografías digitales. Permite crear, organizar y compartir álbumes personales con otros usuarios, fomentando la creación de una biblioteca pública colaborativa."
stack: ["React", "Vite", "Node.js", "Express", "MySQL"]
github: "https://github.com/BermudezTech/retrophotos"
live: "https://bermudeztech.com/retrophotos"
images: [
  "/projects/retrophotos/retrophotos-1.png",
  "/projects/retrophotos/retrophotos-2.png",
  "/projects/retrophotos/retrophotos-3.png",
]
---

**RETROPHOTOS** es una aplicación diseñada bajo la premisa de recuperar la experiencia nostálgica de consultar un álbum fotográfico físico. En la era actual, donde miles de fotos quedan olvidadas en el almacenamiento local de nuestros dispositivos, esta plataforma ofrece un espacio interactivo y colaborativo para revivir recuerdos.

**Logros técnicos clave:**

- **Vista de Álbum Inmersiva:** Interfaz optimizada para el acomodo y visualización de imágenes que imita la experiencia de navegación de un álbum tradicional, totalmente adaptable a diferentes dispositivos (Responsive Design).
- **Sistema Colaborativo:** Gestión de álbumes compartidos que permite a múltiples usuarios colaborar en la curaduría de eventos o recuerdos familiares.
- **Biblioteca Pública (Librería):** Espacio centralizado donde los usuarios pueden contribuir con imágenes, facilitando la creación de una memoria compartida.
- **Jerarquía de Usuarios:** Implementación de un sistema de roles (Administrador, Moderador y Usuario) para garantizar un entorno seguro y organizado.
- **Gestión de Recursos:** Sistema robusto de CRUD para el manejo, subida y organización de imágenes, permitiendo que el usuario tome control total sobre su contenido.

## El Problema

En la actualidad, el exceso de capturas digitales provoca que las fotografías pierdan su valor emocional. Los usuarios enfrentan tres problemas principales:

1. **Fragmentación:** Las fotos se acumulan en galerías de celulares sin orden lógico ni narrativo.
2. **Desconexión:** Existe una dificultad para compartir momentos especiales con familiares o amigos de forma organizada.
3. **Pérdida de valor:** Al no tener un espacio dedicado para revivir los momentos, las imágenes terminan siendo archivos estáticos que rara vez se vuelven a consultar.

## El Reto Técnico

El desafío central fue crear una experiencia de usuario fluida y visualmente atractiva que permitiera la organización de colecciones grandes sin sacrificar el rendimiento:

- **Estructura y Acomodo:** Desarrollar un motor de vista tipo "álbum" que adaptara su layout dinámicamente según el dispositivo y la cantidad de imágenes.
- **Sincronización:** Implementar una lógica de permisos precisa para manejar álbumes compartidos de manera segura entre diferentes usuarios de la plataforma.
- **Desempeño:** Asegurar una carga eficiente de imágenes de alta resolución mediante optimización de activos y un backend preparado para la alta concurrencia de datos visuales.

## La Solución

Desarrollé una aplicación SPA (Single Page Application) utilizando **React** y **Vite**, que prioriza la velocidad de navegación y la interactividad. La plataforma permite a los usuarios subir sus fotos, enlazarlas a álbumes personalizados y decidir qué contenido desea mantener privado y cuál desea compartir en la **Librería Pública**.

El sistema no solo digitaliza el flujo de trabajo de organización, sino que transforma el proceso de ver fotos en una experiencia social y narrativa, eliminando la barrera técnica entre el usuario y sus recuerdos. Además, gracias a su arquitectura responsiva, el usuario puede consultar su "álbum real" desde cualquier lugar, manteniendo siempre la esencia de una colección fotográfica organizada y colaborativa.