"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const KOSMO_LINES = [
  "> @kosmo online. how can I help?",
  "> indexing papers across PubMed and arXiv...",
  "> literature review complete. thesis +2%. maybe.",
];

function useTapBurst(
  selector: string,
  count: number,
  windowMs: number,
  onBurst: () => void
) {
  useEffect(() => {
    let taps = 0;
    let timer: ReturnType<typeof setTimeout>;

    const handleTap = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      const target = (event.target as Element).closest(selector);
      if (!target) return;

      taps += 1;
      clearTimeout(timer);
      timer = setTimeout(() => {
        taps = 0;
      }, windowMs);

      if (taps >= count) {
        taps = 0;
        onBurst();
      }
    };

    document.addEventListener("pointerup", handleTap);
    return () => {
      document.removeEventListener("pointerup", handleTap);
      clearTimeout(timer);
    };
  }, [selector, count, windowMs, onBurst]);
}

function KosmoTerminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= KOSMO_LINES.length) return;

    const current = KOSMO_LINES[lineIndex];

    if (charIndex < current.length) {
      const timer = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, 20);
      return () => clearTimeout(timer);
    }

    const pause = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 400);
    return () => clearTimeout(pause);
  }, [lineIndex, charIndex]);

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-end justify-center sm:justify-start p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close terminal"
      />
      <div className="relative w-full sm:w-[20rem] bg-surface border border-warm/25 shadow-2xl shadow-warm/5">
        <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(255,255,255,0.06)]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-warm">
            kosmo
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[10px] text-paper-faint hover:text-paper px-2 py-1"
            aria-label="Close terminal"
          >
            close
          </button>
        </div>
        <div className="p-3 sm:p-4 min-h-[7rem] max-h-36 overflow-y-auto">
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-mono text-[11px] sm:text-xs text-paper-muted leading-relaxed"
            >
              {line}
              {i === lineIndex && charIndex < KOSMO_LINES[lineIndex]?.length && (
                <span className="inline-block w-1.5 h-3 ml-0.5 bg-warm animate-pulse" />
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function CernBurst({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[190] pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-signal to-signal animate-cern-beam-left" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-warm to-warm animate-cern-beam-right" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-signal animate-cern-flash" />
    </div>
  );
}

function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[200] px-4 py-2 bg-surface border border-signal/30 font-mono text-[11px] text-signal text-center sm:whitespace-nowrap">
      {message}
    </div>
  );
}

const EasterEgg = () => {
  const [kosmoOpen, setKosmoOpen] = useState(false);
  const [cernBurst, setCernBurst] = useState(false);
  const [eegHyper, setEegHyper] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((msg: string, duration = 2500) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), duration);
  }, []);

  const triggerKosmo = useCallback(() => setKosmoOpen(true), []);
  const triggerCern = useCallback(() => setCernBurst(true), []);

  useTapBurst("[data-eegg='eeg']", 4, 2500, () => {
    setEegHyper(true);
    showToast("Hyper-synchronous activity detected. (it's CSS)", 3000);
    setTimeout(() => setEegHyper(false), 6000);
  });

  useTapBurst("[data-eegg='kosmico']", 4, 2500, triggerKosmo);
  useTapBurst("[data-eegg='name']", 4, 2500, triggerCern);

  useEffect(() => {
    document.documentElement.classList.toggle("easter-eeg-hyper", eegHyper);
    return () => document.documentElement.classList.remove("easter-eeg-hyper");
  }, [eegHyper]);

  useEffect(() => {
    return () => clearTimeout(toastTimer.current);
  }, []);

  return (
    <>
      {kosmoOpen && <KosmoTerminal onClose={() => setKosmoOpen(false)} />}
      {cernBurst && <CernBurst onDone={() => setCernBurst(false)} />}
      {toast && <Toast message={toast} />}
    </>
  );
};

export default EasterEgg;
