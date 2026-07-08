"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SECRET_CODES = ["kosmo", "brain", "cern"] as const;
type SecretCode = (typeof SECRET_CODES)[number];

const KOSMO_LINES = [
  "> @kosmo online. how can I help with your research?",
  "> indexing 12,847 papers across PubMed, arXiv, and OpenReview...",
  "> running federated round across 4 hospitals... gradients secured.",
  "> drafting introduction section... deleting it... rewriting it...",
  "> plotting EEG connectivity graphs... found 3 suspicious Brodmann areas.",
  "> literature review complete. your thesis is 2% closer. maybe.",
];

const BRAIN_TOASTS = [
  "Cortical interface online. (simulated)",
  "NIHSS estimate: 0. You navigated here correctly.",
  "Flow matching velocity field: stable.",
  "No actual brain data was harmed.",
];

function useSecretCodes(onMatch: (code: SecretCode) => void) {
  const buffer = useRef("");

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const tag = (event.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      let char = "";
      if (event.key.length === 1) {
        char = event.key.toLowerCase();
      } else if (event.code.startsWith("Key")) {
        char = event.code.slice(3).toLowerCase();
      }

      if (!char) return;

      buffer.current = (buffer.current + char).slice(-12);

      for (const code of SECRET_CODES) {
        if (buffer.current.endsWith(code)) {
          buffer.current = "";
          event.preventDefault();
          onMatch(code);
          break;
        }
      }
    };

    document.addEventListener("keydown", handleKey, true);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [onMatch]);
}

function useClickBurst(
  selector: string,
  count: number,
  windowMs: number,
  onBurst: () => void
) {
  useEffect(() => {
    let clicks = 0;
    let timer: ReturnType<typeof setTimeout>;

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as Element).closest(selector);
      if (!target) return;

      clicks += 1;
      clearTimeout(timer);
      timer = setTimeout(() => {
        clicks = 0;
      }, windowMs);

      if (clicks >= count) {
        clicks = 0;
        onBurst();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, [selector, count, windowMs, onBurst]);
}

function KosmoTerminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc, true);
    return () => document.removeEventListener("keydown", handleEsc, true);
  }, [onClose]);

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
      }, 18 + Math.random() * 22);
      return () => clearTimeout(timer);
    }

    const pause = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 500);
    return () => clearTimeout(pause);
  }, [lineIndex, charIndex]);

  return (
    <div className="fixed bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:w-[22rem] z-[200]">
      <div className="bg-surface border border-warm/25 shadow-2xl shadow-warm/5">
        <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(255,255,255,0.06)]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-warm">
            kosmo · agent shell
          </span>
          <button
            onClick={onClose}
            className="font-mono text-[10px] text-paper-faint hover:text-paper px-1"
            aria-label="Close terminal"
          >
            esc
          </button>
        </div>
        <div className="p-3 sm:p-4 min-h-[10rem] max-h-48 overflow-y-auto">
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
    const timer = setTimeout(onDone, 2400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[190] pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-signal to-signal animate-cern-beam-left" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-warm to-warm animate-cern-beam-right" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-signal animate-cern-flash" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-signal/30 animate-cern-ring" />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 font-mono text-[10px] uppercase tracking-[0.2em] text-signal/80 animate-cern-label">
        cafein beamline sync
      </p>
    </div>
  );
}

function BrainToast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-4 py-2 bg-surface border border-signal/30 font-mono text-[11px] text-signal whitespace-nowrap">
      {message}
    </div>
  );
}

const EasterEgg = () => {
  const [kosmoOpen, setKosmoOpen] = useState(false);
  const [cernBurst, setCernBurst] = useState(false);
  const [brainMode, setBrainMode] = useState(false);
  const [brainToast, setBrainToast] = useState<string | null>(null);
  const [eegHyper, setEegHyper] = useState(false);
  const brainTimer = useRef<ReturnType<typeof setTimeout>>();
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showBrainToast = useCallback((msg: string) => {
    setBrainToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setBrainToast(null), 2800);
  }, []);

  const activateBrain = useCallback(() => {
    setBrainMode(true);
    document.documentElement.classList.add("easter-brain-mode");
    showBrainToast(BRAIN_TOASTS[0]);

    BRAIN_TOASTS.slice(1).forEach((msg, i) => {
      setTimeout(() => showBrainToast(msg), 3000 + i * 3000);
    });

    clearTimeout(brainTimer.current);
    brainTimer.current = setTimeout(() => {
      setBrainMode(false);
      document.documentElement.classList.remove("easter-brain-mode");
      setBrainToast(null);
    }, 13000);
  }, [showBrainToast]);

  const triggerKosmo = useCallback(() => setKosmoOpen(true), []);
  const triggerCern = useCallback(() => setCernBurst(true), []);

  const handleCode = useCallback(
    (code: SecretCode) => {
      if (code === "kosmo") triggerKosmo();
      if (code === "brain") activateBrain();
      if (code === "cern") triggerCern();
    },
    [activateBrain, triggerCern, triggerKosmo]
  );

  useSecretCodes(handleCode);

  useClickBurst("[data-eegg='eeg']", 7, 1800, () => {
    setEegHyper(true);
    showBrainToast("Hyper-synchronous activity detected. (it's CSS)");
    setTimeout(() => setEegHyper(false), 8000);
  });

  useClickBurst("[data-eegg='kosmico']", 5, 2000, triggerKosmo);
  useClickBurst("[data-eegg='name']", 5, 2000, triggerCern);

  useEffect(() => {
    console.log(
      "%c psst ",
      "background:#3ee8a0;color:#0b0d10;font-weight:bold;padding:4px 8px;border-radius:2px",
      "type kosmo / brain / cern, or click: EEG x7, Kosmico title x5, your name x5"
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("easter-eeg-hyper", eegHyper);
    return () => document.documentElement.classList.remove("easter-eeg-hyper");
  }, [eegHyper]);

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("easter-brain-mode");
      clearTimeout(brainTimer.current);
      clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <>
      {kosmoOpen && <KosmoTerminal onClose={() => setKosmoOpen(false)} />}
      {cernBurst && <CernBurst onDone={() => setCernBurst(false)} />}
      {(brainMode || brainToast) && brainToast && <BrainToast message={brainToast} />}
    </>
  );
};

export default EasterEgg;
