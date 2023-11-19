import { getRequestConfig } from "next-intl/server";

export const importLocale = async ({ locale }: { locale: string }) => {
  const languages = (await import(`./${locale}`)) ?? {};
  return {
    messages: { ...languages },
  };
};

export default getRequestConfig(importLocale);
