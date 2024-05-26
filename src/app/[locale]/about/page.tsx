"use client";
import { Footer } from "@/components/Footer";
import { LeftPanel } from "@/components/LeftPanel";
import { WorkHistory } from "@/components/WorkHistory";
import { stagger, useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { RecommendationSection } from "@/components/Recommendations";

function MotionDiv({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className="duration-75 transition-all ease-in-out pt-8"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const t = useTranslations("about");

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
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      <div className="container flex flex-col w-full h-full px-6 gap-6 xl:gap-10 xl:flex-row">
        <LeftPanel />
        <div
          ref={scope}
          className="flex flex-col px-6 pb-8 pt-0 xl:pt-10 xl:max-w-screen-lg"
        >
          <MotionDiv>
            <h2 className="text-3xl font-semibold mb-8">{t("about")}</h2>

            <div className="card bg-base-100 shadow-xl p-8">
              <p>{t("paragraph")}</p>
            </div>
          </MotionDiv>
          <MotionDiv>
            <h2 className="text-3xl font-semibold mb-8">{t("work")}</h2>

            <div className="card bg-base-100 shadow-xl p-8">
              <WorkHistory />
            </div>
          </MotionDiv>
          <MotionDiv>
            <h2 className="text-3xl font-semibold mb-8">
              {t("recommendations")}
            </h2>

            <RecommendationSection />
          </MotionDiv>
        </div>
        <section className="flex pb-6 xl:hidden">
          <Footer />
        </section>
      </div>
    </main>
  );
}
