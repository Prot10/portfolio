import { kosmico } from "@/data";

const Kosmico = () => {
  return (
    <section id="kosmico" className="py-16 sm:py-24 hairline">
      <div className="relative overflow-hidden border border-warm/20 bg-gradient-to-br from-warm/5 via-ink to-ink p-6 sm:p-10 md:p-12">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-warm/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative">
          <p className="section-label mb-4">Co-founder</p>

          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl text-paper tracking-tight"
            data-eegg="kosmico"
          >
            {kosmico.name}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-warm">{kosmico.tagline}</p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-paper-muted leading-relaxed max-w-prose">
            {kosmico.description}
          </p>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)]">
            {kosmico.features.map((feature) => (
              <div
                key={feature.title}
                className="bg-ink/80 p-5 sm:p-6 hover:bg-surface/80 transition-colors"
              >
                <h3 className="font-display text-base sm:text-lg text-paper">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-paper-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={kosmico.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              Visit Kosmico
            </a>
            <a href="#about" className="btn-ghost w-full sm:w-auto justify-center">
              More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kosmico;
