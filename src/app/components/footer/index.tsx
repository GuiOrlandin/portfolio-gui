import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="max-w-5xl mx-auto px-6 smallPhone:px-4 flex gap-6 items-center justify-center py-5">
        <a
          href="https://github.com/GuiOrlandin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-orlandin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[#0A66C2] hover:bg-[rgba(10,102,194,0.12)] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
