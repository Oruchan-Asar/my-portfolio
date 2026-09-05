import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oruchan ASAR",
  description:
    "Software developer building fast, thoughtful web experiences with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${fraunces.variable} overflow-x-hidden flex flex-col items-center bg-stone-50 dark:bg-stone-950`}
      >
        <ThemeProvider>
          <div className="top-0 flex justify-center w-full p-6 bg-stone-50 dark:bg-stone-950">
            <div className="flex justify-between w-full max-w-5xl gap-6">
              <Link href="/" className="flex items-center gap-3">
                <Logo />
                <p className="font-serif text-2xl italic text-stone-800 dark:text-stone-100">
                  Oruchan Asar
                </p>
              </Link>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <NavMenu />
              </div>
            </div>
          </div>
          <div className="w-full max-w-5xl">{children}</div>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
