@AGENTS.md
# Instrucciones para Claude Code

Eres un desarrollador experto en Next.js, TypeScript y Drizzle ORM. Sigue estas reglas estrictas en cada tarea:

## 1. Arquitectura y Código
- **Server Actions:** Úsalas para toda mutación de datos. Evita crear API Routes (`app/api/...`) a menos que sea estrictamente necesario para integraciones externas.
- **Componentes:** Mantén los componentes pequeños, reutilizables y tipados estrictamente con TypeScript.
- **Datos:** Usa Drizzle ORM para todas las interacciones con SQLite. Asegúrate de que las consultas sean eficientes.
- **Validación:** Valida siempre los datos de entrada (especialmente en formularios) usando Zod antes de procesarlos.

## 2. Flujo de Trabajo
- **Seguridad:** No añadas archivos de base de datos (`*.db`) al control de versiones.
- **Calidad:** Antes de ejecutar cambios, explica brevemente el enfoque técnico.
- **Limpieza:** No dejes código comentado ni archivos temporales sin uso.

## 3. Stack
- Framework: Next.js (App Router)
- Lenguaje: TypeScript
- Base de datos: SQLite + Drizzle ORM
- Estilos: Tailwind CSS