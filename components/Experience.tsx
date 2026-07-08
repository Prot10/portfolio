import { education, workExperience } from "@/data";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 hairline">
      <p className="section-label mb-3">Experience</p>
      <h2 className="section-title">Work &amp; education</h2>

      <div className="mt-12 sm:mt-16">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-8">
          Work
        </h3>
        <Timeline items={workExperience} />
      </div>

      <div className="mt-16 sm:mt-20">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-8">
          Education
        </h3>
        <Timeline items={education} />
      </div>
    </section>
  );
};

export default Experience;
