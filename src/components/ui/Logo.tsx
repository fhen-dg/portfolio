import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Go to home page" className={className}>
      <Image
        src="/images/profile/FhenLogoFinal.svg"
        alt="fhen logo"
        width={size}
        height={size}
        priority
      />
    </Link>
  );
}
