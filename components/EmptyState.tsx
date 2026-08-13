// Visitor-facing placeholder. Do not mention repo paths or how to add files.
export function EmptyState({
  kicker = "Coming soon",
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-line bg-cream px-6 py-10 text-center shadow-[var(--shadow)] sm:px-10">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mx-auto mt-3 max-w-lg text-ink-soft">{children}</div>
    </div>
  );
}
