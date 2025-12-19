import Links from "../components/Links";

const channels = [
  {
    label: "Email",
    value: "awaisanser17@gmail.com",
    href: "mailto:awaisanser17@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/awais-anser",
    href: "https://www.linkedin.com/in/awais-anser",
  },
  {
    label: "GitHub",
    value: "github.com/awai5an5er",
    href: "https://github.com/awai5an5er",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Contact</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Let&apos;s collaborate</h1>
        <p className="mt-3 text-slate-300">
          Tell me about your team, your goals, and how I can help. I typically reply within one
          business day.
        </p>
      </section>

      <section className="glass rounded-3xl p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Ways to reach me</h2>
            <p className="text-slate-300">
              Prefer async? Send an email. Want to move fast? Book a 20-minute intro and we&apos;ll
              shape a plan together.
            </p>
            <a
              href="mailto:awaisanser17@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/50 transition hover:translate-y-px sm:w-fit"
            >
              Email directly
            </a>
          </div>
          <div className="space-y-3 ">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <div className="text-sm text-slate-400">{channel.label}</div>
                  <div className="text-lg font-semibold text-white">{channel.value}</div>
                </div>
                <span className="hidden md:block text-sky-200">→</span>
              </a>
            ))}
          </div>
          
          
        </div>
      </section>
      <Links />
    </div>
  );
}

