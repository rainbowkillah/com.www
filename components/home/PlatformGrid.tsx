import { PlatformCard } from "@/components/home/PlatformCard";
import { socialHref } from "@/lib/site-config";

const PLATFORMS = [
  {
    platform: "Twitch",
    title: "Watch live",
    body: "Gaming streams and real-time community energy, week in and week out.",
    cta: { label: "Watch on Twitch", href: socialHref("Twitch") },
  },
  {
    platform: "YouTube",
    title: "Systems & stories",
    body: "Tech tutorials, reviews, and vlogs for the systems-engineer side of the brand.",
    cta: { label: "Join on YouTube", href: socialHref("YouTube") },
  },
  {
    platform: "TikTok",
    title: "Quick hits",
    body: "Short-form clips and highlights for whenever you've got a minute.",
    cta: { label: "Explore on TikTok", href: socialHref("TikTok") },
  },
];

export function PlatformGrid() {
  return (
    <section className="bg-royalty-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-royalty-2">
          Watch & follow
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <PlatformCard key={platform.platform} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
