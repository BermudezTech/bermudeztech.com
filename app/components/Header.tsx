"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md transition-colors duration-500">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo2.svg"
            alt="Bermudez Tech Logo"
            width={32}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-xl font-extrabold tracking-[0.25em] uppercase hidden sm:inline-block">
            <span className="text-brand-darkblue">BERMUDEZ</span>{" "}
            <span className="text-brand-lightblue">TECH</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about-me"
            className="font-display text-sm font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue transition-colors duration-200"
          >
            Acerca de
          </Link>
          <Link
            href="/projects"
            className="font-display text-sm font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue transition-colors duration-200"
          >
            Proyectos
          </Link>
          <SocialLinks />
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-lightblue px-5 py-2 font-display text-sm font-bold tracking-wider text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-darkblue hover:shadow-md active:translate-y-0"
          >
            CV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lightblue/10 text-brand-darkblue hover:bg-brand-lightblue/20 dark:bg-brand-lightblue/20 dark:text-brand-lightblue md:hidden transition-colors duration-200"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 mx-4 rounded-2xl border border-neutral-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-950/95 flex flex-col gap-4 md:hidden transition-all duration-300">
            <Link
              href="/about-me"
              onClick={() => setIsOpen(false)}
              className="font-display text-base font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue py-2 transition-colors duration-200"
            >
              Acerca de
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="font-display text-base font-semibold text-neutral-600 hover:text-brand-darkblue dark:text-neutral-300 dark:hover:text-brand-lightblue py-2 transition-colors duration-200"
            >
              Proyectos
            </Link>

            {/* Social Links inside Mobile Menu */}
            <div className="flex justify-center py-2.5 border-t border-b border-neutral-100 dark:border-neutral-900/50 my-1">
              <SocialLinks />
            </div>

            <Link
              href="/SoftwareEngineerCV.pdf"
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-full bg-brand-lightblue py-2.5 font-display text-sm font-bold tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-brand-darkblue active:scale-[0.98]"
            >
              CV
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
