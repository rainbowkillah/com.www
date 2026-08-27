import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { socialHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact is on the way."
      description="A proper contact form is coming. For now, the fastest way to reach us is on socials."
      cta={{ label: "Message on Twitter/X", href: socialHref("Twitter/X") }}
    />
  );
}
