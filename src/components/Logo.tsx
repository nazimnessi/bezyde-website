import logoImg from "@/assets/bezyde-logo.png";
import wordmarkAsset from "@/assets/bezyde-wordmark.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Bezyde home">
      <img
        src={logoImg}
        alt="Bezyde logo — a companion walking beside an elderly person"
        className="h-10 w-auto md:h-11"
        loading="eager"
      />
      <img
        src={wordmarkAsset.url}
        alt="Bezyde"
        className="h-4 w-auto md:h-[1.15rem]"
        loading="eager"
      />
    </a>
  );
}
