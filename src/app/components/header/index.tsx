"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsFilePost } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { getTranslations } from "@/constants/translations";
import type { Locale } from "@/types/resume";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale: Locale = searchParams.get("lang") === "en" ? "en" : "pt";
  const t = getTranslations(locale);

  const isHome = pathname === "/";
  const isProjetos = pathname === "/projetos";

  const navUrl = (path: string) =>
    path === "/" ? `/?lang=${locale}` : `/projetos?lang=${locale}`;

  const setLang = (lang: Locale) => {
    const query = lang === "pt" ? "?lang=pt" : "?lang=en";
    router.push(`${pathname}${query}`);
  };

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 smallPhone:px-4 flex justify-end items-center gap-2 py-3">
        <div className="flex gap-1 mr-2">
          <button
            onClick={() => router.push(navUrl("/"))}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              isHome
                ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--border)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card)]"
            }`}
          >
            <FaHome size={18} />
            {t.nav.home}
          </button>
          <button
            onClick={() => router.push(navUrl("/projetos"))}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              isProjetos
                ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--border)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card)]"
            }`}
          >
            <BsFilePost size={18} />
            {t.nav.projects}
          </button>
        </div>
        <div className="flex border border-[var(--border)] rounded-lg p-0.5 bg-[var(--bg-card)]">
          <button
            onClick={() => setLang("pt")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              locale === "pt"
                ? "bg-[var(--accent)] text-[var(--bg)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              locale === "en"
                ? "bg-[var(--accent)] text-[var(--bg)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
