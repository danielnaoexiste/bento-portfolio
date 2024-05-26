"use client";
import { IBentoItem } from "@/interfaces/bento";
import { Icon } from "../../Icon";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface BentoItemSocialProps {
  item: IBentoItem;
}

const SocialButton = ({ item }: BentoItemSocialProps) => {
  const t = useTranslations("socials");

  return (
    <button
      style={{
        backgroundColor: item.color,
      }}
      className="flex px-3 py-1 items-center gap-2 text-sm font-medium rounded-lg max-w-fit text-neutral-100"
    >
      {t(item.buttonTitle)}
    </button>
  );
};

export const BentoItemSocial = ({ item }: BentoItemSocialProps) => {
  const t = useTranslations("socials");

  const { title, link, layout, color, icon, subtitle, description } = item;

  return (
    <a
      key={title}
      target="_blank"
      href={link}
      className="card min-w-fit w-full h-full bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <div className="flex gap-2 items-start flex-col">
          <div className="flex justify-between items-center sm:gap-2 w-full">
            {icon && <Icon color={color}>{icon}</Icon>}
            <SocialButton item={item} />
          </div>
          <div className="flex flex-col">
            <h2 className="card-title line-clamp-1">{title}</h2>
            <div className="text-sm text-neutral-500">{subtitle}</div>
            {description && (
              <p
                className={clsx("text-sm text-neutral-500", {
                  "line-clamp-1": layout === "1x2",
                  "line-clamp-2 lg:line-clamp-3 ": layout === "2x2",
                })}
              >
                {t(description)}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};
