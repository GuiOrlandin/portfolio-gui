import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import LangSync from "./components/lang-sync";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Orlandin | Full-Stack Developer",
  description:
    "Desenvolvedor Full Stack com React, Next.js, Node.js e TypeScript — arquitetura, APIs REST e confiabilidade em checkout, pagamentos e PDV.",
  icons: { icon: "/fav-icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-dvh bg-[var(--bg)] font-sans antialiased">
        <Suspense fallback={null}>
          <LangSync />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
