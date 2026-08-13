import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getGalleryItems } from "@/lib/gallery";

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
      <p className="mt-3 max-w-2xl text-lg text-ink-soft">
        Build-day photos, desk-puppy videos, and the occasional “it did a thing.” Keep originals; this page is the
        scrapbook.
      </p>
      <div className="mt-8">
        <GalleryGrid items={items} />
      </div>
    </div>
  );
}
