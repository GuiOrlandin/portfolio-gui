import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { getResumeData } from "@/constants/resume";
import { SOFT_SKILL_ICONS, TECHNOLOGIES } from "@/constants/technologies";
import { getTranslations } from "@/constants/translations";
import type { HomeProps } from "@/types/pages";
import type { Locale } from "@/types/resume";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home(props: HomeProps) {
  const locale: Locale = props.searchParams?.lang === "en" ? "en" : "pt";
  const profile = getResumeData(locale);
  const t = getTranslations(locale);
  const softSkills = t.softSkillNames.map((name, i) => ({
    name,
    icon: SOFT_SKILL_ICONS[i],
  }));

  return (
    <div className="min-h-screen flex flex-col bg-mesh font-sans">
      <Suspense fallback={<header className="h-14 border-b border-[var(--border)] bg-[var(--bg)]/80" />}>
        <Header />
      </Suspense>
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 smallPhone:px-4 smallPhone:py-8">
        <section className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 mb-16">
          <div className="shrink-0 animate-reveal animate-reveal-1">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-2 ring-[var(--border)] ring-offset-2 ring-offset-[var(--bg)] shadow-xl">
              <Image
                src={profile.profilePicture}
                alt={`${profile.firstName} ${profile.lastName}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-reveal animate-reveal-2">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)]">
              {profile.firstName}{" "}
              <span className="text-[var(--accent)]">{profile.lastName}</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg max-w-xl leading-relaxed">
              {profile.headline}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="https://www.linkedin.com/in/guilherme-orlandin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors duration-200"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/GuiOrlandin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-card)] text-[var(--text)] border border-[var(--border)] font-medium hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
              >
                <FaGithubAlt size={20} />
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 animate-reveal animate-reveal-3">
          <h2 className="font-display text-xl font-semibold text-[var(--text)] mb-4">
            {t.sections.about}
          </h2>
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-6 sm:p-8 text-[var(--text-muted)] leading-relaxed">
            {profile.summary.split("\n").map((line, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {line.trim()}
              </p>
            ))}
          </div>
        </section>

        {profile.fullPositions.length > 0 && (
          <section className="mb-16 animate-reveal animate-reveal-4">
            <h2 className="font-display text-xl font-semibold text-[var(--text)] mb-4">
              {t.sections.experience}
            </h2>
            <div className="space-y-4">
              {profile.fullPositions.map((job) => (
                <div
                  key={`${job.companyName}-${job.title}`}
                  className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-6 sm:p-8 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text)] text-lg">
                        {job.title}
                      </h3>
                      <p className="text-[var(--accent)] font-medium">
                        {job.companyName}
                      </p>
                    </div>
                    {job.period && (
                      <span className="text-sm text-[var(--text-muted)] shrink-0">
                        {job.period}
                      </span>
                    )}
                  </div>
                  <div className="text-[var(--text-muted)] text-sm leading-relaxed whitespace-pre-line">
                    {job.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-16 animate-reveal animate-reveal-5">
          <h2 className="font-display text-xl font-semibold text-[var(--text)] mb-4">
            {t.sections.technologies}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] card-hover"
              >
                <tech.icon size={22} color={tech.color} />
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-reveal animate-reveal-6">
          <h2 className="font-display text-xl font-semibold text-[var(--text)] mb-4">
            {t.sections.softSkills}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] card-hover"
              >
                <skill.icon size={20} className="text-[var(--accent)] shrink-0" />
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-reveal animate-reveal-7">
          <h2 className="font-display text-xl font-semibold text-[var(--text)] mb-4">
            {t.sections.certifications}
          </h2>
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
            {profile.certifications.length > 0 ? (
              profile.certifications.map((cert) => (
                <div
                  key={`${cert.name}-${cert.authority}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 sm:p-5 hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  <span className="font-medium text-[var(--text)]">
                    {cert.name}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    {cert.authority}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-[var(--text-muted)] text-sm text-center">
                {t.certificationsEmpty}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
