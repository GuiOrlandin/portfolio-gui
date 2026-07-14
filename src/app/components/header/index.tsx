"use client";

import { getTranslations } from "@/constants/translations";
import type { Locale } from "@/types/resume";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale: Locale = searchParams.get("lang") === "en" ? "en" : "pt";
  const t = getTranslations(locale);

  const isHome = pathname === "/";
  const isProjetos = pathname === "/projetos";

  const withLang = (path: string) =>
    path === "/" ? `/?lang=${locale}` : `/projetos?lang=${locale}`;

  const setLang = (lang: Locale) => {
    router.push(`${pathname}?lang=${lang}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 smallPhone:px-4">
        <Link
          href={withLang("/")}
          className="font-display text-sm font-semibold tracking-wide text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)] cursor-pointer"
        >
          Guilherme Orlandin
        </Link>

        <nav className="flex items-center gap-1" aria-label="Primary">
          <Link
            href={withLang("/")}
            className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center ${
              isHome
                ? "text-[var(--accent)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {t.nav.home}
          </Link>
          <Link
            href={withLang("/projetos")}
            className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 min-h-11 inline-flex items-center ${
              isProjetos
                ? "text-[var(--accent)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {t.nav.projects}
          </Link>

          <div
            className="ml-2 flex border border-[var(--border)] p-0.5"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`cursor-pointer min-h-9 min-w-9 px-2.5 text-xs font-semibold transition-colors duration-200 ${
                locale === "pt"
                  ? "bg-[var(--accent)] text-[var(--on-accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`cursor-pointer min-h-9 min-w-9 px-2.5 text-xs font-semibold transition-colors duration-200 ${
                locale === "en"
                  ? "bg-[var(--accent)] text-[var(--on-accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
