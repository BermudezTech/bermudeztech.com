"use client";

import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      {/* GitHub */}
      <a
        href="https://github.com/BermudezTech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lightblue text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-brand-darkblue active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/jose-eduardo-bermudez"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lightblue text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-brand-darkblue active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lightblue text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-brand-darkblue active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path d="M23.498 6.163c-.272-1.016-1.072-1.816-2.088-2.088C19.578 3.545 12 3.545 12 3.545s-7.578 0-9.41.53c-1.016.272-1.816 1.072-2.088 2.088C0 7.995 0 11.857 0 11.857s0 3.862.502 5.694c.272 1.016 1.072 1.816 2.088 2.088 1.832.53 9.41.53 9.41.53s7.578 0 9.41-.53c1.016-.272 1.816-1.072 2.088-2.088.502-1.832.502-5.694.502-5.694s0-3.862-.502-5.694zM9.545 15.568V8.144L16 11.856l-6.455 3.712z" />
        </svg>
      </a>
    </div>
  );
}
