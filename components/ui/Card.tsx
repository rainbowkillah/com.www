import type { ReactNode } from "react";

type CardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  media?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function Card({
  eyebrow,
  title,
  body,
  media,
  action,
  className = "",
}: CardProps) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border border-royalty-4/30 bg-white p-6 shadow-sm ${className}`.trim()}
    >
      {media}
      {eyebrow ? (
        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-royalty-2">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="font-headline text-h3 text-[#0a0a0a]">{title}</h3>
      <p className="font-body text-body leading-relaxed text-[#0a0a0a]/80">
        {body}
      </p>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
