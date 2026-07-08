"use client";

import CopyEmailButton from "@/components/CopyEmailButton";
import { navItems, profile, socialLinks } from "@/data";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((n) => n.link.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col gap-0.5 sm:gap-1">
      {navItems.map((item) => (
        <a
          key={item.link}
          href={item.link}
          onClick={onClick}
          className={`px-3 py-2.5 sm:py-2 text-sm transition-colors ${
            active === item.link
              ? "text-signal font-medium"
              : "text-paper-muted hover:text-paper"
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] safe-top">
        <div className="flex items-center justify-between px-4 sm:px-5 h-14">
          <a
            href="#"
            className="font-display text-sm sm:text-lg text-paper min-w-0 mr-3 leading-tight"
            data-eegg="name"
          >
            {profile.name}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-paper-muted text-xs sm:text-sm font-mono uppercase tracking-wider px-2 py-1"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-14">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="relative bg-ink border-b border-[rgba(255,255,255,0.08)] px-4 sm:px-5 py-6 max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
            <NavLinks onClick={() => setMobileOpen(false)} />
            <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-paper-faint hover:text-signal"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <CopyEmailButton className="mt-4" />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] xl:w-[280px] flex-col justify-between px-6 xl:px-8 py-10 xl:py-12 border-r border-[rgba(255,255,255,0.06)] overflow-y-auto">
        <div>
          <a href="#" className="block group">
            <h1
            className="font-display text-xl xl:text-2xl text-paper group-hover:text-signal transition-colors"
            data-eegg="name"
          >
            {profile.name}
          </h1>
            <p className="mt-2 text-sm text-paper-muted leading-relaxed">
              {profile.roles.join(" · ")}
            </p>
            <p className="mt-1 font-mono text-[11px] text-paper-faint uppercase tracking-wider">
              {profile.location}
            </p>
          </a>

          <div className="mt-10 xl:mt-12">
            <NavLinks />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-wider text-paper-faint hover:text-signal transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <CopyEmailButton />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
