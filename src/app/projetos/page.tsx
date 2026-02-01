import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getResumeData } from "@/constants/resume";
import { getTranslations } from "@/constants/translations";
import type { ProjetosProps } from "@/types/pages";
import type { Locale } from "@/types/resume";
import Footer from "../components/footer";
import Header from "../components/header";
import { BsFilePost } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

export default function Projetos(props: ProjetosProps) {
  const locale: Locale = props.searchParams?.lang === "en" ? "en" : "pt";
  const profileData = getResumeData(locale);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col bg-mesh font-sans">
      <Suspense fallback={<header className="h-14 border-b border-[var(--border)] bg-[var(--bg)]/80" />}>
        <Header />
      </Suspense>
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 smallPhone:px-4 smallPhone:py-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text)] mb-10 flex items-center gap-3">
          <BsFilePost className="text-[var(--accent)]" size={32} />
          {t.sections.projects}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {profileData.projects.items.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden card-hover flex flex-col"
              style={{
                animation: "fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              <div className="relative w-full aspect-[4/3] bg-[var(--bg-elevated)]">
                <Image
                  alt={project.title}
                  src={`/${project.title}.png`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-display font-semibold text-[var(--text)] text-lg">
                    {project.title}
                  </h2>
                  <Link
                    href={`https://github.com/GuiOrlandin/${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors shrink-0"
                    aria-label={t.viewOnGitHub(project.title)}
                  >
                    <MdOpenInNew size={22} />
                  </Link>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed max-h-[140px] overflow-y-auto scrollbar-thin">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
