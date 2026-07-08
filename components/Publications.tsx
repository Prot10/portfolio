"use client";

import { publications, socialLinks } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const scholarUrl = socialLinks.find((link) => link.label === "Scholar")?.url;
const paperCount = publications.length;
const citationCount = publications.reduce((sum, pub) => sum + pub.citations, 0);

const Publications = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="publications" className="py-16 sm:py-24 hairline">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
        <div className="min-w-0">
          <p className="section-label mb-3">Publications</p>
          <h2 className="section-title">
            {paperCount} papers · {citationCount} citations
          </h2>
        </div>
        {scholarUrl && (
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-paper-faint hover:text-signal transition-colors shrink-0"
          >
            Google Scholar →
          </a>
        )}
      </div>

      <div>
        {publications.map((pub) => {
          const isOpen = expanded === pub.id;

          return (
            <article
              key={pub.id}
              className="border-b border-[rgba(255,255,255,0.08)] last:border-b-0"
            >
              <button
                onClick={() => setExpanded(isOpen ? null : pub.id)}
                className="w-full text-left py-5 sm:py-6 group"
                aria-expanded={isOpen}
                disabled={!pub.abstract}
              >
                <div className="flex gap-4 sm:gap-6 items-start min-w-0">
                  <span className="font-mono text-xs sm:text-sm text-paper-faint pt-1 w-10 sm:w-12 shrink-0">
                    {pub.year}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base sm:text-lg md:text-xl text-paper leading-snug group-hover:text-signal transition-colors">
                        {pub.title}
                      </h3>
                      {pub.abstract && (
                        <span className="font-mono text-xs text-paper-faint group-hover:text-signal transition-colors pt-1 shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      )}
                    </div>
                    {pub.citations > 0 && (
                      <p className="mt-1 font-mono text-[10px] text-paper-faint">
                        {pub.citations} citation
                        {pub.citations !== 1 ? "s" : ""}
                      </p>
                    )}
                    <p className="mt-2 text-xs sm:text-sm text-paper-faint break-words">
                      {pub.authors}
                    </p>
                    <p className="mt-1 text-xs text-paper-faint/70 italic break-words">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && pub.abstract && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 sm:pb-6 pl-14 sm:pl-[4.5rem] pr-1 max-w-prose">
                      <p className="text-sm text-paper-muted leading-relaxed border-l-2 border-signal/30 pl-4">
                        {pub.abstract}
                      </p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 font-mono text-xs link-signal"
                      >
                        Read paper →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
