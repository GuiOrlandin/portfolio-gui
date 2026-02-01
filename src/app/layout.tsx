import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import LangSync from "./components/lang-sync";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Orlandin | Full-Stack Developer",
  description:
    "Portfólio de Guilherme Orlandin — Desenvolvimento de Software com foco em React, Node.js e Next.js.",
  icons: { icon: "/fav-icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased font-sans min-h-screen bg-[var(--bg)]">
        <Suspense fallback={null}>
          <LangSync />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
