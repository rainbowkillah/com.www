import { NAV_LINKS } from "@/lib/site-config";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-royalty-1">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/brand/glyph-rs.svg"
            alt="RainbowSmoke"
            className="h-9 w-9"
          />
          <span className="font-headline text-lg font-bold text-white">
            RAINBOWSMOKE
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
