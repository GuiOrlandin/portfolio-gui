import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Reveal from "@/app/components/reveal";
import { getResumeData } from "@/constants/resume";
import { getTranslations } from "@/constants/translations";
import type { ProjetosProps } from "@/types/pages";
import type { Locale } from "@/types/resume";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { MdOpenInNew } from "react-icons/md";

export default function Projetos(props: ProjetosProps) {
  const locale: Locale = props.searchParams?.lang === "en" ? "en" : "pt";
  const profileData = getResumeData(locale);
  const t = getTranslations(locale);

  return (
    <div className="flex min-h-dvh flex-col bg-cinema">
      <Suspense
        fallback={
          <header className="h-14 border-b border-[var(--border)] bg-[var(--bg)]/80" />
        }
      >
        <Header />
      </Suspense>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 smallPhone:px-4 smallPhone:py-10">
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Archive
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight text-[var(--text)]">
            {t.sections.projects}
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-muted)]">
            {locale === "pt"
              ? "Explorações e entregas — o detalhe narrativo está na home."
              : "Explorations and deliveries — the narrative detail lives on the home page."}
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {profileData.projects.items.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 40}>
              <li className="grid gap-6 py-8 md:grid-cols-12 md:items-center md:gap-8">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)] md:col-span-4">
                  <Image
                    alt={project.title}
                    src={`/${project.title}.png`}
                    fill
                    className="object-cover opacity-90 transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold text-[var(--text)] md:text-2xl">
                      {project.title}
                    </h2>
                    <Link
                      href={`https://github.com/GuiOrlandin/${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)]"
                      aria-label={t.viewOnGitHub(project.title)}
                    >
                      <MdOpenInNew size={22} />
                    </Link>
                  </div>
                  <p className="mt-3 max-w-2xl text-[var(--text-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
