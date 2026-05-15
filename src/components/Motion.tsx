"use client";
import type { CSSProperties, ReactNode } from "react";

type MotionStyle = CSSProperties & {
  [key: `--${string}`]: string;
};

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`vp-fade-up ${className ?? ""}`.trim()} style={{ ["--vp-delay"]: `${delay}s` } as MotionStyle}>
      {children}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`vp-reveal ${className ?? ""}`.trim()} style={{ ["--vp-delay"]: `${delay}s` } as MotionStyle}>
      {children}
    </div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`vp-stagger ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`vp-stagger-item ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
