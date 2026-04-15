import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Digitale Pflegeberatung",
};

export default function Impressum() {
  return (
    <div className="bg-background px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-3">
              B42 GmbH
              <br />
              Am Born 6b
              <br />
              22765 Hamburg
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Vertreten durch
            </h2>
            <p className="mt-3">
              Geschäftsführer: Dietrich Wedegaertner
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Kontakt
            </h2>
            <p className="mt-3">
              E-Mail: dw@b42.io
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Handelsregister
            </h2>
            <p className="mt-3">
              Registergericht: Amtsgericht Hamburg
              <br />
              Registernummer: HRB 115840
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz: DE274973905
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              Dietrich Wedegaertner
              <br />
              Am Born 6b
              <br />
              22765 Hamburg
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Haftungsausschluss
            </h2>

            <h3 className="mt-4 font-medium text-foreground">
              Haftung für Inhalte
            </h3>
            <p className="mt-2 text-muted">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

          </section>
        </div>
      </div>
    </div>
  );
}
