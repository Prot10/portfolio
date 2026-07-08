import { openSourceProjects } from "@/data";

const OpenSource = () => {
  return (
    <section id="open-source" className="py-16 sm:py-24 hairline">
      <p className="section-label mb-3">Open Source</p>
      <h2 className="section-title">Tools I build in the open</h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-paper-muted max-w-prose">
        Free, AGPL-licensed projects. No telemetry, no accounts, just software
        that works.
      </p>

      <div className="mt-12 sm:mt-16 flex flex-col gap-px bg-[rgba(255,255,255,0.08)]">
        {openSourceProjects.map((project) => (
          <article
            key={project.id}
            className="bg-ink p-5 sm:p-8 md:p-10 flex flex-col md:grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-stretch md:items-start hover:bg-surface transition-colors group min-w-0"
          >
            <div className="min-w-0">
              <h3 className="font-display text-xl sm:text-2xl text-paper group-hover:text-signal transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-warm">{project.description}</p>
              <p className="mt-3 sm:mt-4 text-sm text-paper-muted leading-relaxed max-w-prose">
                {project.longDescription}
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-paper-faint border border-[rgba(255,255,255,0.08)] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Website
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full justify-center"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
