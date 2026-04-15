"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  {
    text: "Du kümmerst dich um einen Angehörigen und weißt nicht, wo du anfangen sollst.",
  },
  {
    text: "Du bist selbst betroffen und möchtest den Antrag richtig stellen.",
  },
  {
    text: "Du möchtest keine Leistungen verpassen, die dir zustehen.",
  },
  {
    text: "Du willst dich besser auf die Begutachtung vorbereiten.",
  },
  {
    text: "Du wünschst dir Erklärungen in verständlicher Sprache — ohne Amtsdeutsch.",
  },
];

export function Audience() {
  const ref = useScrollReveal();

  return (
    <section className="bg-background px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="reveal">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Für wen ist die Pflegeberatung gedacht?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Für alle, die sich im Pflegeprozess mehr Orientierung wünschen —
            für Angehörige und Betroffene.
          </p>
        </div>

        <ul className="mt-10 space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className={`reveal reveal-delay-${i + 1} flex items-start gap-3 rounded-xl bg-card/60 px-4 py-3 shadow-sm border border-border/50`}
            >
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-base leading-relaxed text-foreground/90">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
