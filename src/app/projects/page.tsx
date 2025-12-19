const featured = [
  {
    title: "Speed Full Autos ",
    blurb: "Automobile Services Center Based in Dubai, UAE.",
    link: "https://speedfullauto.com",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "HK Energy Solutions",
    blurb: "Providing Safe and Secure Energy Solutions to the UK.",
    tags: ["Next.js", "Tailwind"],
  },
];
export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Projects</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Selected work</h1>
        <p className="mt-3 text-slate-300">
          A snapshot of projects that blend strategy, UX, and engineering to drive meaningful
          outcomes.
        </p>
      </section>

      <div className="mt-6 grid-auto">
          {featured.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-slate-200">
                  Real World Project
                </span>
              </div>
              <p className="mt-3 text-slate-300">{item.blurb}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-white hover:underline">Visit Website</a>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill rounded-full px-3 py-1 text-xs uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

