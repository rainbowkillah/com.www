import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { socialHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Members",
};

export default function MembersPage() {
  return (
    <ComingSoon
      title="Members (18+) is in the works."
      description="A dedicated space for the community — accounts, perks, and more — is in development. Follow along so you don't miss the launch."
      cta={{ label: "Watch on Twitch", href: socialHref("Twitch") }}
    />
  );
}
