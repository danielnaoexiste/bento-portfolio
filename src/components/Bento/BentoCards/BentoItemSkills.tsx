"use client";
import { IBentoItem } from "@/interfaces/bento";
import { TechBadges } from "../../TechBadges";
import { useTranslations } from "next-intl";

interface BentoItemSkillsProps {
  item: IBentoItem;
}

export const BentoItemSkills = ({ item }: BentoItemSkillsProps) => {
  const t = useTranslations("work");
  const { title } = item;

  return (
    <div
      key={title}
      className="card min-w-fit w-full h-full bg-base-100 shadow-xl"
    >
      <div className="card-body pt-6">
        <h2 className="card-title line-clamp-1">{t(title)}</h2>
        <div className="flex h-full gap-4 items-start justify-around flex-col">
          <TechBadges />
        </div>
      </div>
    </div>
  );
};
