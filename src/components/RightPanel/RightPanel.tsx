"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

import { BentoItems } from "@/data/bento-items";

import {
  BentoItem,
  BentoItemProject,
  BentoItemSkills,
  BentoItemSocial,
} from "../Bento";

export const RightPanel = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: stagger(0.02),
        }
      );
    }
  }, [animate, scope]);

  return (
    <div
      ref={scope}
      className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 auto-rows-[76px]"
    >
      {BentoItems.map((item) => (
        <BentoItem key={item.title} size={item.layout}>
          {item.type === "social" && <BentoItemSocial item={item} />}
          {item.type === "project" && (
            <BentoItemProject item={item} translateKey="projects" />
          )}
          {item.type === "game" && (
            <BentoItemProject item={item} translateKey="games" />
          )}
          {item.type === "skills" && <BentoItemSkills item={item} />}
        </BentoItem>
      ))}
    </div>
  );
};
