import { ScrollFade } from "../components/ScrollFade";

const values = [
  {
    title: "Systems-first",
    body: "Design reusable patterns and components to scale quickly.",
  },
  {
    title: "Evidence led",
    body: "Pair research, analytics, and experiments to guide decisions.",
  },
  {
    title: "Delivery minded",
    body: "Ship in tight loops, measure impact, and iterate with intent.",
  },
];

const skills = [
  "Product discovery",
  "User research",
  "Interaction design",
  "Design systems",
  "Accessibility",
  "TypeScript / React",
  "Next.js / Tailwind",
  "Testing & QA",
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <ScrollFade>
        <section className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            About
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white">
            A hybrid Web Developer
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            I help teams turn ideas into polished, user-friendly interfaces. I
            love transforming requirements into clean UI flows, crafting
            intuitive design systems, and building front-end experiences that
            feel fast, responsive, and reliable.
          </p>
          <p className="mt-3 text-slate-300">
            I’ve worked closely with designers, product managers, and engineers
            to build interfaces, refine user experiences, and improve overall
            usability and performance across digital products.
          </p>
        </section>
      </ScrollFade>

      <ScrollFade>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Values
            </p>
            <div className="mt-4 space-y-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Skills
            </p>
            <div className="mt-4 grid-auto">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="pill rounded-full px-3 py-2 text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollFade>

      <ScrollFade>
        <section className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Timeline
          </p>
          <div className="mt-5 space-y-5">
            {[
              {
                role: "Web Developer Internee",
                place: "Ecom Tycoon",
                time: "Oct 2025 — Jan 2026",
                body: "Contributed to development of multiple websites that allowed users to manage their online presence and marketing efforts.",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-slate-300">{item.place}</p>
                  <p className="text-slate-400">{item.body}</p>
                </div>
                <span className="pill rounded-full px-3 py-2 text-xs uppercase tracking-wide">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </section>
      </ScrollFade>

      <ScrollFade>
        <section className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Certification
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <h3 className="text-lg font-semibold text-white">
                Experience Letter
              </h3>
              <p className="mt-2 text-slate-300">
                My experience letter from Ecom Tycoon, confirming my role and
                contributions during the internship.
              </p>
              <a
                href="/Experience%20Letter.pdf"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Experience Letter
              </a>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <h3 className="text-lg font-semibold text-white">
                Internship Certificate
              </h3>
              <p className="mt-2 text-slate-300">
                My internship completion certificate, recognizing my work and
                achievements during the internship.
              </p>
              <a
                href="/Internship%20Certificate.pdf"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Internship Certificate
              </a>
            </div>
          </div>
        </section>
      </ScrollFade>
    </div>
  );
}
