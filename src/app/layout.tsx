import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/header/TopManu";

const grotesque = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ielts-course",
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
        className={`${grotesque.className} antialiased`}
        data-new-gr-c-s-check-loaded="14.1246.0"
        data-gr-ext-installed=""
         cz-shortcut-listen="true"
      >
        <TopMenu/>
        {children}
      </body>
    </html>
  );
}
