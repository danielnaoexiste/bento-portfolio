"use client";
import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context";
import { useTranslations } from "next-intl";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("aria");

  return (
    <div className="form-control">
      <label className="label hover:opacity-75 cursor-pointer gap-2 swap swap-rotate">
        <input
          aria-label={t("toggleTheme")}
          type="checkbox"
          onChange={() => toggleTheme()}
          checked={theme === "light"}
        />
        <BsMoon className="swap-on" />
        <BsSun className="swap-off" size={16} />
      </label>
    </div>
  );
};
