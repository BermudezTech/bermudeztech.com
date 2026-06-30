import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-gradient-to-t from-brand-grey to-white dark:from-brand-darkgrey dark:to-brand-charcoal transition-colors duration-500">
        {/* Global Background Hero Image with Opacity (Repeated Y) */}
        <div 
          className="absolute inset-0 -z-10 select-none opacity-5 dark:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: "url('/heroimage.png')",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center top",
            backgroundSize: "100% auto"
          }}
        />
        <ThemeProvider>
          <Header />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
