import GenerativeFlowViz from "@/components/GenerativeFlowViz";
import { researchFocus, stats } from "@/data";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 hairline">
      <p className="section-label mb-3">About</p>
      <h2 className="section-title">
        Multimodal generative models &amp; agentic systems
      </h2>

      <p className="mt-5 sm:mt-6 text-sm sm:text-base text-paper-muted leading-relaxed max-w-prose">
        My research sits between multimodal generative models and agentic
        systems: learning latent structure from brain signals on one side, and
        building agents that reason through clinical investigations with tools
        and protocols on the other. I also care about privacy, federated
        learning, and making models explainable in real clinical settings.
      </p>

      <div className="mt-8 sm:mt-10 -mx-1 opacity-40 sm:opacity-45 hover:opacity-60 transition-opacity duration-700">
        <GenerativeFlowViz />
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl sm:text-4xl text-signal">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-paper-faint">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)]">
        {researchFocus.map((area) => (
          <div
            key={area.title}
            className="bg-ink p-5 sm:p-6 md:p-8 hover:bg-surface transition-colors"
          >
            <h3 className="font-display text-lg sm:text-xl text-paper">
              {area.title}
            </h3>
            <p className="mt-2 sm:mt-3 text-sm text-paper-muted leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
