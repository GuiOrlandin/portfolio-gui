import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Reveal from "@/app/components/reveal";
import { getHomeCopy } from "@/constants/home-content";
import { getResumeData } from "@/constants/resume";
import { PRIMARY_STACK_NAMES, TECHNOLOGIES } from "@/constants/technologies";
import type { HomeProps } from "@/types/pages";
import type { Locale } from "@/types/resume";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export default function Home(props: HomeProps) {
  const locale: Locale = props.searchParams?.lang === "en" ? "en" : "pt";
  const profile = getResumeData(locale);
  const copy = getHomeCopy(locale);
  const primaryStack = TECHNOLOGIES.filter((t) =>
    (PRIMARY_STACK_NAMES as readonly string[]).includes(t.name),
  );

  return (
    <div className="flex min-h-dvh flex-col bg-cinema">
      <Suspense
        fallback={
          <header className="h-14 border-b border-[var(--border)] bg-[var(--bg)]/80" />
        }
      >
        <Header />
      </Suspense>

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="relative min-h-[calc(100dvh-3.5rem)] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
          >
            <Image
              src={profile.profilePicture}
              alt=""
              fill
              priority
              className="object-cover object-[center_20%] blur-sm scale-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 to-[var(--bg)]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col justify-end px-6 pb-16 pt-24 smallPhone:px-4 md:justify-center md:pb-24">
            <p className="animate-reveal animate-reveal-1 mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Full-Stack Developer
            </p>
            <h1 className="animate-reveal animate-reveal-2 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--text)]">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="animate-reveal animate-reveal-3 mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] text-balance md:text-xl">
              {copy.heroLine}
            </p>
            <p className="animate-reveal animate-reveal-3 mt-3 max-w-lg text-base leading-relaxed text-[var(--text-muted)]/80">
              {copy.heroSupport}
            </p>
            <div className="animate-reveal animate-reveal-4 mt-10 flex flex-wrap gap-3">
              <a
                href="#trabalho"
                className="cursor-pointer inline-flex min-h-12 items-center px-6 bg-[var(--accent)] font-display text-sm font-semibold text-[var(--on-accent)] transition-opacity duration-200 hover:opacity-90"
              >
                {copy.ctaWork}
              </a>
              <a
                href="#contato"
                className="cursor-pointer inline-flex min-h-12 items-center border border-[var(--border-hover)] px-6 font-display text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {copy.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* 2. Hook */}
        <section
          className="section-pad border-t border-[var(--border)]"
          id="posicionamento"
        >
          <div className="mx-auto max-w-6xl px-6 smallPhone:px-4">
            <Reveal>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {copy.hookLabel}
              </p>
              <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--text)] text-balance">
                {copy.hookTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                {copy.hookBody}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3. Featured work */}
        <section
          className="section-pad border-t border-[var(--border)]"
          id="trabalho"
        >
          <div className="mx-auto max-w-6xl px-6 smallPhone:px-4">
            <Reveal>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {copy.workLabel}
              </p>
              <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--text)] text-balance">
                {copy.workTitle}
              </h2>
              <p className="mt-4 max-w-xl text-[var(--text-muted)]">
                {copy.workSupport}
              </p>
            </Reveal>

            <div className="mt-14 space-y-20 md:space-y-28">
              {copy.featured.map((item, index) => (
                <Reveal key={item.id} delayMs={index * 40}>
                  <article
                    className={`grid gap-10 md:grid-cols-12 md:gap-12 ${
                      item.image && index % 2 === 1
                        ? "md:[&>*:first-child]:order-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex flex-col justify-center ${
                        item.image
                          ? "md:col-span-7"
                          : "md:col-span-12 max-w-3xl"
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-2xl font-bold text-[var(--text)] md:text-3xl">
                          {item.company}
                        </h3>
                        {item.href && (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer inline-flex items-center gap-1 text-sm text-[var(--accent)] transition-opacity duration-200 hover:opacity-80"
                          >
                            GitHub <MdOpenInNew size={14} />
                          </a>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {item.role} · {item.period}
                      </p>

                      <dl className="mt-8 space-y-5">
                        <div>
                          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                            {copy.caseChallenge}
                          </dt>
                          <dd className="mt-1.5 text-[var(--text-muted)] leading-relaxed">
                            {item.challenge}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                            {copy.caseAction}
                          </dt>
                          <dd className="mt-1.5 text-[var(--text-muted)] leading-relaxed">
                            {item.action}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                            {copy.caseOutcome}
                          </dt>
                          <dd className="mt-1.5 text-[var(--text)] leading-relaxed">
                            {item.outcome}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-6">
                        <p className="sr-only">{copy.caseStack}</p>
                        <ul className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <li
                              key={tech}
                              className="border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Trajectory */}
        <section
          className="section-pad border-t border-[var(--border)]"
          id="trajetoria"
        >
          <div className="mx-auto max-w-6xl px-6 smallPhone:px-4">
            <Reveal>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {copy.trajectoryLabel}
              </p>
              <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--text)]">
                {copy.trajectoryTitle}
              </h2>
            </Reveal>

            <ol className="relative mt-14 space-y-6 border-l border-[var(--border)] pl-8 md:pl-10">
              {profile.fullPositions.map((job, i) => (
                <Reveal
                  key={`${job.companyName}-${job.title}`}
                  delayMs={i * 60}
                >
                  <li className="relative">
                    <span
                      className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] md:-left-[2.65rem]"
                      aria-hidden
                    />
                    <p className="text-sm text-[var(--text-muted)]">
                      {job.period}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-[var(--text)]">
                      {job.title}
                    </h3>
                    <p className="text-[var(--accent)]">{job.companyName}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] whitespace-pre-line">
                      {job.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. Craft */}
        <section
          className="section-pad border-t border-[var(--border)]"
          id="craft"
        >
          <div className="mx-auto max-w-6xl px-6 smallPhone:px-4">
            <Reveal>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {copy.craftLabel}
              </p>
              <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--text)]">
                {copy.craftTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                {copy.craftBody}
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <p className="mt-12 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {copy.craftStackNote}
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-4">
                {primaryStack.map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 text-[var(--text)]"
                  >
                    <tech.icon size={20} color={tech.color} aria-hidden />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 6. Contact climax */}
        <section
          className="section-pad border-t border-[var(--border)] bg-[var(--bg-elevated)]"
          id="contato"
        >
          <div className="mx-auto max-w-6xl px-6 smallPhone:px-4">
            <Reveal>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {copy.contactLabel}
              </p>
              <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[var(--text)] text-balance">
                {copy.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl text-[var(--text-muted)] leading-relaxed">
                {copy.contactBody}
              </p>
              <a
                href="mailto:guiorlandin@gmail.com"
                className="mt-3 inline-block cursor-pointer text-sm text-[var(--accent)] transition-opacity duration-200 hover:opacity-80"
              >
                guiorlandin@gmail.com
              </a>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/guilherme-orlandin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex min-h-12 items-center gap-2 bg-[var(--accent)] px-6 font-display text-sm font-semibold text-[var(--on-accent)] transition-opacity duration-200 hover:opacity-90"
                >
                  <FaLinkedin size={18} aria-hidden />
                  {copy.contactLinkedIn}
                </a>
                <a
                  href="https://github.com/GuiOrlandin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex min-h-12 items-center gap-2 border border-[var(--border-hover)] px-6 font-display text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)]"
                >
                  <FaGithubAlt size={18} aria-hidden />
                  {copy.contactGitHub}
                </a>
                <Link
                  href={`/projetos?lang=${locale}`}
                  className="cursor-pointer inline-flex min-h-12 items-center px-6 text-sm font-medium text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]"
                >
                  {copy.contactProjects} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
