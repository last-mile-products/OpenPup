import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description: "A draft of how OpenPup splits work between the puppy and the house computer.",
};

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Draft</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">How it works</h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        This page is a sketch, not a spec. We’ll fill it in as we actually wire things up.
      </p>

      <div className="mt-10 space-y-6 rounded-3xl border border-line bg-cream p-6 shadow-[var(--shadow)] sm:p-8">
        <p className="leading-7">
          The idea: a <strong>Raspberry Pi</strong> lives in the puppy and runs <strong>OpenClaw</strong> — see, hear,
          talk, move. When a job is too big for a little computer on a battery, the puppy asks a{" "}
          <strong>computer in the house</strong> over our home network.
        </p>
        <p className="leading-7 text-ink-soft">
          Fast pet stuff stays on board. Homework stays at the desk. Nothing here is hooked up yet.
        </p>
      </div>

      <p className="mt-8 text-ink-soft">
        Build order (also a draft) is on the{" "}
        <Link href="/build" className="font-extrabold text-copper-deep underline">
          build guide
        </Link>
        .
      </p>
    </div>
  );
}
