const CENTER_Y = 80;
const NOISE_CENTER = { x: 88, y: CENTER_Y };
const TARGET_CENTER = { x: 712, y: CENTER_Y };

const noisePoints = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * Math.PI * 2;
  const radius = 10 + (i % 4) * 5 + Math.sin(i * 1.7) * 6;
  return [
    NOISE_CENTER.x + Math.cos(angle) * radius,
    NOISE_CENTER.y + Math.sin(angle) * radius * 0.75,
  ] as [number, number];
});

const targetPoints = Array.from({ length: 22 }, (_, i) => {
  const angle = -Math.PI / 2 + (i / 21) * Math.PI * 0.85;
  const radius = 14 + (i % 3) * 3;
  return [
    TARGET_CENTER.x + Math.cos(angle) * radius * 1.1,
    TARGET_CENTER.y + Math.sin(angle) * radius,
  ] as [number, number];
});

const flowPaths = [
  { d: "M 88 80 C 200 42, 340 38, 480 58 S 640 72, 712 68", delay: 0, dur: 4.8 },
  { d: "M 88 80 C 210 58, 360 48, 500 68 S 650 78, 712 76", delay: 0.3, dur: 5.2 },
  { d: "M 88 80 C 220 72, 380 62, 520 76 S 660 82, 712 84", delay: 0.6, dur: 4.5 },
  { d: "M 88 80 C 195 98, 350 92, 490 88 S 630 86, 712 88", delay: 0.9, dur: 5.5 },
  { d: "M 88 80 C 230 108, 390 102, 530 94 S 670 90, 712 92", delay: 1.2, dur: 4.9 },
  { d: "M 88 80 C 205 118, 370 112, 510 102 S 655 96, 712 96", delay: 1.5, dur: 5.8 },
  { d: "M 88 80 C 240 28, 400 32, 540 52 S 680 64, 712 60", delay: 0.45, dur: 5.1 },
  { d: "M 88 80 C 215 132, 385 122, 525 108 S 665 100, 712 104", delay: 1.8, dur: 5.4 },
];

const bridgeSnapshots = [
  { x: 240, spread: 28, opacity: 0.08 },
  { x: 400, spread: 18, opacity: 0.1 },
  { x: 560, spread: 10, opacity: 0.12 },
];

const GenerativeFlowViz = () => {
  return (
    <div
      className="relative w-full h-28 sm:h-36 md:h-44 overflow-hidden"
      aria-hidden
    >
      <svg
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="35%" stopColor="rgba(62, 232, 160, 0.35)" />
            <stop offset="70%" stopColor="rgba(62, 232, 160, 0.55)" />
            <stop offset="100%" stopColor="rgba(232, 149, 106, 0.5)" />
          </linearGradient>
          <linearGradient id="timeSweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(62, 232, 160, 0)" />
            <stop offset="50%" stopColor="rgba(62, 232, 160, 0.12)" />
            <stop offset="100%" stopColor="rgba(62, 232, 160, 0)" />
          </linearGradient>
          <radialGradient id="priorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255, 0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255, 0)" />
          </radialGradient>
          <radialGradient id="posteriorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(62, 232, 160, 0.28)" />
            <stop offset="70%" stopColor="rgba(62, 232, 160, 0.08)" />
            <stop offset="100%" stopColor="rgba(62, 232, 160, 0)" />
          </radialGradient>
          <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="flowArrow"
            viewBox="0 0 6 6"
            refX="5"
            refY="3"
            markerWidth="4"
            markerHeight="4"
            orient="auto"
          >
            <path
              d="M0,0 L6,3 L0,6 Z"
              fill="rgba(62, 232, 160, 0.35)"
            />
          </marker>
        </defs>

        {/* Time axis */}
        <line
          x1="60"
          y1="138"
          x2="740"
          y2="138"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <rect
          x="60"
          y="132"
          width="680"
          height="12"
          fill="url(#timeSweep)"
          className="animate-gen-time-sweep"
        />
        <circle cx="60" cy="138" r="2.5" fill="rgb(62, 232, 160)" opacity="0.7">
          <animate
            attributeName="cx"
            values="60;740;60"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="opacity"
            values="0.35;0.9;0.35"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Intermediate transport snapshots */}
        {bridgeSnapshots.map((snap, i) => (
          <ellipse
            key={`snap-${i}`}
            cx={snap.x}
            cy={CENTER_Y}
            rx={snap.spread}
            ry={snap.spread * 0.55}
            fill="rgba(62, 232, 160, 0.04)"
            stroke="rgba(62, 232, 160, 0.08)"
            strokeWidth="0.8"
            opacity={snap.opacity * 4}
            className="animate-gen-bridge"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Prior distribution p(z₀) */}
        <ellipse
          cx={NOISE_CENTER.x}
          cy={NOISE_CENTER.y}
          rx="46"
          ry="34"
          fill="url(#priorGlow)"
        />
        <ellipse
          cx={NOISE_CENTER.x}
          cy={NOISE_CENTER.y}
          rx="38"
          ry="28"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="animate-gen-prior-ring"
        />

        {noisePoints.map(([cx, cy], i) => (
          <circle
            key={`n-${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 1.6 : 1.2}
            fill="rgba(255,255,255,0.28)"
            className="animate-gen-noise"
            style={{ animationDelay: `${(i % 7) * 0.2}s` }}
          />
        ))}

        {/* Flow streamlines */}
        {flowPaths.map((flow, i) => (
          <path
            key={`stream-${i}`}
            id={`stream-path-${i}`}
            d={flow.d}
            fill="none"
            stroke="url(#streamGrad)"
            strokeWidth={i < 2 ? 1.2 : 0.75}
            strokeLinecap="round"
            strokeDasharray="800"
            opacity={0.25 + (i % 3) * 0.1}
            markerEnd={i % 3 === 0 ? "url(#flowArrow)" : undefined}
            className="animate-gen-flow"
            style={{
              animationDelay: `${flow.delay}s`,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          />
        ))}

        {/* Posterior distribution p(z₁) */}
        <ellipse
          cx={TARGET_CENTER.x}
          cy={TARGET_CENTER.y}
          rx="58"
          ry="40"
          fill="url(#posteriorGlow)"
          className="animate-gen-latent"
        />
        {[44, 30, 18].map((r, i) => (
          <ellipse
            key={`contour-${i}`}
            cx={TARGET_CENTER.x}
            cy={TARGET_CENTER.y}
            rx={r}
            ry={r * 0.65}
            fill="none"
            stroke={`rgba(62, 232, 160, ${0.15 + i * 0.12})`}
            strokeWidth="1"
            className="animate-gen-latent"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}

        {targetPoints.map(([cx, cy], i) => (
          <circle
            key={`t-${i}`}
            cx={cx}
            cy={cy}
            r={i % 4 === 0 ? 2 : 1.4}
            fill="rgb(62, 232, 160)"
            className="animate-gen-latent-dot"
            style={{ animationDelay: `${(i % 6) * 0.15}s` }}
          />
        ))}

        {/* Transport particles */}
        {flowPaths.map((flow, i) => (
          <g key={`particle-${i}`} filter="url(#particleGlow)">
            <circle
              r={i < 3 ? 2.8 : 2}
              fill={i % 2 === 0 ? "rgb(62, 232, 160)" : "rgb(232, 149, 106)"}
              opacity="0.95"
            >
              <animateMotion
                dur={`${flow.dur}s`}
                repeatCount="indefinite"
                begin={`${flow.delay}s`}
                path={flow.d}
                calcMode="spline"
                keyPoints="0;1"
                keyTimes="0;1"
                keySplines="0.45 0.05 0.55 0.95"
              />
            </circle>
            {i < 4 && (
              <circle
                r="1.2"
                fill="rgba(255,255,255,0.6)"
                opacity="0.5"
              >
                <animateMotion
                  dur={`${flow.dur}s`}
                  repeatCount="indefinite"
                  begin={`${flow.delay + flow.dur * 0.35}s`}
                  path={flow.d}
                  calcMode="spline"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  keySplines="0.45 0.05 0.55 0.95"
                />
              </circle>
            )}
          </g>
        ))}

        {/* Labels */}
        <text
          x="58"
          y="152"
          fill="rgba(255,255,255,0.22)"
          fontSize="8"
          fontFamily="var(--font-mono), monospace"
        >
          t = 0
        </text>
        <text
          x="88"
          y="152"
          fill="rgba(255,255,255,0.18)"
          fontSize="8"
          fontFamily="var(--font-mono), monospace"
        >
          z₀
        </text>
        <text
          x="688"
          y="152"
          fill="rgba(62, 232, 160, 0.4)"
          fontSize="8"
          fontFamily="var(--font-mono), monospace"
        >
          z₁
        </text>
        <text
          x="728"
          y="152"
          fill="rgba(62, 232, 160, 0.3)"
          fontSize="8"
          fontFamily="var(--font-mono), monospace"
        >
          t = 1
        </text>
      </svg>
    </div>
  );
};

export default GenerativeFlowViz;
