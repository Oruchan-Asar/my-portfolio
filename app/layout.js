import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
import triangle from "@/public/triangle.png";
import logo from "@/public/logo.svg";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Link from "next/link";
import Motion from "@/components/Motion";

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
      <body className={`${inter.className} overflow-x-hidden`}>
        <Link href="/" className="flex justify-center w-full p-6">
          <div className="flex items-center w-full gap-3 max-w-7xl">
            <Image src={logo} alt="logo" />
            <p className={`${branch.className} text-2xl`}>Oruchan ASAR</p>
          </div>
        </Link>
        <NavMenu />
        <Motion>
          <div className="absolute border rounded-full border-slate-500 -right-20 -top-20 -z-10 w-96 h-96" />
        </Motion>
        <Motion>
          <Image
            className="absolute -left-24 top-96 -z-10"
            src={triangle}
            alt="triangle"
          />
        </Motion>
        {children}
        <Footer />
      </body>
    </html>
  );
}
