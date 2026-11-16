import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Journal markdown is family-authored. react-markdown drops raw HTML, so a
// <video> in a post would disappear. Turn those tags into markdown images,
// then render an mp4 or webm image as <video controls playsInline muted>.
const VIDEO_TAG = /<video\b([^>]*?)\/?>(?:\s*<\/video>)?/gi;

function readAttr(attrs: string, name: string) {
  const match = new RegExp(String.raw`\b${name}\s*=\s*(?:"([^"]*)"|'([^']*)')`, "i").exec(attrs);
  return match?.[1] ?? match?.[2] ?? "";
}

// Site paths and https only. A video tag must not become a javascript: URL.
function safeSrc(src: string) {
  if (src.startsWith("/")) return src;
  if (/^https:\/\//i.test(src)) return src;
  return "";
}

function videoTagsToMarkdown(content: string) {
  return content.replace(VIDEO_TAG, (_match, attrs: string) => {
    const src = safeSrc(readAttr(attrs, "src"));
    if (!src) return "";
    const poster = safeSrc(readAttr(attrs, "poster"));
    const label = (readAttr(attrs, "aria-label") || "Video").replace(/[[\]]/g, "");
    const title = poster ? ` "${poster}"` : "";
    return `\n\n![${label}](${src}${title})\n\n`;
  });
}

function isVideoSrc(src: string) {
  return /\.(mp4|webm)(?:[?#]|$)/i.test(src);
}

const components: Components = {
  img: ({ src, alt, title }) => {
    const source = typeof src === "string" ? src : "";
    if (isVideoSrc(source)) {
      const poster = typeof title === "string" && title.length > 0 ? title : undefined;
      return (
        <video
          controls
          playsInline
          muted
          preload="metadata"
          src={source}
          poster={poster}
          aria-label={alt || undefined}
        />
      );
    }

    return (
      // Static export: ordinary img, files from public/. CSS in .md-body styles it.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={source} alt={alt ?? ""} />
    );
  },
};

// Shared markdown renderer for journal posts. Keep styling in globals.css (.md-body).
export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="md-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {videoTagsToMarkdown(content)}
      </ReactMarkdown>
    </div>
  );
}
