import { useState, useEffect, useCallback } from "react";

export type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

/**
 * Manages theme switching between light, dark, and system (auto).
 *
 * ```tsx
 * const { theme, resolvedTheme, setTheme } = useTheme();
 *
 * <Toggle
 *   label="Dark mode"
 *   checked={resolvedTheme === "dark"}
 *   onChange={(on) => setTheme(on ? "dark" : "light")}
 * />
 * ```
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof localStorage === "undefined") return "system";
    return (localStorage.getItem("bbui-theme") as Theme) ?? "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    theme === "system" ? getSystemTheme() : theme
  );

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    if (typeof localStorage !== "undefined") {
      if (next === "system") {
        localStorage.removeItem("bbui-theme");
      } else {
        localStorage.setItem("bbui-theme", next);
      }
    }
  }, []);

  // Apply data-theme attribute and resolve
  useEffect(() => {
    applyTheme(theme);
    setResolvedTheme(theme === "system" ? getSystemTheme() : theme);
  }, [theme]);

  // Listen for system theme changes when in "system" mode
  useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolvedTheme(getSystemTheme());
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  return { theme, resolvedTheme, setTheme } as const;
}
