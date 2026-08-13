"use client";

import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  // Calendar fills the leftover viewport under the header — skip the footer so the grid stays on one screen.
  if (pathname === "/calendar") return null;

  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>A Fletcher family DIY project. The puppy still needs a real name.</p>
        {/* License is in /LICENSE at the repo root — keep this public-facing. */}
        <p>Open source under the MIT License.</p>
      </div>
    </footer>
  );
}
