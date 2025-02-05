import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import tw from "@/public/tw.png";
import LetterGlitch from "@/components/LetterGlitch";

const branch = localFont({
  src: "./Branch.ttf",
});

export default function Home() {
  const socialMedias = [
    {
      link: "https://github.com/Oruchan-Asar",
      name: "Github",
      icon: <GitHubLogoIcon className="dark:text-white" />,
    },
    {
      link: "https://linkedin.com/in/oruchan-asar/",
      name: "LinkedIn",
      icon: <LinkedInLogoIcon className="dark:text-white" />,
    },
    {
      link: "https://instagram.com/oruc.asar/",
      name: "Instagram",
      icon: <InstagramLogoIcon className="dark:text-white" />,
    },
    {
      link: "https://twitter.com/orucasar",
      name: "Twitter",
      icon: <TwitterLogoIcon className="dark:text-white" />,
    },
  ];
  return (
    <main className="flex justify-center w-full px-6 my-12 md:my-16 dark:bg-neutral-950">
      <div className="flex flex-col w-full gap-12 my-8 max-w-7xl">
        <h1
          className={`${branch.className} text-[max(36px,min(5vw,64px))] dark:text-neutral-200`}
        >
          Frontend Developer
        </h1>
        <div className="flex flex-col gap-8 text-[max(16px,min(5vw,20px))] text-slate-600 dark:text-neutral-400 max-w-4xl">
          <p>
            I develop and maintain web applications and services using Next.js.
          </p>
          <p>
            I enjoy applying my programming and problem-solving skills to create
            innovative, user-friendly solutions for various clients and
            projects.
          </p>
        </div>
        <div className="flex gap-2 p-1 bg-white rounded-md shadow-md dark:bg-neutral-800 dark:shadow-neutral-900 w-fit">
          {socialMedias.map((socialMedia, index) => (
            <Link
              href={socialMedia.link}
              target="_blank"
              key={index}
              className="p-2 transition-all duration-300 ease-out rounded-md hover:bg-blue-200 dark:hover:bg-neutral-700 dark:text-neutral-200"
            >
              {socialMedia.icon}
            </Link>
          ))}
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={tw}
            alt="SonSilah2"
            className="absolute top-0 left-0 z-10 object-cover w-full transition-all duration-500 ease-out rounded-md hover:opacity-80 h-96 grayscale hover:grayscale-0 dark:brightness-90 dark:contrast-125"
          />
          <LetterGlitch />
        </div>
      </div>
    </main>
  );
}
