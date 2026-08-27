import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { socialHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About is on the way."
      description="We're building this page with the same care as everything else. Catch us live in the meantime."
      cta={{ label: "Watch on Twitch", href: socialHref("Twitch") }}
    />
  );
}
