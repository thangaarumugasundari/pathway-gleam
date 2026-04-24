export function WaveDivider({ flip = false, color = "currentColor" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 sm:h-16 text-yellow-soft/60" style={{ color }}>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
