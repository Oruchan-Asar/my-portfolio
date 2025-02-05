"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 transition-all duration-300 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className
      )}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5 text-white" />
      )}
    </button>
  );
}
