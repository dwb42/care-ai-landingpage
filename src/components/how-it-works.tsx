"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "1",
    title: "Messenger öffnen",
    description:
      "Wähle WhatsApp, Telegram oder Signal — die App, die du sowieso nutzt. Keine Anmeldung, kein Download.",
  },
  {
    number: "2",
    title: "Situation schildern",
    description:
      "Beschreibe in deinen eigenen Worten, worum es geht — per Text oder Sprachnachricht. Kein Formular, kein Amtsdeutsch.",
  },
  {
    number: "3",
    title: "Schritt für Schritt begleitet werden",
    description:
      "Unsere Beratung führt dich durch den Prozess, erklärt verständlich und hilft dir, die nächsten Schritte zu planen.",
  },
];

export function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="bg-background px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="reveal">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            So funktioniert es
          </h2>
          <p className="mt-4 text-lg text-muted">
            Drei einfache Schritte — kein Papierkram, keine Wartezeit.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Vertical connection line */}
          <div
            className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-primary/5 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative flex items-start gap-5`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white shadow-sm shadow-primary/20">
                  {step.number}
                </div>
                <div className="rounded-xl bg-card/80 border border-border/50 p-4 shadow-sm flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
