import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MENUS = ["File", "Edit", "View", "Window", "Help"];
const STACK = ["Python", "SQL", "R", "Java"];

function AboutModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="About this portfolio">
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" onClick={onClose} />
      <div
        className="fade-up relative w-full max-w-[400px] overflow-hidden rounded-2xl bg-white"
        style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.22), 0 0 0 0.5px rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
          <div className="flex items-center gap-[6px]">
            <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
          </div>
          <span className="font-neue text-xs font-semibold text-black/70">About this portfolio</span>
          <button
            onClick={onClose}
            className="font-neue cursor-pointer rounded-md px-2 py-0.5 text-xs text-black/60 transition-colors hover:bg-black/5 hover:text-black"
            aria-label="close"
          >
            close
          </button>
        </div>

        <div className="flex flex-col items-center px-6 pb-6 pt-5 text-center">
          <img
            src="/images/profile.jpg"
            alt="Annet Thomas"
            className="h-16 w-16 rounded-full object-cover object-[50%_12%]"
            style={{ border: "2px solid rgba(2,167,217,0.3)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
          />

          <p className="font-serif mt-3 text-3xl">Annet Thomas</p>
          <p className="font-neue mt-1 text-xs uppercase tracking-wide text-black/45">
            developer · designer · data analyst
          </p>

          <p className="font-neue mt-3 text-sm text-black/70">
            Fresh Comp Sci Graduate tinkering at the intersection of code, design and data.
            Currently open to roles that are hiring.
          </p>

          <p className="font-neue mt-3 text-xs text-black/45">
            BSc (Hons) Computer Science '26' · University of West London
          </p>

          <div className="mt-4 flex max-w-[320px] flex-wrap items-center justify-center gap-1.5">
            {STACK.map((s) => (
              <span
                key={s}
                className="font-neue rounded-full px-2.5 py-1 text-[11px] text-black/70"
                style={{ background: "rgba(2,167,217,0.08)", border: "0.5px solid rgba(2,167,217,0.25)" }}
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href="mailto:diaryofannet@gmail.com"
            className="font-neue mt-5 text-sm text-accent underline decoration-accent/40 transition-colors hover:decoration-accent"
          >
            diaryofannet@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menubar() {
  const [now, setNow] = useState(new Date());
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const appleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const tick = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e) => {
      if (
        appleRef.current &&
        !appleRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clock = now
    .toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(",", "");

  return (
    <header className="fixed top-0 z-40 flex w-full">
      <div
        className="relative w-screen transition-transform duration-200 ease-out"
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div
          className="backdrop-blur-md"
          style={{
            height: "32px",
            width: "100vw",
            background: "rgba(251, 255, 255, 0.25)",
            borderBottom: "0.5px solid rgba(255, 255, 255, 0.012)",
            boxShadow: "0 0.5px 2px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div className="flex h-full items-center justify-between px-2 sm:px-4">
            <div className="flex min-w-0 items-center space-x-2 sm:space-x-4">
              <div className="relative flex flex-shrink-0 items-center rounded px-1.5 py-0.5 transition-colors duration-100 hover:bg-black/5" ref={appleRef} role="button" tabIndex={0} aria-expanded={menuOpen} aria-haspopup="true" aria-label="Open portfolio menu" onClick={() => setMenuOpen((o) => !o)} onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setMenuOpen((o) => !o);
                  }
                }}>
                <img src="/assets/apple.svg" alt="Menu" width="15" height="19" style={{ display: "block" }} />
              </div>

              {menuOpen && (
                <div
                  ref={menuRef}
                  className="fade-up absolute left-0 top-full z-30 mt-1 min-w-[220px] rounded-lg bg-white py-1"
                  style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.16), 0 0 0 0.5px rgba(0,0,0,0.07)" }}
                >
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setAboutOpen(true);
                      }}
                      className="font-neue flex w-full cursor-pointer items-center px-3 py-1.5 text-left text-sm text-black transition-colors hover:bg-black/5"
                    >
                      About this portfolio
                    </button>
                    <div className="my-1 h-px w-full bg-black/5" />
                    <a
                      href="mailto:diaryofannet@gmail.com"
                      onClick={() => setMenuOpen(false)}
                      className="font-neue flex w-full items-center px-3 py-1.5 text-sm text-black transition-colors hover:bg-black/5"
                    >
                      Contact Annet
                    </a>
                  </div>
              )}

              <span className="flex-shrink-0 text-xs font-semibold text-black sm:text-sm">Finder</span>
              <div className="hidden items-center space-x-2 sm:flex">
                {MENUS.map((m) => (
                  <span
                    key={m}
                    className="cursor-pointer select-none rounded px-2 py-0.5 text-sm text-black transition-colors duration-100 hover:bg-black/5"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
              <span className="cursor-pointer select-none text-xs font-medium text-black transition-opacity duration-150 hover:opacity-80 sm:text-sm">
                {clock}
              </span>
            </div>
          </div>
        </div>
      </div>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </header>
  );
}