import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-semibold">That page ran off.</h1>
      <p className="mt-3 text-ink-soft">Maybe it is hiding under the journal.</p>
      <Link href="/" className="mt-6 inline-block font-extrabold text-copper-deep underline">
        Back home
      </Link>
    </div>
  );
}
