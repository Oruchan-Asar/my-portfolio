import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const branch = localFont({
  src: "./Branch.ttf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oruchan ASAR",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden flex flex-col items-center dark:bg-neutral-950`}
      >
        <ThemeProvider>
          <div className="top-0 flex justify-center w-full p-6 bg-white dark:bg-neutral-950 blur-0">
            <div className="flex justify-between w-full max-w-5xl gap-6">
              <Link
                href="/"
                className="flex items-center justify-between gap-2"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={64}
                  height={64}
                  className="w-12"
                  priority
                />
                <p className={`${branch.className} text-2xl dark:text-white`}>
                  Oruchan ASAR
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
