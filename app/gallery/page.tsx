import type { Metadata } from "next";
import { EmptyState } from "@/components/EmptyState";
import { getGalleryItems } from "@/lib/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from the OpenPup build.",
};

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-copper">Pics & videos</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Gallery</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-soft">Photos and clips from the build, when there are some.</p>
      <div className="mt-8">
        {items.length === 0 ? (
          <EmptyState title="Coming soon">
            <p>We’ll add pictures and videos once there is a puppy to point a camera at.</p>
          </EmptyState>
        ) : (
          <GalleryGrid items={items} />
        )}
      </div>
    </div>
  );
}
