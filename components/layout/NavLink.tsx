"use client";

import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export function NavLink({ href, label, className = "", onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`relative font-ui text-sm font-semibold text-white transition-colors duration-150 hover:text-royalty-4 ${
        isActive
          ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-royalty-4 after:content-['']"
          : ""
      } ${className}`.trim()}
    >
      {label}
    </a>
  );
}
