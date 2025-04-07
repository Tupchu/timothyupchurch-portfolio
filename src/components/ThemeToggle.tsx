import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // On component mount: check localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Toggle and save preference
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="group w-full">
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.blur();
          toggleTheme();
        }}
        className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 group-hover:bg-gray-300 active:bg-gray-100 text-sm text-gray-800 dark:bg-gray-700 dark:border-gray-700 dark:group-hover:bg-gray-600 dark:group-hover:border-gray-600 dark:active:bg-gray-700 dark:active:border-gray-700 dark:text-gray-100 transition-colors"
      >
        {theme === "dark" ? (
          <span className="flex gap-2 justify-center">
            <Sun /> Light Mode
          </span>
        ) : (
          <span className="flex gap-2 justify-center">
            <Moon /> Dark Mode
          </span>
        )}
      </button>
    </div>
  );
}
