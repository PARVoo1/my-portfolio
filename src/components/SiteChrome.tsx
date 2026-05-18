import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Nav() {
  return (
    <nav className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-40 flex max-w-[calc(100vw-1rem)] items-center gap-1 rounded-full bg-card/80 backdrop-blur-md border border-border px-1.5 py-1 shadow-sm md:px-2 md:py-1.5">
      <Link
        to="/"
        className="px-3 py-1 text-[13px] rounded-full transition-colors md:px-4 md:py-1.5 md:text-sm"
        activeProps={{ className: "px-3 py-1 text-[13px] rounded-full bg-background text-foreground font-medium md:px-4 md:py-1.5 md:text-sm" }}
        activeOptions={{ exact: true }}
        inactiveProps={{ className: "px-3 py-1 text-[13px] rounded-full text-muted-foreground hover:text-foreground md:px-4 md:py-1.5 md:text-sm" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="px-3 py-1 text-[13px] rounded-full transition-colors md:px-4 md:py-1.5 md:text-sm"
        activeProps={{ className: "px-3 py-1 text-[13px] rounded-full bg-background text-foreground font-medium md:px-4 md:py-1.5 md:text-sm" }}
        inactiveProps={{ className: "px-3 py-1 text-[13px] rounded-full text-muted-foreground hover:text-foreground md:px-4 md:py-1.5 md:text-sm" }}
      >
        About
      </Link>
    </nav>
  );
}

export function StickyContact() {
  const mobileContactRef = useRef<HTMLDivElement | null>(null);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  useEffect(() => {
    if (!isMobileContactOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (mobileContactRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsMobileContactOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileContactOpen]);

  return (
    <>
      <div ref={mobileContactRef} className="md:hidden fixed bottom-4 right-4 z-50 flex flex-col items-end">
        {isMobileContactOpen ? (
          <div className="vp-contact-card w-[min(86vw,18rem)] rounded-2xl bg-[#fde047] text-[#1a1a1a] shadow-lg border border-[#eab308]/30 overflow-hidden">
            <div className="px-4 pt-4 pb-3 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                Reach me:
              </p>
              <a
                href="mailto:parv10046@gmail.com"
                className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                parv10046@gmail.com
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/PARVoo1"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                https://github.com/PARVoo1
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/parv001/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                https://www.linkedin.com/in/parv001/
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileContactOpen(false)}
              className="w-full border-t border-[#1a1a1a]/10 py-2.5 text-sm font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
              aria-expanded={isMobileContactOpen}
              aria-label="Contact Parv"
            >
              Contact
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsMobileContactOpen(true)}
            className="vp-contact-card inline-flex items-center gap-2 rounded-full bg-[#fde047] px-4 py-3 text-sm font-semibold text-[#1a1a1a] shadow-lg border border-[#eab308]/30"
            style={{ fontFamily: "var(--font-display)" }}
            aria-expanded={isMobileContactOpen}
            aria-label="Contact Parv"
          >
            Contact
          </button>
        )}
      </div>

      <div className="group hidden md:flex fixed top-0 right-0 z-50 flex-col origin-top-right translate-x-[154px] -translate-y-[calc(100%-22px)] rotate-[-8deg] transition-transform duration-300 ease-out hover:translate-x-0 hover:translate-y-0 hover:rotate-0 focus-within:translate-x-0 focus-within:translate-y-0 focus-within:rotate-0">
        <div className="vp-contact-card relative flex flex-col bg-[#fde047] text-[#1a1a1a] w-[280px] pt-6 pb-3 px-4 rounded-b-2xl shadow-lg border-x border-b border-[#eab308]/30 transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-0 group-hover:shadow-xl">
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-background" />
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-[#ca8a04] border-b-[12px] border-b-transparent" />

          <div className="flex flex-col gap-2 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>
              Reach me:
            </p>
            <a 
              href="mailto:parv10046@gmail.com" 
              className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              parv10046@gmail.com 
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href="https://github.com/PARVoo1" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              https://github.com/PARVoo1 
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/parv001/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between text-xs font-medium hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              https://www.linkedin.com/in/parv001/ 
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <span
            className="text-lg leading-none tracking-tight pt-2 border-t border-[#1a1a1a]/10 font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </span>

        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="text-center py-12 text-sm text-muted-foreground">
      © 2026. Made by{" "}
      <a
        href="https://github.com/PARVoo1"
        target="_blank"
        rel="noreferrer"
        className="text-foreground font-medium hover:underline"
      >
        @parv001
      </a>
    </footer>
  );
}
