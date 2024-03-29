import type { Metadata } from "next";
import { Noto_Sans_JP, Rampart_One } from "next/font/google";
import "./globals.css";

const NotoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-NotoSansJP",
});
const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-RampartOne",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSansJP.variable} ${RampartOneFont.variable} font-NotoSansJP`}
      >
        {children}
      </body>
    </html>
  );
}
