"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FaFilePdf, FaHome, FaIdCard } from "react-icons/fa";
import { Footer } from "../Footer";
import { usePathname, useRouter } from "@/locales";

export const LeftPanel = () => {
  const t = useTranslations("about");
  const router = useRouter();
  const locale = useLocale();
  const currentPath = usePathname();

  const cvLocation =
    locale === "en"
      ? "https://cv.dangazzaneo.dev/en"
      : "https://cv.dangazzaneo.dev/pt";

  return (
    <section className="xl:sticky xl:top-0 flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full">
      <div>
        <div className="mt-6">
          <div className="flex">
            <div className="w-32 h-32">
              <Image
                alt=""
                layout=""
                width={120}
                height={120}
                loading="lazy"
                placeholder="blur"
                src="/images/profile.webp"
                blurDataURL="/images/profile.webp"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-4xl font-bold">{t("name")}</h1>
              <div className="text-lg font-medium text-primary">
                {t("title")}
              </div>
            </div>
          </div>
          <p className="text-2xl font-light">{t("bio")}</p>
        </div>
        <div className="flex items-center gap-3 mt-6">
          {currentPath === "/" && (
            <button
              type="button"
              onClick={() => router.push("/about")}
              className="btn btn-outline btn-neutral"
            >
              <FaIdCard size="14" />
              {t("about")}
            </button>
          )}

          {currentPath === "/about" && (
            <button
              type="button"
              onClick={() => router.push("/")}
              className="btn btn-outline btn-neutral"
            >
              <FaHome size="14" />
              {t("homepage")}
            </button>
          )}

          <button
            type="button"
            onClick={() => window.open(cvLocation, "_blank")}
            className="btn btn-outline btn-primary"
          >
            <FaFilePdf size={14} />
            {t("cv")}
          </button>
        </div>

        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </section>
  );
};
