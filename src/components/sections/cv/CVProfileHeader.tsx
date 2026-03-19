"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";

type CVProfileHeaderProps = {
  name: string;
  nickname: string;
  image: string;
  imageAlt: string;
};

export function CVProfileHeader({
  name,
  nickname,
  image,
  imageAlt,
}: CVProfileHeaderProps) {
  const { t } = useLocale();

  return (
    <section className="flex flex-col gap-[24px] items-center w-full">
      <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center mb-[32px] text-center">
        <div className="flex flex-col md:flex-row gap-0 items-center">
          <h1 className="title4 md:title3 text-neutral-800">{name}</h1>
          <span className="text-neutral-800 title4 md:title3"> – </span>
          <p className="title4 md:title3 text-primary-base">{nickname}</p>
        </div>
        <p className="body3 text-neutral-500">{t.cv.profile.role}</p>
      </div>
      <div className="w-full border-b border-neutral-400" />
    </section>
  );
}
