import lockupImg from "@/assets/bezyde-lockup.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex items-center ${className}`} aria-label="Bezyde home">
      <img
        src={lockupImg}
        alt="Bezyde — Companion Care Services"
        className="h-9 w-auto md:h-11"
        loading="eager"
      />
    </a>
  );
}
