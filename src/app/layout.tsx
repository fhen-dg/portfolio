import type { Metadata } from "next";
import { Wix_Madefor_Text } from "next/font/google";
import { LocaleProvider } from "@/components/ui/LocaleProvider";
import "@/styles/globals.css";

const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
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
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
