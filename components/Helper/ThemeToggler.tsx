"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const mountCheck = () => setMounted(true);
    mountCheck();
  }, []);

  // On the server the theme is unknown — render nothing until we're in the browser
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transition w-10 h-10 cursor-pointer flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-ink dark:text-white w-7 h-7 cursor-pointer" />
      ) : (
        <BiMoon className="text-ink dark:text-white w-7 h-7 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
