import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../lib/projects";

export default function Projects() {
  const { highlighted, others, playground } = getProjects();

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
      {highlighted.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
            🌟 Proyectos Destacados
          </h2>
          <div className="flex flex-col gap-8">
            {highlighted.map((project) => (
              <ProjectCard
                key={project.id}
                variant="featured"
                {...project}
              />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects Section */}
      {others.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
            📁 Otros Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project) => (
              <ProjectCard
                key={project.id}
                variant="standard"
                {...project}
              />
            ))}
          </div>
        </section>
      )}

      {/* Playground Section */}
      {playground.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-8">
            🧪 Playground & Experimentos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {playground.map((project) => (
              <ProjectCard
                key={project.id}
                variant="minimal"
                {...project}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
