import fs from "node:fs";
import path from "node:path";

// Gallery manifest: add photos/videos here, put files in public/media/.
// YouTube/Vimeo urls work without hosting the file on Firebase.
const GALLERY_PATH = path.join(process.cwd(), "content/gallery.json");

export type GalleryItem = {
  type: "image" | "video" | "youtube";
  src: string;
  alt: string;
  caption: string;
  date: string;
};

export type GalleryFile = {
  items: GalleryItem[];
};

export function getGalleryItems(): GalleryItem[] {
  if (!fs.existsSync(GALLERY_PATH)) return [];
  const parsed = JSON.parse(fs.readFileSync(GALLERY_PATH, "utf8")) as GalleryFile;
  return parsed.items ?? [];
}
