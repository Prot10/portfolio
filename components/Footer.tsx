import CopyEmailButton from "@/components/CopyEmailButton";
import { profile, socialLinks } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 sm:py-24 hairline pb-safe">
      <p className="section-label mb-3">Contact</p>
      <h2 className="section-title">Let&apos;s work together</h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-paper-muted max-w-prose">
        Open to research collaborations in medical AI, federated learning, and
        open-source tooling.
      </p>

      <CopyEmailButton variant="primary" className="mt-6 sm:mt-8" />

      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[11px] sm:text-xs text-paper-faint">
          © 2026 {profile.name}
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] sm:text-xs text-paper-faint hover:text-signal transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
