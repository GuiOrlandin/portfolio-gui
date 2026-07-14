import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 smallPhone:flex-col smallPhone:px-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Guilherme Orlandin
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/GuiOrlandin"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-orlandin"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
