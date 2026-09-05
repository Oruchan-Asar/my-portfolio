import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const socialMedias = [
  { link: "https://github.com/Oruchan-Asar", name: "Github", icon: <GitHubLogoIcon /> },
  { link: "https://linkedin.com/in/oruchan-asar/", name: "LinkedIn", icon: <LinkedInLogoIcon /> },
  { link: "https://instagram.com/oruc.asar/", name: "Instagram", icon: <InstagramLogoIcon /> },
  { link: "https://twitter.com/orucasar", name: "Twitter", icon: <TwitterLogoIcon /> },
];

export default function Footer() {
  return (
    <div className="flex justify-center w-full px-6 mt-16 mb-8">
      <div className="flex flex-col items-center w-full max-w-5xl gap-4 pt-8 border-t border-stone-200 dark:border-stone-800">
        <div className="flex gap-4">
          {socialMedias.map((socialMedia) => (
            <Link
              href={socialMedia.link}
              target="_blank"
              key={socialMedia.name}
              aria-label={socialMedia.name}
              className="text-stone-500 transition-colors hover:text-clay-600 dark:text-stone-400 dark:hover:text-clay-400"
            >
              {socialMedia.icon}
            </Link>
          ))}
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          &copy; {new Date().getFullYear()} Oruchan Asar. Built with Next.js.
        </p>
      </div>
    </div>
  );
}
