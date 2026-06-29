import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BERMUDEZ TECH | Ingeniero de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-t from-brand-grey to-white dark:from-brand-darkgrey dark:to-brand-charcoal transition-colors duration-500">
        <ThemeProvider>
          <Header />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
