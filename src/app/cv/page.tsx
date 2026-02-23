import { CVProfileHeader } from "@/components/sections/cv/CVProfileHeader";
import { CVAboutSection } from "@/components/sections/cv/CVAboutSection";
import { CVExperienceSection } from "@/components/sections/cv/CVExperienceSection";
import { CVProjectsSection } from "@/components/sections/cv/CVProjectsSection";
import { CVEducationSection } from "@/components/sections/cv/CVEducationSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function CVPage() {
  return (
    <main className="flex flex-col items-center px-5 py-[40px] lg:py-[60px] lg:px-[72px]">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-[56px] md:gap-[72px] items-center max-w-[600px] w-full">
          <CVProfileHeader
            name="Federico Cohen Correa"
            nickname="Fhen"
            image="/images/profile/CVPhoto.png"
            imageAlt="Federico Cohen Correa"
          />
          <CVAboutSection />
          <div className="w-full border-b border-neutral-400" />
          <CVExperienceSection />
          <div className="w-full border-b border-neutral-400" />
          <CVProjectsSection />
          <div className="w-full border-b border-neutral-400" />
          <CVEducationSection />
          <div className="w-full border-b border-neutral-400" />
          <ContactFooter />
          <div className="w-full h-[60px] lg:h-[120px]" />
        </div>
      </div>
    </main>
  );
}
