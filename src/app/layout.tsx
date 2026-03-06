import type { Metadata } from "next";
import { Wix_Madefor_Text } from "next/font/google";
import { LocaleProvider } from "@/components/ui/LocaleProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "@/styles/globals.css";

const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fhendg.com"),
  title: "Federico Cohen Correa - Portfolio",
  description: "Senior Product Designer - Buenos Aires",
  openGraph: {
    title: "Federico Cohen Correa - Portfolio",
    description: "Senior Product Designer - Buenos Aires",
    images: [
      {
        url: "/images/profile/FhenLogoFinal.png",
        alt: "Federico Cohen Correa - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Cohen Correa - Portfolio",
    description: "Senior Product Designer - Buenos Aires",
    images: ["/images/profile/FhenLogoFinal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${wixMadeforText.variable} ${wixMadeforText.className}`}
    >
      <body>
        <LocaleProvider>
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
