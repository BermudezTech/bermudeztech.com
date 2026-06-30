"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-brand-lightblue text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-darkblue active:scale-95"
    >
      {theme === "light" ? (
        // Moon Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 rotate-0 hover:rotate-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ) : (
        // Sun Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 rotate-0 hover:rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m0 13.5V21M5.03 5.03l1.591 1.591M17.38 17.38l1.591 1.591M3 12h2.25m13.5 0H21M5.03 18.97l1.591-1.591M17.38 6.62l1.591-1.591M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          />
        </svg>
      )}
    </button>
  );
}
