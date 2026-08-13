import Link from "next/link";
import { PuppyMark } from "@/components/PuppyMark";
import { SiteNav } from "@/components/SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <PuppyMark className="h-9 w-9" />
          <span>OpenPup</span>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
