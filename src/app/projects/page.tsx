const projects = [
  {
    title: "To Do List App",
    summary: "A simple to do list app built with React.js and Tailwind CSS.",
    link: "https://7odo-task-list.netlify.app/",
    
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
  },
  
  {
    title: "Design System",
    summary: "Token-driven library, accessibility baked in, backed by Storybook.",
    tags: ["Design Ops", "Storybook", "Accessibility"],
  },
  {
    title: "Onboarding Flow",
    summary: "Guided setup with progressive disclosure and contextual help.",
    impact: "Reduced time-to-value by 32% and lowered support tickets.",
    tags: ["Product design", "Experimentation", "UX writing"],
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

      <section className="grid-auto">
        {projects.map((project) => (
          <article key={project.title} className="glass rounded-3xl p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-white hover:underline">Visit Website</a>
                <p className="mt-2 text-slate-300">{project.summary}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-2 text-xs text-slate-200">
                Case study
              </span>
            </div>
           
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="pill rounded-full px-3 py-1 text-xs uppercase tracking-wide text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

