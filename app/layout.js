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
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden flex flex-col items-center`}
      >
        <div className="top-0 flex justify-center w-full p-6 bg-white blur-0">
          <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-6 tablet:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="logo" priority />
              <p className={`${branch.className} text-2xl`}>Oruchan ASAR</p>
            </Link>
            <NavMenu />
          </div>
        </div>
        <div className="w-full max-w-5xl">{children}</div>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
