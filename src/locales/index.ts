import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const importLocale = async ({ locale }: { locale: string }) => {
  const languages = (await import(`./${locale}`)) ?? {};
  return {
    messages: { ...languages },
  };
};

export const locales = ["en", "pt"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default getRequestConfig(importLocale);
