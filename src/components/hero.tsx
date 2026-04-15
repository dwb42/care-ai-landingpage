"use client";

import { useState } from "react";
import { LegalModal } from "./legal-modal";

const TELEGRAM_URL = "https://t.me/pflegeberatung_bot";
const WHATSAPP_URL = "#whatsapp"; // TODO: WhatsApp Business link
const SIGNAL_URL = "#signal"; // TODO: Signal bot link

export function Hero() {
  const [legalPage, setLegalPage] = useState<string | null>(null);

  return (
    <section
      className="relative"
      style={{ background: "linear-gradient(to bottom, #FAFAF8 0%, #F2FAF8 70%, #EBF5F3 100%)" }}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute top-1/4 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-highlight/30 blur-3xl" />
      </div>

      {/* Main content — centered in first 100dvh */}
      <div className="relative flex min-h-dvh items-center justify-center px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold tracking-widest text-primary uppercase">
            <span>Pflegegrad</span>
            <span className="hidden sm:inline text-primary/30" aria-hidden="true">·</span>
            <span>Pflegegeld</span>
            <span className="hidden sm:inline text-primary/30" aria-hidden="true">·</span>
            <span>Pflegeleistungen</span>
          </div>

          <h1 className="font-bold leading-tight tracking-tight text-foreground [font-size:clamp(2rem,6vw,3.75rem)] [text-wrap:balance]">
            Brauchst du Hilfe beim{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Pflegegeld-Antrag</span>
              <span
                className="absolute -inset-x-1 bottom-1 top-[60%] -skew-x-1 rounded bg-highlight/60"
                aria-hidden="true"
              />
            </span>
            ?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Schreib uns per WhatsApp, Telegram oder Signal. Wir führen
            dich durch den gesamten Prozess — von der ersten Frage bis zum
            Bescheid.
          </p>

          {/* Messenger CTA buttons */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:brightness-110 hover:shadow-lg sm:h-13 sm:gap-2.5 sm:rounded-2xl sm:px-6"
              >
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={TELEGRAM_URL}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#26A5E4] px-4 text-sm font-semibold text-white shadow-md shadow-[#26A5E4]/20 transition-all hover:brightness-110 hover:shadow-lg sm:h-13 sm:gap-2.5 sm:rounded-2xl sm:px-6"
              >
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
              <a
                href={SIGNAL_URL}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#3A76F0] px-4 text-sm font-semibold text-white shadow-md shadow-[#3A76F0]/20 transition-all hover:brightness-110 hover:shadow-lg sm:h-13 sm:gap-2.5 sm:rounded-2xl sm:px-6"
              >
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6A8.4 8.4 0 0 1 20.4 12 8.4 8.4 0 0 1 12 20.4 8.4 8.4 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 2.4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1.2 2.4h2.4a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-2.4a.6.6 0 0 1-.6-.6V9a.6.6 0 0 1 .6-.6z" />
                </svg>
                Signal
              </a>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3.5 py-1.5 text-xs font-medium text-primary">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rund um die Uhr verfügbar
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3.5 py-1.5 text-xs font-medium text-primary">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Komplett kostenlos
            </span>
          </div>
        </div>
      </div>

      {/* Legal links — below the fold */}
      <nav className="relative flex items-center justify-center gap-6 py-10 text-sm text-muted/50">
        <button
          onClick={() => setLegalPage("impressum")}
          className="transition-colors hover:text-muted"
        >
          Impressum
        </button>
        <button
          onClick={() => setLegalPage("datenschutz")}
          className="transition-colors hover:text-muted"
        >
          Datenschutz
        </button>
      </nav>

      {/* Legal modal */}
      {legalPage && (
        <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
      )}
    </section>
  );
}
