import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 py-[40px] md:px-[72px]">
      <HeroSection />
      <div className="h-[200px] w-full" />
      <ProjectsSection />
      <div className="h-[200px] w-full" />
      <ContactFooter />
      <div className="h-[120px] w-full" />
    </main>
  );
}
