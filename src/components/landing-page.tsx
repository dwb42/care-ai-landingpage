"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "4915757131669";
const WHATSAPP_PRE_TEXT = "Hallo%2C%20ich%20brauche%20Hilfe%20beim%20Pflegegeld.";
const MARKETING_OS_URL = process.env.NEXT_PUBLIC_MARKETING_OS_URL || "http://localhost:4000";
const PRODUCT_ID = "prd_pflegemax_core";

function generateClickId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const result: Record<string, string | null> = {};
  for (const key of keys) {
    result[key] = params.get(key) || null;
  }
  return result;
}

function sendEvent(event: Record<string, unknown>) {
  console.log("[LP Event]", JSON.stringify(event, null, 2));

  const outcomePayload = {
    productId: PRODUCT_ID,
    type: event.event as string,
    occurredAt: event.timestamp as string,
    sessionRef: event.pm_cid as string,
    attribution: {
      gclid: event.gclid || null,
      utm_source: event.utm_source || null,
      utm_medium: event.utm_medium || null,
      utm_campaign: event.utm_campaign || null,
      utm_content: event.utm_content || null,
      utm_term: event.utm_term || null,
      lp_variant: event.lp_variant || null,
    },
    payload: {
      button_position: event.button_position || null,
      time_on_page_ms: typeof event.time_on_page_ms === "number" ? event.time_on_page_ms : null,
    },
  };

  fetch(`${MARKETING_OS_URL}/outcomes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outcomePayload),
  }).catch((err) => console.warn("[LP Event] Failed to send:", err.message));
}

const FAQ_ITEMS = [
  {
    q: "Ist das wirklich kostenlos?",
    a: "Ja. Dir entstehen keine Kosten, weder für den Chat noch für den vorbereiteten Antrag. Kein Abo, keine versteckten Gebühren.",
  },
  {
    q: "Wollt ihr mir etwas verkaufen?",
    a: "Nein. Wir vermitteln dich an niemanden, verkaufen keine Versicherungen und empfehlen keine Pflegedienste gegen Provision. Das Angebot ist für dich kostenlos. Punkt.",
  },
  {
    q: "Wie schnell antwortet ihr?",
    a: "Innerhalb weniger Sekunden. Die Antworten kommen von unserem KI-Pflegeberater. Rund um die Uhr, sofort, ohne Wartezeit. Du musst nicht live am Gerät bleiben.",
  },
  {
    q: "Was mache ich mit dem fertigen Antrag?",
    a: "Wir helfen dir, alle nötigen Angaben und Unterlagen zu sammeln. Am Ende hast du einen vollständig vorbereiteten Antrag, den du bei deiner Pflegekasse einreichst. Wir sagen dir Schritt für Schritt, wie und wohin.",
  },
  {
    q: "Was macht ihr mit meinen Daten?",
    a: "Wir nutzen deine Nachrichten ausschließlich, um dich zu beraten. Wir geben sie nicht an Dritte weiter. Die vollständigen Details stehen in unserer Datenschutzerklärung. Wenn du nicht einverstanden bist, kannst du den Chat jederzeit beenden.",
  },
];

const PAIN_BULLETS = [
  {
    headline: "Pflegegeld beantragen.",
    body: "Für dich oder einen Angehörigen, und du weißt nicht, wo du anfangen sollst.",
  },
  {
    headline: "Angst, etwas falsch zu machen.",
    body: "Du hast gehört, dass viele weniger bekommen, als ihnen zusteht. Nur weil im Antrag das Falsche steht.",
  },
  {
    headline: "Jemand, der mit dir durchgeht.",
    body: "Statt allein durch fünfzehn Behörden-Seiten zu googeln.",
  },
];

const STEPS = [
  {
    headline: "Du schreibst auf WhatsApp.",
    body: "Ein Klick öffnet WhatsApp. Sag in deinen eigenen Worten, was los ist. Tippen, Sprachnachricht oder ein Foto vom Brief der Pflegekasse, wie du magst.",
  },
  {
    headline: "Der Pflegeberater fragt nach.",
    body: "Er hört zu und stellt die richtigen Fragen, bis er ein klares Bild von eurer Situation hat. Du musst nichts vorbereiten.",
  },
  {
    headline: "Du bekommst, was die Pflegekasse will.",
    body: "Am Ende hast du die Unterlagen für den Pflegegrad-Antrag und weißt genau, wohin damit. Kein Login, keine Installation, kein Formular zum Selbst-Ausfüllen.",
  },
];

const TRUST_ITEMS = [
  {
    icon: "no-handover",
    headline: "Wir verkaufen dir nichts.",
    body: "Wir vermitteln dich an niemanden gegen Provision, verkaufen keine Versicherungen und schicken dir keine Werbe-Mails. Das Angebot ist für dich kostenlos. Sonst nichts.",
  },
  {
    icon: "pause",
    headline: "Du entscheidest, wann Schluss ist.",
    body: "Du kannst den Chat jederzeit pausieren oder ganz beenden. Wir machen dir keinen Druck zurückzukommen.",
  },
  {
    icon: "bolt",
    headline: "Antwort in Sekunden, Tag und Nacht.",
    body: "Hinter dem Chat steht ein KI-Pflegeberater. Genau deshalb bekommst du sofort eine Antwort, auch nachts und am Wochenende. Ohne Rückrufsorge, ohne Verkaufsdruck, ohne Wartezeit.",
  },
];

function TrustIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 text-teal shrink-0";
  switch (type) {
    case "check":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    case "no-handover":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636l12.728 12.728" />
        </svg>
      );
    case "pause":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CtaButton({ position, href, onClick }: { position: "hero" | "mid" | "bottom"; href: string; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
      data-position={position}
    >
      <WhatsAppIcon />
      Jetzt auf WhatsApp schreiben
    </a>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open, answer]);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground"
      >
        <span>{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div ref={contentRef}>
          <p className="pb-5 text-base leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const clickIdRef = useRef<string>("");
  const loadedAtRef = useRef<number>(0);
  const [waLink, setWaLink] = useState("#");

  useEffect(() => {
    loadedAtRef.current = Date.now();

    const cid = generateClickId();
    clickIdRef.current = cid;

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PRE_TEXT}`;
    setWaLink(link);

    const utm = getUtmParams();
    sendEvent({
      event: "lp_visit",
      pm_cid: cid,
      ...utm,
      lp_variant: "whatsapp-only-v03",
      timestamp: new Date().toISOString(),
    });
  }, []);

  function handleCtaClick(position: "hero" | "mid" | "bottom") {
    sendEvent({
      event: "cta_click",
      pm_cid: clickIdRef.current,
      button_position: position,
      time_on_page_ms: loadedAtRef.current > 0 ? Date.now() - loadedAtRef.current : null,
      timestamp: new Date().toISOString(),
    });
  }

  return (
    <main className="mx-auto max-w-[640px] px-6">
      {/* [1] Hero */}
      <section className="flex min-h-[calc(100dvh-2rem)] flex-col justify-center py-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] leading-tight text-teal">
          <span className="whitespace-nowrap">PFLEGEGRAD</span> · <span className="whitespace-nowrap">PFLEGEGELD</span> · <span className="whitespace-nowrap">PFLEGELEISTUNGEN</span>
        </p>
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
          Brauchst du Hilfe beim Pflegegeld-Antrag?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Schreib uns per WhatsApp. Wir führen dich durch den gesamten Prozess, von der ersten Frage bis zum Bescheid.
        </p>
        <div className="mt-8">
          <CtaButton position="hero" href={waLink} onClick={() => handleCtaClick("hero")} />
        </div>
        <div className="mt-4 text-sm text-muted">
          <p>Rund um die Uhr verfügbar</p>
          <p>Komplett kostenlos</p>
        </div>
      </section>

      {/* [2] Ist das was für mich? */}
      <section className="py-16">
        <h2 className="text-xl font-bold text-foreground">Ist das was für mich?</h2>

        {/* [2.1] Pain-Bullets */}
        <ul className="mt-8 space-y-5">
          {PAIN_BULLETS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <TrustIcon type="check" />
              <span className="text-base leading-relaxed text-foreground">
                <span className="font-semibold">{item.headline}</span>{" "}
                <span className="text-muted">{item.body}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* [2.2] Lead-In zur Mechanik */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted">So läuft es ab:</p>
        </div>

        {/* [2.3] How-it-works-Steps */}
        <ol className="mt-6 space-y-6">
          {STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div className="pt-1">
                <p className="text-base font-semibold text-foreground">{step.headline}</p>
                <p className="mt-1 text-base leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* [2.4] Inline-CTA */}
        <div className="mt-10 flex flex-col items-center">
          <CtaButton position="mid" href={waLink} onClick={() => handleCtaClick("mid")} />
          <p className="mt-3 text-sm text-muted">Ein Klick. Kein Formular.</p>
        </div>

      </section>

      {/* [3] Trust-Block */}
      <section className="rounded-2xl bg-section-alt px-6 py-10">
        <h2 className="text-xl font-bold text-foreground">Was wir dir versprechen.</h2>
        <ul className="mt-6 space-y-6">
          {TRUST_ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <TrustIcon type={item.icon} />
              <div>
                <p className="text-base font-semibold text-foreground">{item.headline}</p>
                <p className="mt-1 text-base leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* [4] Mini-FAQ */}
      <section className="py-16">
        <h2 className="text-xl font-bold text-foreground">Häufige Fragen</h2>
        <div className="mt-6">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* [5] CTA-Wiederholung */}
      <section className="py-16 text-center">
        <CtaButton position="bottom" href={waLink} onClick={() => handleCtaClick("bottom")} />
        <p className="mt-4 text-sm text-muted">
          Ein Klick. Kein Formular. Du schreibst uns in deinen eigenen Worten.
        </p>
      </section>

      {/* [6] Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Ein Angebot der B42 GmbH · <Link href="/impressum" scroll={true} className="underline hover:text-foreground">Impressum</Link> · <Link href="/datenschutz" scroll={true} className="underline hover:text-foreground">Datenschutz</Link>
      </footer>
    </main>
  );
}
