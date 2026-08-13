"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Keep nav labels short — this site is read on a laptop at the kitchen table.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/build", label: "Build guide" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="md:hidden rounded-full border border-line bg-cream px-3 py-1.5 text-sm font-bold"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav
        aria-label="Primary"
        className={`${open ? "flex" : "hidden"} absolute top-full right-4 left-4 z-20 mt-2 flex-col gap-1 rounded-2xl border border-line bg-cream p-3 shadow-[var(--shadow)] md:static md:mt-0 md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        {LINKS.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3 py-1.5 text-sm font-bold transition-colors ${
                active
                  ? "bg-ink text-cream"
                  : "text-ink-soft hover:bg-paper-deep hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
