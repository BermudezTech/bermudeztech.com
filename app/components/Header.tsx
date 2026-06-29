import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
          <span className="font-display text-xl font-extrabold tracking-[0.25em] uppercase">
            <span className="text-brand-darkblue">BERMUDEZ</span>{" "}
            <span className="text-brand-lightblue">TECH</span>
          </span>
        </Link>

        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-lightblue px-5 py-2 font-display text-sm font-bold tracking-wider text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-darkblue hover:shadow-md active:translate-y-0"
        >
          CV
        </Link>
      </div>
    </header>
  );
}
