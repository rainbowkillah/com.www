import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-config";

const SOCIAL_ICON_PATHS: Record<string, string> = {
  Twitch:
    "M4 2 2 7v13h6v2h4l2-2h4l4-4V2H4zm18 12-3 3h-4l-2 2h-3v-2H5V4h17v10zM9 6h2v6H9V6zm5 0h2v6h-2V6z",
  YouTube:
    "M21.6 7.2s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.9 3.7 12 3.7 12 3.7h0s-3.9 0-6.7.3c-.4 0-1.3.1-2.1 1-.6.7-.8 2.2-.8 2.2S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.2c.8.9 1.8.9 2.3 1 1.7.2 7 .3 7 .3s3.9 0 6.7-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM10 14.5v-6l5.2 3-5.2 3z",
  TikTok:
    "M14 3h2.5a5 5 0 0 0 4.5 4.5V10a7.4 7.4 0 0 1-4.5-1.5V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v2.6a3.4 3.4 0 1 0 2.4 3.2V3z",
  "Twitter/X":
    "M18.9 3h3l-6.6 7.5L23 21h-6.1l-4.8-6.3L6.6 21H3.6l7-8L2 3h6.2l4.4 5.8L18.9 3zm-1 16.2h1.7L7.2 4.7H5.4L17.9 19.2z",
  GitHub:
    "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.5-1.3.1-2.7 0 0 .9-.3 2.9 1a10 10 0 0 1 5.2 0c2-1.3 2.9-1 2.9-1 .6 1.4.2 2.5.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-royalty-1">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/brand/glyph-rs.svg"
              alt="RainbowSmoke"
              className="h-8 w-8"
            />
            <span className="font-headline text-base font-bold text-white">
              RAINBOWSMOKE
            </span>
          </a>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-white/80 transition-colors duration-150 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white"
            >
              <span className="sr-only">{link.platform}</span>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={SOCIAL_ICON_PATHS[link.platform]} />
              </svg>
            </a>
          ))}
        </div>

        <p className="font-body text-caption text-white/60">
          © {year} Mr. RainbowSmoke LLC
        </p>
      </div>
    </footer>
  );
}
