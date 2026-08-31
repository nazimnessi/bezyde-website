import logoImg from "@/assets/bezyde-logo.png";
import wordmarkAsset from "@/assets/bezyde-wordmark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-1 ${className}`} aria-label="Bezyde home">
      <img
        src={logoImg}
        alt="Bezyde logo — a companion walking beside an elderly person"
        className="h-10 w-auto md:h-11"
        loading="eager"
      />
      <img
        src={wordmarkAsset}
        alt="Bezyde"
        className="h-[1.75rem] w-auto md:h-[2.15rem]"
        loading="eager"
      />
    </a>
  );
}
