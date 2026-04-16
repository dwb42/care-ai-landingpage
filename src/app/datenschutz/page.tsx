import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Digitale Pflegeberatung",
};

export default function Datenschutz() {
  return (
    <div className="bg-background px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Verantwortlicher
            </h2>
            <p className="mt-3">
              B42 GmbH
              <br />
              Am Born 6b
              <br />
              22765 Hamburg
              <br />
              E-Mail: dw@b42.io
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mt-3 text-muted">
              Wenn du unsere Website besuchst, werden automatisch technische
              Daten durch den Webserver erfasst (sog. Server-Logfiles). Dazu
              gehören: IP-Adresse, Browsertyp und -version, Betriebssystem,
              Referrer-URL, Zeitpunkt des Zugriffs. Diese Daten werden nicht
              mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              WhatsApp-Kommunikation
            </h2>
            <p className="mt-3 text-muted">
              Wenn du uns über WhatsApp kontaktierst, werden deine Nachrichten
              ausschließlich zur Bearbeitung deiner Anfrage verwendet. Wir
              geben deine Daten nicht an Dritte weiter. Du kannst den Chat
              jederzeit beenden und die Löschung deiner Daten verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Deine Rechte
            </h2>
            <p className="mt-3 text-muted">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung deiner personenbezogenen Daten.
              Du hast außerdem das Recht auf Datenübertragbarkeit und das
              Recht, dich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Kontakt
            </h2>
            <p className="mt-3 text-muted">
              Bei Fragen zum Datenschutz kannst du dich jederzeit an uns
              wenden: dw@b42.io
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
