import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Link from "next/link";

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
        <Link href="/" className="flex justify-center w-full p-6">
          <div className="flex items-center justify-center w-full gap-3 tablet:justify-start max-w-7xl">
            <Image src={logo} alt="logo" />
            <p className={`${branch.className} text-2xl`}>Oruchan ASAR</p>
          </div>
        </Link>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
