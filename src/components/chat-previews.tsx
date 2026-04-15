"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/* ------------------------------------------------------------------ */
/*  Shared chat bubble primitives                                      */
/* ------------------------------------------------------------------ */

function UserBubble({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5"
        style={{ backgroundColor: accent }}
      >
        {children}
      </div>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-white px-4 py-2.5 shadow-sm">
        {children}
      </div>
    </div>
  );
}

function AudioBubble({ accent, duration }: { accent: string; duration: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="flex items-center gap-3 rounded-2xl rounded-br-md px-4 py-3"
        style={{ backgroundColor: accent }}
      >
        <svg className="h-5 w-5 shrink-0 text-foreground/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
        {/* Waveform bars */}
        <div className="flex items-center gap-[3px]">
          {[3, 5, 8, 4, 7, 5, 9, 6, 4, 7, 3, 5, 8, 6, 4, 7, 5, 3].map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-foreground/30"
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>
        <span className="ml-1 text-xs text-foreground/50">{duration}</span>
      </div>
    </div>
  );
}

function ImageBubble({ accent, label }: { accent: string; label: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[75%] overflow-hidden rounded-2xl rounded-br-md"
        style={{ backgroundColor: accent }}
      >
        {/* Simulated image */}
        <div className="flex h-28 items-center justify-center bg-foreground/[0.06]">
          <div className="flex flex-col items-center gap-1.5 text-foreground/30">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
            <span className="text-xs">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PdfBubble({ filename }: { filename: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
            <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{filename}</p>
            <p className="text-xs text-muted">PDF · Zum Herunterladen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReminderBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-amber-200 bg-amber-50 px-4 py-2.5 shadow-sm">
        <div className="flex items-start gap-2">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <p className="text-sm leading-relaxed text-amber-900">{children}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Chat header                                                        */
/* ------------------------------------------------------------------ */

function ChatHeader({
  name,
  color,
  icon,
}: {
  name: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-t-2xl px-4 py-3"
      style={{ backgroundColor: color }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-white">Pflegeberatung</p>
        <p className="text-xs text-white/70">{name}</p>
      </div>
      <div className="ml-auto h-2 w-2 rounded-full bg-emerald-300" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Three chat previews                                                */
/* ------------------------------------------------------------------ */

const telegramColor = "#26A5E4";
const telegramAccent = "rgba(38,165,228,0.12)";

function TelegramPreview() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5">
      <ChatHeader
        name="Telegram"
        color={telegramColor}
        icon={
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        }
      />
      <div className="flex flex-col gap-3 p-4">
        <AudioBubble accent={telegramAccent} duration="0:42" />
        <BotBubble>
          <p className="text-sm leading-relaxed text-foreground">
            Danke für deine Nachricht. Ich höre heraus, dass dein Vater im Alltag
            zunehmend Unterstützung braucht. Lass uns gemeinsam schauen, welche
            Leistungen ihm zustehen. Wie sieht es bei ihm mit der Körperpflege
            und dem Anziehen aus?
          </p>
        </BotBubble>
        <UserBubble accent={telegramAccent}>
          <p className="text-sm leading-relaxed text-foreground">
            Duschen schafft er kaum noch alleine, beim Anziehen braucht er auch
            Hilfe. Kochen geht gar nicht mehr.
          </p>
        </UserBubble>
        <BotBubble>
          <p className="text-sm leading-relaxed text-foreground">
            Verstanden. Basierend auf dem, was du mir erzählt hast, habe ich
            den Antrag für dich vorbereitet:
          </p>
        </BotBubble>
        <PdfBubble filename="Antrag_Pflegeleistungen.pdf" />
      </div>
      <div className="border-t border-border px-4 py-2 text-center">
        <p className="text-xs font-medium text-muted">Erstberatung & Antrag</p>
      </div>
    </div>
  );
}

const whatsappColor = "#25D366";
const whatsappAccent = "rgba(37,211,102,0.12)";

function WhatsAppPreview() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5">
      <ChatHeader
        name="WhatsApp"
        color={whatsappColor}
        icon={
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        }
      />
      <div className="flex flex-col gap-3 p-4">
        <ReminderBubble>
          Erinnerung: Morgen um 14:00 Uhr kommt der Gutachter vom Medizinischen
          Dienst. Ich habe dir eine Checkliste vorbereitet — soll ich sie
          nochmal durchgehen?
        </ReminderBubble>
        <UserBubble accent={whatsappAccent}>
          <p className="text-sm leading-relaxed text-foreground">
            Ja bitte! Worauf muss ich besonders achten?
          </p>
        </UserBubble>
        <BotBubble>
          <p className="text-sm leading-relaxed text-foreground">
            Wichtig: Beschreibe den Alltag an einem <strong>schlechten Tag</strong>,
            nicht am besten. Zeige ruhig, wobei Hilfe nötig ist. Hab das
            Pflegetagebuch griffbereit und lass deinen Vater selbst erzählen,
            wie es ihm geht. Ich bin auch während des Termins hier, falls Fragen
            aufkommen.
          </p>
        </BotBubble>
      </div>
      <div className="border-t border-border px-4 py-2 text-center">
        <p className="text-xs font-medium text-muted">Begutachtung vorbereiten</p>
      </div>
    </div>
  );
}

const signalColor = "#3A76F0";
const signalAccent = "rgba(58,118,240,0.12)";

function SignalPreview() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5">
      <ChatHeader
        name="Signal"
        color={signalColor}
        icon={
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6A8.4 8.4 0 0 1 20.4 12 8.4 8.4 0 0 1 12 20.4 8.4 8.4 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 2.4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1.2 2.4h2.4a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-2.4a.6.6 0 0 1-.6-.6V9a.6.6 0 0 1 .6-.6z" />
          </svg>
        }
      />
      <div className="flex flex-col gap-3 p-4">
        <ImageBubble accent={signalAccent} label="Bescheid_Pflegekasse.jpg" />
        <UserBubble accent={signalAccent}>
          <p className="text-sm leading-relaxed text-foreground">
            Das ist der Bescheid. Nur Pflegegrad 1 — das kann doch nicht stimmen?
          </p>
        </UserBubble>
        <BotBubble>
          <p className="text-sm leading-relaxed text-foreground">
            Ich verstehe deine Enttäuschung. Nach dem, was du mir über den Alltag
            deiner Frau erzählt hast, sehe ich gute Gründe für einen Widerspruch.
            Die Frist beträgt 4 Wochen. Ich habe eine Vorlage für dich vorbereitet:
          </p>
        </BotBubble>
        <PdfBubble filename="Widerspruch_Pflegegrad.pdf" />
      </div>
      <div className="border-t border-border px-4 py-2 text-center">
        <p className="text-xs font-medium text-muted">Widerspruch einlegen</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Carousel for mobile                                                */
/* ------------------------------------------------------------------ */

function MobileCarousel() {
  const [active, setActive] = useState(0);
  const previews = [
    { component: <TelegramPreview />, label: "Telegram" },
    { component: <WhatsAppPreview />, label: "WhatsApp" },
    { component: <SignalPreview />, label: "Signal" },
  ];

  return (
    <div className="sm:hidden">
      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-2">
        {previews.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              active === i
                ? "bg-primary text-white"
                : "bg-card border border-border text-muted hover:text-foreground"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {/* Active preview */}
      <div>{previews[active].component}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function ChatPreviews() {
  const ref = useScrollReveal();

  return (
    <section className="bg-section-alt px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            So sieht das aus
          </h2>
          <p className="mt-4 text-lg text-muted">
            Echte Beratung — direkt in der App, die du sowieso nutzt. Per Text,
            Sprachnachricht oder Foto.
          </p>
        </div>

        {/* Desktop: side by side */}
        <div className="reveal reveal-delay-1 mt-12 hidden gap-6 sm:grid sm:grid-cols-3">
          <TelegramPreview />
          <WhatsAppPreview />
          <SignalPreview />
        </div>

        {/* Mobile: carousel */}
        <div className="reveal reveal-delay-1 mt-10">
          <MobileCarousel />
        </div>
      </div>
    </section>
  );
}
