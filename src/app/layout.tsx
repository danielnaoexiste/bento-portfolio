import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return children;
}

export async function generateMetadata(): Promise<Metadata> {
  const name = "Dan Gazzaneo";
  const fullName = "Daniel Gazzaneo Denardo";
  const job = "Senior Front-end Developer";
  const description =
    "Dan Gazzaneo is a senior front-end developer based in Brazil, passionate about creating beautiful and accessible user experiences.";

  const url = process.env.NEXT_PUBLIC_DOMAIN!;

  const title = `${name} | ${job}`;

  return {
    metadataBase: new URL(url),
    alternates: {
      canonical: "/pt",
      languages: {
        "en-US": "/en",
        "pt-BR": "/pt",
      },
    },
    title,
    description,
    keywords: [
      name,
      fullName,
      "Next.js",
      "React",
      "TypeScript",
      "Desenvolvedor",
      "Developer",
    ],
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "/images/preview.webp",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}
