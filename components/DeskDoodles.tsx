// Decorative workshop scraps for the home desk. All aria-hidden.
// They stay while phase is "building" — the page is still a workshop table.

function Scrap({ src, className }: { src: string; className: string }) {
  return (
    // Cream JPEGs used as paper scraps; next/image is unnecessary for these.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={`shadow-sm ${className}`} />
  );
}

function Paperclip({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 72" fill="none" aria-hidden="true">
      <path
        d="M14 20v28c0 7 6 12 12 8 5-3 6-10 6-16V18c0-6-5-10-10-8-4 2-5 7-5 12v26"
        stroke="#2c2118"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QuestionScribble({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M18 22c2-10 28-12 28 4 0 10-12 12-14 20"
        stroke="#c45c2a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="52" r="3.5" fill="#c45c2a" />
    </svg>
  );
}

export function DeskDoodles() {
  return (
    <div className="desk-doodles pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Scrap
        src="/doodles/doodle-sticky.jpg"
        className="absolute top-4 left-[-12px] w-24 rotate-[-14deg] opacity-90 sm:top-10 sm:left-2 sm:w-32"
      />
      <Scrap
        src="/doodles/doodle-paw.jpg"
        className="absolute top-8 right-[-8px] w-20 rotate-[18deg] opacity-80 sm:right-6 sm:w-28"
      />
      <Scrap
        src="/doodles/doodle-pencil.jpg"
        className="absolute bottom-28 left-[-20px] hidden w-36 rotate-[-32deg] sm:block md:bottom-16 md:left-4 md:w-44"
      />
      <Scrap
        src="/doodles/doodle-pi.jpg"
        className="absolute right-[-16px] bottom-36 hidden w-28 rotate-[10deg] md:block md:right-2 md:bottom-20 md:w-36"
      />
      <Scrap
        src="/doodles/doodle-tape.jpg"
        className="absolute top-[42%] right-[8%] hidden w-24 rotate-[-20deg] lg:block"
      />
      <Paperclip className="absolute top-[38%] left-[6%] hidden h-16 w-8 rotate-[22deg] opacity-70 md:block" />
      <QuestionScribble className="absolute bottom-8 left-[28%] hidden h-12 w-12 rotate-[-12deg] opacity-50 lg:block" />
    </div>
  );
}

export function SketchPad() {
  return (
    <figure className="relative mx-auto max-w-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/doodles/doodle-sketchpad.jpg"
        alt="An empty open sketchbook"
        className="w-full rotate-[-2deg] rounded-sm shadow-[var(--shadow)]"
      />
      {/* Unfinished puppy taped onto the blank page */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/doodles/doodle-puppy-sketch.jpg"
        alt="An unfinished pencil sketch of a robot puppy"
        className="absolute top-[18%] right-[10%] w-[42%] rotate-[7deg] shadow-md"
      />
      <figcaption className="mt-4 text-center text-sm font-bold text-ink-soft">
        The puppy sketch is still a drawing. The chassis is on the table.
      </figcaption>
    </figure>
  );
}
