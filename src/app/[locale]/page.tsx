import { Footer } from "@/components/Footer";
import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      <div className="container flex flex-col w-full h-full px-6 gap-6 xl:gap-10 xl:flex-row">
        <LeftPanel />
        <RightPanel />
        <section className="flex pb-6 xl:hidden">
          <Footer />
        </section>
      </div>
    </main>
  );
}
