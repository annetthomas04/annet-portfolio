import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectArt from "../components/ProjectArt.jsx";
import { projects } from "../data/projects.js";

function TrafficLights() {
  return (
    <div className="flex items-center gap-[6px]">
      <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
      <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
      <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
    </div>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) => p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="flex min-h-[100dvh] w-screen items-center justify-center px-3 pb-4 pt-[46px] sm:h-[100dvh] sm:overflow-hidden sm:px-5 sm:pb-8 sm:pt-[58px]">
      <div
        className="flex w-full flex-col overflow-hidden rounded-2xl sm:h-full sm:max-w-[1080px]"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex flex-shrink-0 items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
          <TrafficLights />
          <span className="ml-1 text-[13px] font-semibold text-black/85">projects</span>
          <span className="text-[13px] font-semibold tracking-wide text-black/25">»</span>
          <div
            className="ml-auto flex max-w-[45%] flex-1 items-center gap-1 rounded-md px-2 py-[3px]"
            style={{ background: "rgba(0,0,0,0.01)", border: "0.5px solid rgba(0,0,0,0.06)" }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 opacity-30">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-[11px] text-black outline-none placeholder:text-black/25"
              aria-label="Search projects"
            />
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-3 pb-3 sm:px-6 sm:pb-6">
          <p className="flex-shrink-0 font-neue text-[11px] uppercase tracking-wide text-black/35">
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
          </p>

          <div className="mt-2 hidden min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-x-8 gap-y-5 sm:mt-3 sm:grid">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex min-h-0 flex-col"
              >
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  {p.thumb ? (
                    <img src={p.thumb} alt={p.title} className="h-full w-full object-cover object-center" />
                  ) : (
                    <ProjectArt art={p.art} radius="rounded-lg" className="h-full w-full" />
                  )}
                </div>
                <div className="flex flex-shrink-0 flex-col pt-2">
                  <p className="font-neue truncate text-[0.8rem] transition-colors duration-200 group-hover:text-black sm:text-[1rem]">
                    {p.title}
                  </p>
                  <p className="font-neue truncate text-[0.7rem] text-accent sm:text-[0.8rem]">
                    {p.tools}
                  </p>
                  <p className="font-neue mt-0.5 hidden truncate text-[10px] text-black/35 sm:block sm:text-[11px]">
                    {p.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-2 flex flex-col sm:hidden">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group flex w-full items-start gap-3 rounded-lg p-1 py-2 transition-colors duration-200"
              >
                <div
                  className="w-[34%] max-w-[140px] flex-shrink-0 overflow-hidden rounded-lg transition-shadow duration-200 group-hover:shadow-[0_6px_18px_rgba(0,0,0,0.14)]"
                  style={{ aspectRatio: p.cardRatio }}
                >
                  {p.thumb ? (
                    <img src={p.thumb} alt={p.title} className="h-full w-full object-cover object-center" />
                  ) : (
                    <ProjectArt art={p.art} radius="rounded-lg" className="h-full w-full" />
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center pt-0.5">
                  <p className="font-neue line-clamp-2 text-[0.82rem] leading-snug">
                    {p.title}
                  </p>
                  <p className="font-neue truncate text-[0.7rem] text-accent">{p.tools}</p>
                  <p className="font-neue mt-0.5 truncate text-[10px] text-black/35">
                    {p.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="flex flex-1 items-center justify-center font-neue text-sm text-black/35">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}