import type { ReactNode } from "react";

export type IconName = "arrow" | "up" | "input" | "process" | "code" | "database" | "check" | "location" | "github" | "pause" | "play" | "menu" | "close";
const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
  input: <path d="M14 4h6v16h-6M3 12h12M10 7l5 5-5 5" />,
  process: <><path d="M4 6h16M4 12h16M4 18h16" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="9" cy="18" r="2" /></>,
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" />,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  github: <path d="M9 19c-4 1-4-2-6-2m12 4v-4c0-1 .2-2-1-3 4-.4 7-2 7-6 0-2-1-3-2-4 0-1 0-2-.3-3-2 0-3 1-4 1a12 12 0 0 0-6 0C7 1 6 1 4 1c-.3 1-.3 2-.3 3C2 5 2 6 2 8c0 4 3 6 7 6-1 1-1 2-1 3v4" />,
  pause: <path d="M8 5v14M16 5v14" />,
  play: <path d="m8 4 12 8-12 8Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
