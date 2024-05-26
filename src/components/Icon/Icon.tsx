import type { ReactNode } from "react";

export const Icon = ({
  color = "#fff",
  children,
}: {
  color?: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0 text-neutral-100"
    >
      {children}
    </div>
  );
};
