import { TimelineItem } from "@/data";

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-[rgba(255,255,255,0.08)]" />

      <div className="flex flex-col gap-10 sm:gap-12">
        {items.map((item) => (
          <article key={item.id} className="relative pl-6 sm:pl-8 min-w-0">
            <div className="absolute left-0 top-2 w-3 h-3 sm:w-[15px] sm:h-[15px] rounded-full border-2 border-signal bg-ink shrink-0" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-display text-lg sm:text-xl text-paper min-w-0">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal transition-colors"
                  >
                    {item.title}
                    <span className="text-paper-muted font-body text-sm sm:text-base font-normal">
                      {", "}
                      {item.subtitle}
                    </span>
                  </a>
                ) : (
                  <>
                    {item.title}
                    <span className="text-paper-muted font-body text-sm sm:text-base font-normal">
                      {", "}
                      {item.subtitle}
                    </span>
                  </>
                )}
              </h3>
              <time className="font-mono text-[11px] sm:text-xs text-paper-faint shrink-0">
                {item.period}
              </time>
            </div>

            <p className="mt-2 sm:mt-3 text-sm text-paper-muted leading-relaxed max-w-prose">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
