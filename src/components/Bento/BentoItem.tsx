"use client";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = cva("rounded-3xl flex flex-col justify-center", {
  variants: {
    size: {
      "1x2": "md:col-span-1 sm:col-span-2 col-span-full row-span-2",
      "2x2": "md:col-span-2 col-span-full row-span-2",
      "2x4": "md:col-span-2 col-span-full row-span-4 relative",
      responsive:
        "md:col-span-2 col-span-full row-span-4 relative xl:col-span-2 xl:row-span-2",
    },
  },
  defaultVariants: {
    size: "1x2",
  },
});

interface BentoItemProps extends VariantProps<typeof variants> {
  children: ReactNode;
}

export const BentoItem = ({ size, children }: BentoItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className: "duration-75 transition-all ease-in-out",
        })
      )}
    >
      {children}
    </motion.div>
  );
};
