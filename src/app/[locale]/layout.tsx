import { importLocale } from "@/locales";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { useLocale, NextIntlClientProvider } from "next-intl";
import ThemeProvider, { Themes } from "@/context/Theme";
import { cookies } from "next/headers";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const test = (test: number) => {};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = useLocale();
  let messages = {};

  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;

  if (params.locale !== locale) {
    notFound();
  }

  messages = (await importLocale({ locale })).messages;

  return (
    <html className="h-full" lang={locale}>
      <body className="h-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider defaultTheme={theme as Themes}>
            <div className="bg-base-300 text-base-content h-fit min-h-screen">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
