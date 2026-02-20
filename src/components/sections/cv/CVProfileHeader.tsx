import Image from "next/image";
import type { CVData } from "@/lib/types";

type CVProfileHeaderProps = {
  profile: CVData["profile"];
};

export function CVProfileHeader({ profile }: CVProfileHeaderProps) {
  return (
    <section className="flex flex-col gap-[24px] items-center w-full">
      <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center mb-[32px] text-center">
        <div className="flex flex-col gap-0 items-center">
        <h1 className="title4 md:title3 text-neutral-black">{profile.name}</h1>
        <p className="title4 md:title3 text-primary-base">{profile.nickname}</p>
        </div>
        <p className="body1 text-neutral-600">{profile.role}</p>
      </div>
      <div className="w-full border-b border-neutral-400" />
    </section>
  );
}
