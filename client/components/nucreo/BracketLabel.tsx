export function BracketLabel({ children, variant = "orange" }: { children: React.ReactNode; variant?: "orange" | "blue" }) {
  const gradientClass = variant === "blue"
    ? "from-[#2D1ACA] to-[#5D3EFF]"
    : "from-[#FF5E00] to-[#AD0000]";

  return (
    <div className="inline-flex items-center gap-2">
      <svg width="23" height="48" viewBox="0 0 46 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <defs>
          <linearGradient id={`bracket-open-${variant}`} x1="33.1071" y1="2.97616" x2="-29.4446" y2="69.1528" gradientUnits="userSpaceOnUse">
            <stop stopColor={variant === "blue" ? "#5D3EFF" : "#FF5E00"}/>
            <stop offset="1" stopColor={variant === "blue" ? "#2D1ACA" : "#AD0000"}/>
          </linearGradient>
        </defs>
        <path d="M45.8496 2.5H2.49997V92.4875H45.8496" stroke={`url(#bracket-open-${variant})`} strokeWidth="5"/>
      </svg>
      <span className={`text-sm uppercase tracking-wider font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
        {children}
      </span>
      <svg width="23" height="48" viewBox="0 0 46 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <defs>
          <linearGradient id={`bracket-close-${variant}`} x1="12.7426" y1="2.97616" x2="75.2942" y2="69.1528" gradientUnits="userSpaceOnUse">
            <stop stopColor={variant === "blue" ? "#5D3EFF" : "#FF5E00"}/>
            <stop offset="1" stopColor={variant === "blue" ? "#2D1ACA" : "#AD0000"}/>
          </linearGradient>
        </defs>
        <path d="M0 2.5H43.3496V92.4875H0" stroke={`url(#bracket-close-${variant})`} strokeWidth="5"/>
      </svg>
    </div>
  );
}
