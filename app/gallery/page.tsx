import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { socialHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <ComingSoon
      title="The Gallery is on the way."
      description="Stream clips, edits, highlights, and experiments are landing here soon. Follow along on TikTok for now."
      cta={{ label: "Follow on TikTok", href: socialHref("TikTok") }}
    />
  );
}
