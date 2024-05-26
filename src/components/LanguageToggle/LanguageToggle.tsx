"use client";
import React from "react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/locales";

export const LanguageToggle = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = useLocale();

  const handleSelect = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <label className="swap hover:opacity-75">
      <input
        type="checkbox"
        checked={currentLocale === "pt"}
        onChange={() => handleSelect(currentLocale === "en" ? "pt" : "en")}
      />
      <div className="swap-on">EN</div>
      <div className="swap-off">PT</div>
    </label>
  );
};
