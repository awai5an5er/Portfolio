import Link from "next/link";

const highlights = [
  { title: "3+ years", description: "Designing & building web products" },
  { title: "End-to-end", description: "Strategy, UX, frontend, delivery" },
  { title: "Remote ready", description: "Across timezones and teams" },
];

const featured = [
  {
    title: "Speed Full Auto ",
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

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="pill rounded-full px-3 py-1">Web Developer</span>
            <span className="pill rounded-full px-3 py-1">Frontend Developer</span>
            <span className="pill rounded-full px-3 py-1">Problem Solver</span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
            I craft digital experiences that feel effortless and deliver results.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            I blend product thinking, design systems, and modern frontend to ship polished,
            measurable outcomes for startups and scaleups.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/projects"
              className="w-full rounded-full bg-linear-to-r from-sky-400 to-violet-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/50 transition hover:translate-y-px sm:w-auto"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              Book a Call
            </Link>
            <Link
              href="/about"
              className="w-full rounded-full border border-white/10 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {item.description}
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Recent Work</p>
            <h2 className="text-2xl font-semibold text-white">Featured highlights</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-sky-300 underline-offset-4 hover:text-white hover:underline"
          >
            See all projects
          </Link>
        </div>
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
      </section>

      

      <section className="glass rounded-3xl p-6 text-center sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Let&apos;s talk</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Available for projects</h3>
        <p className="mt-3 text-slate-300">
          Tell me about your goals and we&apos;ll shape a roadmap together.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Get in touch
          </Link>
          <a
            href="mailto:awaisanser17@gmail.com"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Email directly
          </a>
        </div>
      </section>
    </div>
  );
}
