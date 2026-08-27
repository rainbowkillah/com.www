import { Button } from "@/components/ui/Button";

type ComingSoonProps = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export function ComingSoon({ title, description, cta }: ComingSoonProps) {
  return (
    <section className="bg-royalty-5">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-24 text-center">
        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-royalty-2">
          Coming soon
        </p>
        <h1 className="font-headline text-h1 text-[#0a0a0a]">{title}</h1>
        <p className="font-body text-body leading-relaxed text-[#0a0a0a]/80">
          {description}
        </p>
        {cta ? (
          <Button href={cta.href} variant="primary" target="_blank" rel="noreferrer">
            {cta.label}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
