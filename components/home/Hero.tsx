import { Button } from "@/components/ui/Button";
import { socialHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-royalty-1">
      <img
        src="/brand/profile-dark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 max-w-xl object-cover opacity-20 md:block"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20 sm:py-28">
        <p className="font-ui text-sm font-semibold uppercase tracking-wide text-royalty-4">
          DC Native · Systems Engineer · Gamer · Vlogger · LGBTQ+ Content Creator
        </p>
        <h1 className="max-w-2xl font-headline text-h1 leading-tight text-white">
          Bold rainbow brand for live entertainment and creative content.
        </h1>
        <p className="max-w-xl font-editorial text-h3 text-white/90">
          Built for creators. Powered by community.
        </p>
        <p className="max-w-xl font-body text-body leading-relaxed text-white/80">
          We create space for authentic self-expression and meaningful
          connection. Every format is welcome: stream clips, edits,
          highlights, and experiments.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            href={socialHref("Twitch")}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Watch on Twitch
          </Button>
          <Button
            href={socialHref("YouTube")}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
}
