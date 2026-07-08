import { profile } from "@/data";

const EEGWave = () => (
  <svg
    viewBox="0 0 800 120"
    className="w-full h-16 sm:h-24 md:h-32 opacity-30"
    preserveAspectRatio="none"
    aria-hidden
  >
    <path
      d="M0,60 L40,60 L50,30 L60,90 L70,45 L80,75 L90,60 L130,60 L145,20 L160,100 L175,40 L190,80 L200,60 L280,60 L295,55 L310,65 L320,60 L400,60 L415,25 L430,95 L445,35 L460,85 L475,60 L560,60 L575,50 L590,70 L605,55 L620,65 L635,60 L800,60"
      fill="none"
      stroke="rgb(62, 232, 160)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      className="eeg-wave-path animate-eeg-draw"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="min-h-[calc(100dvh-4rem)] lg:min-h-[90vh] flex flex-col justify-end pb-12 sm:pb-16 pt-4 lg:pt-0">
      <div className="mb-6 sm:mb-8 -mx-1" data-eegg="eeg">
        <EEGWave />
      </div>

      <p className="section-label mb-4 sm:mb-6">CERN · UPF · Kosmico</p>

      <h2 className="font-display text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[1.08] tracking-tight text-paper max-w-3xl">
        {profile.tagline}
      </h2>

      <p className="mt-6 sm:mt-8 text-base sm:text-lg text-paper-muted leading-relaxed max-w-prose">
        {profile.bio}
      </p>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <a href="#publications" className="btn-primary w-full sm:w-auto justify-center">
          View publications
        </a>
        <a href="/cv.pdf" download className="btn-ghost w-full sm:w-auto justify-center">
          Download CV
        </a>
        <a
          href="#kosmico"
          className="btn-ghost text-warm border-warm/30 hover:border-warm/50 w-full sm:w-auto justify-center"
        >
          Kosmico →
        </a>
      </div>
    </section>
  );
};

export default Hero;
