"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    question: "Muss ich mich anmelden?",
    answer:
      "Nein. Du öffnest einfach WhatsApp, Telegram oder Signal und schreibst los — ohne Registrierung, ohne E-Mail-Adresse, ohne Passwort.",
  },
  {
    question: "Kann ich auch für Angehörige fragen?",
    answer:
      "Ja. Viele Menschen nutzen unsere Beratung, um sich für ihre Eltern, Großeltern oder andere Angehörige zu informieren und den Prozess gemeinsam vorzubereiten.",
  },
  {
    question: "Kann ich auch Sprachnachrichten schicken?",
    answer:
      "Ja. Du kannst deine Situation auch einfach per Sprachnachricht schildern — unsere Beratung versteht dich.",
  },
  {
    question: "Ist das ein Ersatz für die Pflegekasse oder den Gutachter?",
    answer:
      "Nein. Unsere Beratung ersetzt keine offizielle Stelle. Wir helfen dir, dich besser vorzubereiten, den Prozess zu verstehen und informierte Entscheidungen zu treffen. Die offizielle Begutachtung und Entscheidung liegt weiterhin bei der Pflegekasse bzw. dem Medizinischen Dienst.",
  },
  {
    question: "Kostet das etwas?",
    answer:
      "Nein, die Beratung ist komplett kostenlos.",
  },
  {
    question: "Wer steckt dahinter?",
    answer:
      "Die Pflegeberatung wird von einem kleinen Team entwickelt, das Menschen im Pflegeprozess besser unterstützen möchte — mit verständlicher Sprache und einem einfachen Zugang über die Apps, die man sowieso nutzt.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span className={`text-base font-medium pr-4 ${open ? "text-primary" : "text-foreground"}`}>
          {question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div>
          <p className="pb-5 text-base leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const ref = useScrollReveal();

  return (
    <section className="bg-section-alt px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="reveal">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mt-8">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
