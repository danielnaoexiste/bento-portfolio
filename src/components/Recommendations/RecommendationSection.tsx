"use client";

import { Recommendations } from "@/data/recommendations";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export const RecommendationSection = () => {
  const t = useTranslations("recommendations");
  const locale = useLocale();

  const [showOriginal, setShowOriginal] = useState<boolean>(false);

  return (
    <div className="flex flex-col mb-8 gap-y-8 w-full">
      {Recommendations.map((rec) => (
        <div
          key={rec.author}
          className="flex flex-col card bg-base-100 shadow-xl p-8"
        >
          <div className="flex flex-col lg:flex-row">
            <h3 className="text-2xl font-semibold">{t(rec.author)}</h3>
            <span className="text-xl mt-1 lg:ml-1">
              <span className="hidden lg:inline"> - </span>
              <span className="whitespace-nowrap">{t(rec.role)}</span>
            </span>
            <a
              aria-label="LinkedIn"
              key="LinkedIn"
              data-tip="LinkedIn"
              target="_blank"
              href={t(rec.linkedin)}
              className="tooltip ml-3 self-end text-2xl text-primary transition-all opacity-50 hover:opacity-100"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:scale-125" />
            </a>
          </div>

          <div className="flex flex-row text-sm text-neutral-500">
            <span>{t(rec.date)}</span>
            {rec.originalLang !== locale && (
              <>
                <span>&nbsp;-</span>
                <button
                  className="ml-1 hover:underline"
                  onClick={(_e) =>
                    setShowOriginal((showOriginal) => !showOriginal)
                  }
                >
                  {showOriginal ? t("translate") : t("original")}
                </button>
              </>
            )}
          </div>
          <div className="mt-1">
            {showOriginal ? t(rec.originalText) : t(rec.translatedText)}
          </div>
        </div>
      ))}
    </div>
  );
};
