export function Footer() {
  return (
    <footer className="mt-12 flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-400 glass">
      <div>© {new Date().getFullYear()} Awais Anser</div>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/awais-anser"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/awai5an5er"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
