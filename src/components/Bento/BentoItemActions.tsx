"use client";
import { IBentoItem } from "@/interfaces/bento";

interface BentoItemActionsProps {
  item: IBentoItem;
  t: (key: string) => string;
}

export const BentoItemActions = ({ item, t }: BentoItemActionsProps) => {
  const { actions } = item;

  return (
    <>
      {actions && actions.length > 0 && (
        <div className="self-end">
          {actions.length === 1 ? (
            <object type="bits/dev">
              <a
                className="btn btn-sm btn-outline whitespace-nowrap btn-primary self-end"
                href={actions[0].link}
                target="_blank"
              >
                {t("source")}
              </a>
            </object>
          ) : (
            <details className="dropdown dropdown-end">
              <summary className="btn btn-outline whitespace-nowrap btn-primary">
                {t("source")}
              </summary>
              <ul className="p-2 z-50 shadow menu dropdown-content bg-base-300 font-medium rounded-box gap-2">
                {actions?.map((action) => (
                  <object key={action.text} type="bits/dev">
                    <li>
                      <a href={action.link} target="_blank">
                        {action.text}
                      </a>
                    </li>
                  </object>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
    </>
  );
};
