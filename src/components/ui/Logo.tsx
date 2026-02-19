import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Go to home page">
      {/* Mobile logo (< md) */}
      <Image
        src="/images/profile/FhenLogoFinalMobile.svg"
        alt="fhen logo"
        width={24}
        height={24}
        priority
        className="block md:hidden"
      />
      {/* Desktop logo (≥ md) */}
      <Image
        src="/images/profile/FhenLogoFinal.svg"
        alt="fhen logo"
        width={18}
        height={44}
        priority
        className="hidden md:block"
      />
    </Link>
  );
}
