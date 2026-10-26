import type { GalleryItem } from "@/lib/gallery";

// Gallery dates are stored as YYYY-MM-DD and shown as a regular calendar day.
function formatGalleryDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function youtubeSrc(src: string) {
  if (src.includes("embed/")) return src;
  const id = src.split("v=")[1]?.split("&")[0] ?? src;
  return `https://www.youtube.com/embed/${id}`;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  // items-start: portrait and landscape photos should not stretch the shorter card.
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={`${item.src}-${item.date}`} className="overflow-hidden rounded-3xl border border-line bg-cream shadow-[var(--shadow)]">
          {item.type === "image" ? (
            // Static export: ordinary img tags, files from /public.
            // object-contain keeps the whole frame — build photos mix portrait and landscape.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.src} alt={item.alt} className="max-h-[32rem] w-full bg-paper object-contain" />
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
            <p className="text-sm text-ink-soft">{formatGalleryDate(item.date)}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
