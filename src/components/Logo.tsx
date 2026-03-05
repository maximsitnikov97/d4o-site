export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`group flex items-center gap-2.5 ${className}`}>
      {/* Icon — minimal abstract mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" className="fill-forest" />
        {/* Abstract slash-bracket: </> */}
        <path
          d="M12 10l-4 6 4 6M20 10l4 6-4 6M17 9l-2 14"
          stroke="#080C0A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-foreground font-bold tracking-tight text-lg">
        D4O
      </span>
    </a>
  );
}
