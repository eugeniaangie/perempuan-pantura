type PlaceholderLogoProps = {
  variant?: "blue" | "white";
  showPortrait?: boolean;
  className?: string;
  portraitClassName?: string;
  wordmarkClassName?: string;
};

export function PlaceholderLogo({
  variant = "blue",
  showPortrait = true,
  className,
  portraitClassName = "h-8 sm:h-9 w-auto",
  wordmarkClassName = "h-5 sm:h-7",
}: PlaceholderLogoProps) {
  const stroke = variant === "white" ? "#ffffff" : "#334d70";
  const fill = variant === "white" ? "#ffffff" : "#334d70";

  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className ?? ""}`}>
      {showPortrait ? (
        <svg
          viewBox="0 0 64 80"
          className={portraitClassName}
          aria-hidden
          fill="none"
        >
          <circle cx="32" cy="28" r="16" stroke={stroke} strokeWidth="2" />
          <path
            d="M18 72c2-18 10-28 14-32 4 4 12 14 14 32"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 26c2 2 4 3 6 2M36 26c2 1 4 2 6 1"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M28 34c2 2 6 2 8 0"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      <span
        className={`inline-flex items-center font-display font-semibold tracking-tight ${wordmarkClassName}`}
        style={{ color: fill, fontSize: "1.35em", lineHeight: 1 }}
      >
        Pantura
      </span>
    </span>
  );
}

export function PlaceholderHeroArt() {
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-3 text-blue sm:h-72">
      <svg viewBox="0 0 120 140" className="h-36 w-auto sm:h-52" aria-hidden>
        <circle
          cx="60"
          cy="48"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M32 128c4-32 18-48 28-54 10 6 24 22 28 54"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M42 46c4 3 8 4 12 2M66 46c4 2 8 3 12 1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M52 62c4 3 12 3 16 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-2xl font-semibold sm:text-3xl">
        Pantura
      </span>
    </div>
  );
}
