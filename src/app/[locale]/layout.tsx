import { importLocale } from "@/locales";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { useLocale } from "next-intl";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const messages = (await importLocale({ locale: params.locale })).messages;

  const title = "Dan Gazzaneo";
  const description = messages.home.slogan;

  return {
    metadataBase: new URL("https://dangazzaneo.dev"),
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://dangazzaneo.dev/",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = useLocale();
  let messages = {};

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="bg-base-100 text-base-content">{children}</div>
      </body>
    </html>
  );
}
