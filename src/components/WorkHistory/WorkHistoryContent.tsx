"use client";

import { useTranslations } from "next-intl";

interface WorkHistoryContentProps {
  translateKey: string;
  textColor: string;
}

export const WorkHistoryContent = ({
  translateKey,
  textColor,
}: WorkHistoryContentProps) => {
  const t = useTranslations("work");

  return (
    <>
      <div className="flex flex-col">
        <div className="text-base sm:text-lg lg:text-xl font-bold">
          {t(`workHistory.${translateKey}.job`)}
          <span className={textColor}>
            {" @ "}
            <a
              className="link link-hover"
              href={t(`workHistory.${translateKey}.link`)}
              target="_blank"
              rel="noreferrer"
            >
              {t(`workHistory.${translateKey}.title`)}
            </a>
          </span>
        </div>
      </div>

      <p className="text-neutral-500">
        {t(`workHistory.${translateKey}.period`)}
      </p>
      <div className="py-1" />

      <p>{t(`workHistory.${translateKey}.description`)}</p>
    </>
  );
};
