"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function WhyDifferent() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-section-alt px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="reveal">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Warum das anders ist
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="reveal reveal-delay-1 rounded-2xl border border-border bg-card p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Das kennt man
            </p>
            <div className="space-y-3 text-base leading-relaxed text-muted">
              <p>
                Lange Texte voller Fachbegriffe. Unübersichtliche Formulare.
                Widersprüchliche Infos im Netz. Beratungsstellen mit wochenlanger
                Wartezeit.
              </p>
              <p>
                Man weiß nicht, wo man anfangen soll — und gibt im schlimmsten
                Fall auf.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-2 rounded-2xl border border-primary/20 bg-primary-lighter p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Unsere Pflegeberatung
            </p>
            <div className="space-y-3 text-base leading-relaxed text-foreground/80">
              <p>
                Du beschreibst deine Situation in deinen eigenen Worten — per
                Text oder Sprachnachricht, direkt über deinen Messenger.
              </p>
              <p>
                Die Beratung stellt die richtigen Fragen, erklärt verständlich
                und begleitet dich Schritt für Schritt. Rund um die Uhr, ohne
                Wartezeit.
              </p>
            </div>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-6 text-center text-base text-muted">
          Kein Formulardschungel. Kein Amtsdeutsch. Kein Rätselraten, was als
          Nächstes kommt.
        </p>
      </div>
    </section>
  );
}
