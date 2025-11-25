interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            fill="url(#logo-gradient)"
          />
          <path
            d="M12 13H17C20.866 13 24 16.134 24 20C24 23.866 20.866 27 17 27H12V13Z"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <text
            x="26"
            y="24"
            fill="white"
            fontSize="14"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            4
          </text>
          <defs>
            <linearGradient
              id="logo-gradient"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary to-secondary opacity-50" />
      </div>
      <span className="text-lg font-bold tracking-tight">
        <span className="text-text">DEV </span>
        <span className="text-gradient">4</span>
        <span className="text-text"> OURSELVES</span>
      </span>
    </div>
  );
}
