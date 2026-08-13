// Simple geometric robot-pup mark used in the header and empty states.
export function PuppyMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" fill="#fff8ee" />
      <circle cx="60" cy="60" r="56" stroke="#2c2118" strokeWidth="4" />
      <ellipse cx="38" cy="28" rx="14" ry="18" fill="#c45c2a" stroke="#2c2118" strokeWidth="3" />
      <ellipse cx="82" cy="28" rx="14" ry="18" fill="#c45c2a" stroke="#2c2118" strokeWidth="3" />
      <rect x="28" y="40" width="64" height="52" rx="22" fill="#c45c2a" stroke="#2c2118" strokeWidth="3" />
      <circle cx="46" cy="62" r="7" fill="#fff8ee" />
      <circle cx="74" cy="62" r="7" fill="#fff8ee" />
      <circle cx="48" cy="63" r="3.5" fill="#2c2118" />
      <circle cx="76" cy="63" r="3.5" fill="#2c2118" />
      <rect x="54" y="72" width="12" height="8" rx="3" fill="#2c2118" />
      <path d="M44 86c8 8 24 8 32 0" stroke="#2c2118" strokeWidth="3" strokeLinecap="round" />
      <g className="pup-tail">
        <path d="M90 78c14-2 18 10 10 16" stroke="#2c2118" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
