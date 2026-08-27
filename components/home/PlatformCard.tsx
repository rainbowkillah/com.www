import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type PlatformCardProps = {
  platform: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export function PlatformCard({ platform, title, body, cta }: PlatformCardProps) {
  return (
    <Card
      eyebrow={platform}
      title={title}
      body={body}
      action={
        <Button href={cta.href} variant="primary" target="_blank" rel="noreferrer">
          {cta.label}
        </Button>
      }
    />
  );
}
