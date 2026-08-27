export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/members", label: "Members" },
] as const;

export const SOCIAL_LINKS = [
  { platform: "Twitch", href: "https://twitch.tv/rainbowsmoke_us" },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/channel/UC-a69hBxIpH-Stm6NDEYYiA",
  },
  { platform: "TikTok", href: "https://tiktok.com/@rainbowsmoke_us" },
  { platform: "Twitter/X", href: "https://x.com/Rainbowsmoke" },
  { platform: "GitHub", href: "https://github.com/rainbowkillah" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/dehavillandfox" },
] as const;

export type SocialPlatform = (typeof SOCIAL_LINKS)[number]["platform"];

export function socialHref(platform: SocialPlatform): string {
  return SOCIAL_LINKS.find((link) => link.platform === platform)!.href;
}
