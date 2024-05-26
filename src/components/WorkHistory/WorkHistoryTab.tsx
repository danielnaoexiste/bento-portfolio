"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import type { WorkTabs } from "./WorkHistory";

interface WorkHistoryTabProps {
  tab: WorkTabs;
  activeTab: WorkTabs;
  setActiveTab: (tab: WorkTabs) => void;
  textColor: string;
  borderColor: string;
  translateKey: string;
}

export const WorkHistoryTab = ({
  tab,
  activeTab,
  textColor,
  borderColor,
  translateKey,
  setActiveTab,
}: WorkHistoryTabProps) => {
  const t = useTranslations("work");

  return (
    <a
      className={clsx(
        "tab text-base hover:opacity-75 whitespace-nowrap lg:text-xl justify-end",
        activeTab === tab && `md:border-b-2 ${borderColor} ${textColor}`
      )}
      onClick={() => setActiveTab(tab)}
    >
      {t(`workHistory.${translateKey}.title`)}
    </a>
  );
};
