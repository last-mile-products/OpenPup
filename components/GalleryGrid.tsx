import type { GalleryItem } from "@/lib/gallery";

function youtubeSrc(src: string) {
  if (src.includes("embed/")) return src;
  const id = src.split("v=")[1]?.split("&")[0] ?? src;
  return `https://www.youtube.com/embed/${id}`;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
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
