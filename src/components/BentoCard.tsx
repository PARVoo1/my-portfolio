import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, href, className = "", delay = 0 }: Props) {
  return (
    <div
      className={`vp-bento-card relative rounded-3xl bg-card border border-border/60 p-6 md:p-8 overflow-hidden min-h-[300px] md:min-h-[360px] transition-[transform,box-shadow] duration-200 hover:shadow-lg hover:scale-[0.98] ${className}`}
      style={{ ["--vp-delay"]: `${delay}s` } as CSSProperties}
    >
      {children}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 left-4 md:bottom-5 md:left-5 grid place-items-center w-10 h-10 rounded-full bg-background border border-border hover:scale-110 hover:bg-foreground hover:text-background transition-all group/arrow"
          aria-label="Open project"
        >
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
}