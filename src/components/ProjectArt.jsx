import { artPalettes } from "../data/projects";

function Decor({ mood, color }) {
  switch (mood) {
    case "timeline":
      return (
        <div className="absolute inset-x-[8%] bottom-[16%] flex h-[22%] items-stretch gap-1">
          {["#f6c8d2", "#fdc9a4", "#c9e8d8", "#bcd4fb", "#f4c2e0"].map((c, i) => (
            <div key={i} className="flex-1 rounded-[6px]" style={{ background: c }} />
          ))}
        </div>
      );
    case "polaroids":
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-[4%]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[62%] w-[16%] rounded-[4px] bg-white p-[4px] shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
              style={{ transform: `rotate(${(i - 1.5) * 5}deg) translateY(${i % 2 ? 6 : -6}px)` }}
            >
              <div className="h-[70%] w-full rounded-[2px]" style={{ background: `linear-gradient(160deg, ${color}, #ffffff)` }} />
            </div>
          ))}
        </div>
      );
    case "tears":
      return (
        <div className="absolute inset-0">
          {[
            { l: "18%", t: "24%", s: 1 },
            { l: "44%", t: "52%", s: 1.6 },
            { l: "72%", t: "30%", s: 1.1 },
          ].map((d, i) => (
            <svg key={i} viewBox="0 0 24 32" className="absolute w-[9%]" style={{ left: d.l, top: d.t, transform: `scale(${d.s})` }}>
              <path d="M12 0 C12 0 24 16 24 22 A12 12 0 0 1 0 22 C0 16 12 0 12 0 Z" fill="rgba(255,255,255,0.65)" />
            </svg>
          ))}
        </div>
      );
    case "team":
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-[5%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="h-[34px] w-[34px] rounded-full bg-white/80 shadow" />
              <div className="h-[26px] w-[42px] rounded-t-full bg-white/70" />
            </div>
          ))}
        </div>
      );
    case "book":
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <div className="h-[45%] w-[26%] rounded-l-[6px] bg-white/85 shadow-[0_8px_18px_rgba(0,0,0,0.15)]" />
          <div className="h-[45%] w-[26%] rounded-r-[6px] bg-white/70 shadow-[0_8px_18px_rgba(0,0,0,0.15)]" />
        </div>
      );
    case "capture":
      return (
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-[16%] h-[62%] w-[58%] rounded-[8px] bg-white/85 shadow-[0_10px_22px_rgba(0,0,0,0.16)]" />
          <div className="absolute bottom-[12%] right-[10%] h-[46%] w-[34%] rounded-[8px] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.2)]" />
        </div>
      );
    case "reflection":
      return (
        <div className="absolute inset-0 flex items-end justify-center gap-2 pb-[14%]">
          <div className="h-[52%] w-[30%] rounded-[10px] bg-white/85 shadow-[0_8px_18px_rgba(0,0,0,0.14)]" />
          <div className="h-[34%] w-[24%] rounded-[10px] bg-white/60" />
        </div>
      );
    default:
      return (
        <>
          <div className="absolute -right-[10%] -top-[18%] h-[60%] w-[60%] rounded-full bg-white/45 blur-[26px]" />
          <div className="absolute -bottom-[22%] -left-[8%] h-[55%] w-[55%] rounded-full bg-white/30 blur-[22px]" />
        </>
      );
  }
}

export default function ProjectArt({
  art = "glimpse",
  mood,
  label,
  className = "",
  style,
  radius = "rounded-lg",
  compact = false,
}) {
  const palette = artPalettes[art] || artPalettes.glimpse;
  const [a, b, c] = palette;
  return (
    <div
      className={`relative overflow-hidden ${radius} ${className}`}
      style={{
        background: `linear-gradient(140deg, ${a} 0%, ${b} 55%, ${c} 100%)`,
        boxShadow: "inset 0 0 0 0.5px rgba(0,0,0,0.06)",
        ...style,
      }}
      role="img"
      aria-label={label || "project visual"}
    >
      <Decor mood={mood} color={c} />
      {label && (
        <span
          className={`absolute left-3 top-3 font-neue uppercase tracking-wide text-black/45 ${
            compact ? "text-[8px]" : "text-[10px]"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}