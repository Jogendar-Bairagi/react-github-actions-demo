import { useEffect, useState } from "react";

const initial = () => {
  try {
    return (
      localStorage.getItem("theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  } catch {
    return "light";
  }
};

export default function useTheme() {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
