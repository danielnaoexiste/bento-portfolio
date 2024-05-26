"use client";
import type { FC, ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { setCookie } from "nookies";

export type Themes = "dark" | "light";

interface ThemeProps {
  theme: Themes;
  toggleTheme: () => void;
}

type ProviderProps = {
  children: ReactNode;
  defaultTheme: Themes;
};

const ThemeContext = createContext({
  theme: "dark" as Themes,
  toggleTheme: (): void => {
    throw new Error(
      `useTheme must be used within a ThemeProvider: toggleTheme`
    );
  },
});

const ThemeProvider: FC<ProviderProps> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((theme: Themes) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setCookie(null, "theme", theme);
    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
