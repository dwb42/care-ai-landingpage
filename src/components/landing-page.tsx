"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "49XXXXXXXXXXX";
const WHATSAPP_PRE_TEXT = "Hallo%2C%20ich%20suche%20Hilfe%20beim%20Pflegegeld.%20Kannst%20du%20mir%20helfen%3F";
// const MARKETING_OS_ENDPOINT = "https://example.com/events";

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
  // fetch(MARKETING_OS_ENDPOINT, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(event),
  // });
}

const FAQ_ITEMS = [
  {
    q: "Ist das wirklich kostenlos?",
    a: "Ja. Du kannst uns kostenlos auf WhatsApp schreiben und wir helfen dir, deinen Antrag vorzubereiten.",
  },
  {
    q: "Warum WhatsApp und keine Website mit Formular?",
    a: "Weil WhatsApp das ist, was die meisten Menschen ohnehin auf dem Handy haben. Kein Login, kein Passwort. Du schreibst uns wie einem Bekannten.",
  },
  {
    q: "Was macht ihr mit meinen Daten?",
    a: "Wir verwenden deine Nachrichten ausschließlich, um dich zu beraten. Details stehen in unserer Datenschutzerklärung. Wenn du nicht einverstanden bist, kannst du den Chat jederzeit beenden.",
  },
  {
    q: "Seid ihr eine Behörde oder eine Pflegekasse?",
    a: "Nein. Wir sind eine unabhängige virtuelle Pflegeberatung der B42 GmbH. Wir unterstützen dich dabei, deine Rechte gegenüber deiner Pflegekasse wahrzunehmen.",
  },
  {
    q: "Was, wenn ich mitten im Chat nicht weiterweiß?",
    a: "Kein Problem. Du kannst den Chat jederzeit pausieren und später fortsetzen. Wir bleiben dran.",
  },
];

const SERVICES = [
  {
    title: "Pflegegeld-Antrag stellen",
    text: "Wir erstellen mit dir einen fertigen Antrag als PDF — du musst ihn nur noch einreichen.",
  },
  {
    title: "Pflegegrad einschätzen",
    text: "In einem ruhigen Gespräch schätzen wir gemeinsam ein, welcher Pflegegrad realistisch ist — und wie du dich auf die Begutachtung vorbereitest.",
  },
  {
    title: "Leistungen kombinieren",
    text: "Wenn der Pflegegrad steht: Wir zeigen dir, welche Leistungen dir zustehen und wie du sie sinnvoll kombinierst.",
  },
  {
    title: "Überblick bekommen",
    text: "Du weißt noch nicht genau, was du brauchst? Wir geben dir einen ruhigen Überblick und den passenden ersten Schritt.",
  },
];

const TRUST_ITEMS = [
  { icon: "building", text: "Ein Angebot der B42 GmbH. Volles Impressum im Footer." },
  { icon: "shield", text: "Datenschutz nach DSGVO. Deine Nachrichten werden vertraulich behandelt, nicht weitergegeben." },
  { icon: "heart", text: "Komplett kostenlos. Kein Verkauf, keine versteckten Kosten." },
  { icon: "clock", text: "Rund um die Uhr erreichbar. Sofortige Antwort, auch nachts und am Wochenende." },
  { icon: "info", text: "Wir sind kein Ersatz für den Arzt oder den Medizinischen Dienst — aber wir helfen dir, dich darauf vorzubereiten." },
];

function TrustIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 text-teal shrink-0";
  switch (type) {
    case "building":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "info":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      );
    default:
      return null;
  }
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CtaButton({ position, href, onClick }: { position: "hero" | "bottom"; href: string; onClick: () => void }) {
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
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-foreground"
      >
        {question}
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-base leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const clickIdRef = useRef<string>("");
  const [waLink, setWaLink] = useState("#");

  useEffect(() => {
    const cid = generateClickId();
    clickIdRef.current = cid;

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PRE_TEXT}%0A%23ref-${cid}`;
    setWaLink(link);

    const utm = getUtmParams();
    sendEvent({
      event: "lp_visit",
      pm_cid: cid,
      ...utm,
      lp_variant: "whatsapp-only-v01",
      timestamp: new Date().toISOString(),
    });
  }, []);

  function handleCtaClick(position: "hero" | "bottom") {
    sendEvent({
      event: "cta_click",
      pm_cid: clickIdRef.current,
      button_position: position,
      timestamp: new Date().toISOString(),
    });
  }

  return (
    <main className="mx-auto max-w-[640px] px-6">
      {/* [1] Hero */}
      <section className="flex min-h-[calc(100dvh-2rem)] flex-col justify-center py-12">
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
          Hilfe beim Pflegegeld-Antrag — per Chat.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Deine virtuelle Pflegeberatung per WhatsApp. Schreib uns — wir begleiten dich Schritt für Schritt.
        </p>
        <div className="mt-8">
          <CtaButton position="hero" href={waLink} onClick={() => handleCtaClick("hero")} />
        </div>
        <p className="mt-4 text-sm text-muted">
          Rund um die Uhr. Sofortige Antwort. Kostenlos.
        </p>
      </section>

      {/* [2] Was wir konkret tun */}
      <section className="py-16">
        <h2 className="text-xl font-bold text-foreground">
          Vier konkrete Dinge, bei denen wir dich unterstützen:
        </h2>
        <div className="mt-8 space-y-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-sm font-bold text-teal">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [3] So läuft es ab */}
      <section className="py-16">
        <h2 className="text-xl font-bold text-foreground">So läuft es ab:</h2>
        <div className="mt-8 space-y-0">
          {[
            "Du klickst auf den Button und startest einen Chat mit uns auf WhatsApp.",
            "Wir stellen ein paar ruhige Fragen — du schreibst einfach in deinen eigenen Worten.",
            "Am Ende hast du das, was du brauchst: einen fertigen Antrag, eine Einschätzung oder einen klaren nächsten Schritt.",
          ].map((step, i) => (
            <div key={i} className="flex gap-4 py-4">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {i + 1}
                </span>
                {i < 2 && <div className="mt-2 h-full w-px bg-border" />}
              </div>
              <p className="pt-1 text-base leading-relaxed text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [4] Trust-Block */}
      <section className="rounded-2xl bg-section-alt px-6 py-10">
        <h2 className="text-xl font-bold text-foreground">Warum du uns vertrauen kannst:</h2>
        <ul className="mt-6 space-y-4">
          {TRUST_ITEMS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <TrustIcon type={item.icon} />
              <span className="text-base leading-relaxed text-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* [5] Mini-FAQ */}
      <section className="py-16">
        <h2 className="text-xl font-bold text-foreground">Häufige Fragen</h2>
        <div className="mt-6">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* [6] CTA-Wiederholung */}
      <section className="py-16 text-center">
        <CtaButton position="bottom" href={waLink} onClick={() => handleCtaClick("bottom")} />
        <p className="mt-4 text-sm text-muted">
          Ein Klick. Kein Formular. Du schreibst uns in deinen eigenen Worten.
        </p>
      </section>

      {/* [7] Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Ein Angebot der B42 GmbH · <Link href="/impressum" scroll={true} className="underline hover:text-foreground">Impressum</Link> · <Link href="/datenschutz" scroll={true} className="underline hover:text-foreground">Datenschutz</Link>
      </footer>
    </main>
  );
}
