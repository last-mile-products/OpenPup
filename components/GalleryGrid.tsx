import type { GalleryItem } from "@/lib/gallery";

function youtubeSrc(src: string) {
  if (src.includes("embed/")) return src;
  const id = src.split("v=")[1]?.split("&")[0] ?? src;
  return `https://www.youtube.com/embed/${id}`;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line bg-cream p-8 text-ink-soft">
        <p className="font-display text-2xl font-semibold text-ink">No photos yet — on purpose.</p>
        <p className="mt-3 max-w-xl">
          Drop pictures into <code className="rounded bg-paper-deep px-1.5">public/media/</code> and list them in{" "}
          <code className="rounded bg-paper-deep px-1.5">content/gallery.json</code>. Long videos are happier on
          YouTube than in git. See <code className="rounded bg-paper-deep px-1.5">content/README.md</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={`${item.src}-${item.date}`} className="overflow-hidden rounded-3xl border border-line bg-cream shadow-[var(--shadow)]">
          {item.type === "image" ? (
            // Static export: ordinary img tags, files from /public
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
          ) : null}
          {item.type === "video" ? (
            <video className="aspect-[4/3] w-full bg-ink" controls src={item.src} />
          ) : null}
          {item.type === "youtube" ? (
            <iframe
              className="aspect-video w-full"
              src={youtubeSrc(item.src)}
              title={item.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
          <figcaption className="p-4">
            <p className="font-bold">{item.caption}</p>
            <p className="text-sm text-ink-soft">{item.date}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
