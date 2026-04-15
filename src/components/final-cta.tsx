"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TELEGRAM_URL = "https://t.me/pflegeberatung_bot";
const WHATSAPP_URL = "#whatsapp"; // TODO: WhatsApp Business link
const SIGNAL_URL = "#signal"; // TODO: Signal bot link

export function FinalCta() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-28" ref={ref}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-light via-highlight/40 to-primary-lighter" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="reveal">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <svg
              className="h-7 w-7 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
            Starte die Beratung direkt über deinen Messenger — kostenlos,
            verständlich und ohne Formulardschungel.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:brightness-110 hover:shadow-lg sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={TELEGRAM_URL}
              className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#26A5E4] px-6 text-sm font-semibold text-white shadow-md shadow-[#26A5E4]/20 transition-all hover:brightness-110 hover:shadow-lg sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
            <a
              href={SIGNAL_URL}
              className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#3A76F0] px-6 text-sm font-semibold text-white shadow-md shadow-[#3A76F0]/20 transition-all hover:brightness-110 hover:shadow-lg sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6A8.4 8.4 0 0 1 20.4 12 8.4 8.4 0 0 1 12 20.4 8.4 8.4 0 0 1 3.6 12 8.4 8.4 0 0 1 12 3.6zm0 2.4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1.2 2.4h2.4a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-2.4a.6.6 0 0 1-.6-.6V9a.6.6 0 0 1 .6-.6z" />
              </svg>
              Signal
            </a>
          </div>

          <p className="mt-5 text-sm text-muted">
            Komplett kostenlos · Rund um die Uhr · Keine Anmeldung nötig
          </p>
        </div>
      </div>
    </section>
  );
}
