"use client";
import { IBentoItem } from "@/interfaces/bento";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Icon } from "../../Icon";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { BentoItemActions } from "../BentoItemActions";

interface BentoItemProjectProps {
  item: IBentoItem;
  translateKey: string;
}

export const BentoItemProject = ({
  item,
  translateKey,
}: BentoItemProjectProps) => {
  const t = useTranslations(translateKey);

  const { title, subtitle, link, color, icon, description, layout } = item;

  return (
    <a
      key={title}
      target="_blank"
      href={link}
      className="card min-w-fit w-full h-full bg-base-100 shadow-xl"
    >
      <div className="card-body flex items-start h-full flex-col">
        <div className="flex justify-between items-center sm:gap-2 w-full">
          {icon && <Icon color={color}>{icon}</Icon>}
          {link && <FaArrowUpRightFromSquare />}
        </div>

        <div className="flex flex-col w-full">
          <h2 className="card-title line-clamp-1">{t(title)}</h2>
          {subtitle && (
            <div className="text-sm text-neutral-500">{t(subtitle)}</div>
          )}
        </div>

        <div
          className={clsx("h-full flex flex-row justify-between w-full gap-2", {
            "flex-col": layout === "2x4",
          })}
        >
          {description && (
            <p
              className={clsx("text-sm leading-normal text-neutral-500", {
                "line-clamp-1": layout === "1x2",
                "line-clamp-2": layout == "2x2",
                "line-clamp-none": layout == "2x4",
              })}
            >
              {t(description)}
            </p>
          )}

          <BentoItemActions t={t} item={item} />
        </div>
      </div>
    </a>
  );
};
