import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 py-[40px] lg:px-[72px]">
      <RevealOnScroll className="w-full">
        <HeroSection />
      </RevealOnScroll>
      <div className="h-[80px] lg:h-[80px] w-full" />
        <ProjectsSection />
      <div className="h-[120px] lg:h-[200px] w-full" />
      <RevealOnScroll className="w-full" delay={100}>
        <ContactFooter />
      </RevealOnScroll>
      <div className="h-[120px] w-full" />
    </main>
  );
}
