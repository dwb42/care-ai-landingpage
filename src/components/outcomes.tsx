"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const outcomes = [
  "Weniger Zeitverlust im Formulardschungel",
  "Bessere Vorbereitung auf die Begutachtung",
  "Mehr Überblick über Pflegeleistungen und Pflegegeld",
  "Weniger typische Fehler im Antragsprozess",
  "Bessere Grundlage für die nächsten Schritte",
];

export function Outcomes() {
  const ref = useScrollReveal();

  return (
    <section className="bg-section-alt px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="reveal">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Was dir das konkret bringt
          </h2>
          <p className="mt-4 text-lg text-muted">
            Unsere Beratung ersetzt keine Pflegekasse und keinen Gutachter — aber
            sie hilft dir, besser vorbereitet in den Prozess zu gehen.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-3 rounded-xl bg-card/80 border border-border/50 px-5 py-3.5 shadow-sm`}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-base leading-relaxed text-foreground/90">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
