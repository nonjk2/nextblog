import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "은석의 블로그",
    template: "은석의 블로그 | %s",
  },
  description: "은석의 블로그입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        {/* 헤더 */}
        <Header />
        <main className="grow">{children}</main>
        {/* 헤더 */}
        <Footer />
      </body>
    </html>
  );
}
