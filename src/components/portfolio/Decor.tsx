export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M8 56 C 14 28, 36 8, 60 6 C 58 30, 38 52, 10 58 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M14 50 C 28 40, 44 24, 56 12" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} aria-hidden>
      <path
        d="M2 12 Q 20 0, 40 12 T 80 12 T 120 12 T 160 12 T 198 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dot({ className = "" }: { className?: string }) {
  return <span className={`inline-block rounded-full ${className}`} aria-hidden />;
}

export function CircleOrbit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeDasharray="2 6" />
    </svg>
  );
}
