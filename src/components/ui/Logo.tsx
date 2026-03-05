import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Go to home page">
      <Image
        src="/images/profile/FhenLogoFinal.svg"
        alt="fhen logo"
        width={32}
        height={32}
        priority
      />
    </Link>
  );
}
