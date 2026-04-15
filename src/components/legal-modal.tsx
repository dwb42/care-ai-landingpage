"use client";

import { useEffect, useRef } from "react";

function ImpressumContent() {
  return (
    <div className="space-y-8 text-base leading-relaxed text-foreground/90">
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Angaben gemäß § 5 TMG
        </h2>
        <p className="mt-3">
          B42 GmbH<br />
          Am Born 6b<br />
          22765 Hamburg<br />
          Deutschland
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Vertreten durch</h2>
        <p className="mt-3">Geschäftsführer: Dietrich Wedegaertner</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
        <p className="mt-3">E-Mail: dw@b42.io</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Handelsregister</h2>
        <p className="mt-3">
          Registergericht: Amtsgericht Hamburg<br />
          Registernummer: HRB 115840
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p className="mt-3">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          DE274973905
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
        </h2>
        <p className="mt-3">
          Dietrich Wedegaertner<br />
          Am Born 6b<br />
          22765 Hamburg
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Haftungsausschluss</h2>
        <h3 className="mt-4 font-medium text-foreground">Haftung für Inhalte</h3>
        <p className="mt-2 text-muted">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>
    </div>
  );
}

function DatenschutzContent() {
  return (
    <div className="space-y-8 text-base leading-relaxed text-foreground/90">
      <p className="text-sm text-muted">Stand: April 2026</p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">1. Verantwortlicher</h2>
        <p className="mt-3">
          B42 GmbH<br />
          Am Born 6b<br />
          22765 Hamburg<br />
          Deutschland
        </p>
        <p className="mt-2">Geschäftsführer: Dietrich Wedegaertner</p>
        <p className="mt-1">E-Mail: dw@b42.io</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2. Überblick</h2>
        <p className="mt-3 text-muted">
          Pflegelotse ist ein digitaler Pflegeberatungsdienst. Wir unterstützen
          pflegebedürftige Personen und ihre Angehörigen bei der Vorbereitung von
          Pflegeanträgen und der Information über Pflegeleistungen — per
          Messenger-Chat (Telegram, WhatsApp, Signal).
        </p>
        <p className="mt-2 text-muted">
          Diese Datenschutzerklärung informiert Sie darüber, welche
          personenbezogenen Daten wir im Rahmen unseres Dienstes verarbeiten, zu
          welchem Zweck und auf welcher Rechtsgrundlage.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          3. Welche Daten verarbeiten wir?
        </h2>

        <h3 className="mt-4 font-medium text-foreground">
          3.1 Stammdaten der pflegebedürftigen Person
        </h3>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Vor- und Nachname</li>
          <li>Geburtsdatum</li>
          <li>Anschrift (Straße, PLZ, Ort)</li>
          <li>Pflegekasse / Krankenkasse</li>
          <li>Versichertennummer (sofern angegeben)</li>
        </ul>

        <h3 className="mt-4 font-medium text-foreground">
          3.2 Gesundheitsbezogene Daten (besondere Kategorien, Art. 9 DSGVO)
        </h3>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Angaben zur Pflegesituation und zu Einschränkungen</li>
          <li>
            Informationen zu Mobilität, kognitiven Fähigkeiten, Selbstversorgung
            und weiteren Bereichen der Pflegebegutachtung
          </li>
          <li>Angaben zu bestehenden Pflegegraden oder laufenden Anträgen</li>
        </ul>

        <h3 className="mt-4 font-medium text-foreground">
          3.3 Daten der Kontakt- / Vertretungsperson
        </h3>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Vor- und Nachname</li>
          <li>Anschrift</li>
          <li>Beziehung zur pflegebedürftigen Person</li>
          <li>
            Art des Vertretungsnachweises (Vollmacht, Generalvollmacht,
            Betreuerausweis)
          </li>
        </ul>

        <h3 className="mt-4 font-medium text-foreground">
          3.4 Kommunikationsdaten
        </h3>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>
            Messenger-Kennung (Telegram User-ID, WhatsApp-Telefonnummer,
            Signal-Telefonnummer)
          </li>
          <li>Chat-Verlauf (Text- und Sprachnachrichten)</li>
          <li>Hochgeladene Dokumente (Fotos, PDFs)</li>
        </ul>

        <h3 className="mt-4 font-medium text-foreground">
          3.5 Technische Daten
        </h3>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Zeitpunkt der Nachrichten</li>
          <li>Messenger-Plattform und Sitzungskennung</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          4. Zwecke der Verarbeitung
        </h2>
        <p className="mt-3 text-muted">
          Wir verarbeiten Ihre Daten ausschließlich für folgende Zwecke:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>
            <strong className="text-foreground/90">Pflegeberatung:</strong>{" "}
            Durchführung des Beratungsgesprächs per Chat, Erfassung Ihrer
            Situation, Beantwortung Ihrer Fragen
          </li>
          <li>
            <strong className="text-foreground/90">Antragserstellung:</strong>{" "}
            Erstellung eines unterschriftsreifen Pflegeantrags auf Basis Ihrer
            Angaben
          </li>
          <li>
            <strong className="text-foreground/90">Information:</strong>{" "}
            Bereitstellung von Informationen zu Pflegeleistungen, Pflegegraden
            und Antragsverfahren
          </li>
          <li>
            <strong className="text-foreground/90">Serviceerbringung:</strong>{" "}
            Technischer Betrieb und Verbesserung des Dienstes
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          5. Rechtsgrundlagen
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm text-muted">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-left font-medium text-foreground">
                  Datenart
                </th>
                <th className="py-2 text-left font-medium text-foreground">
                  Rechtsgrundlage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Stammdaten, Kommunikationsdaten</td>
                <td className="py-2">
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1
                  lit. b DSGVO (Vertragserfüllung)
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Gesundheitsbezogene Daten</td>
                <td className="py-2">
                  Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Technische Daten</td>
                <td className="py-2">
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb
                  des Dienstes)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-muted">
          <strong className="text-foreground/90">
            Einwilligung in die Verarbeitung von Gesundheitsdaten:
          </strong>{" "}
          Bevor wir gesundheitsbezogene Daten verarbeiten, holen wir Ihre
          ausdrückliche Einwilligung ein. Dies geschieht zu Beginn des
          Beratungsgesprächs im Chat. Sie können diese Einwilligung jederzeit
          widerrufen (siehe Abschnitt 9).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          6. Empfänger und Drittlandtransfer
        </h2>

        <h3 className="mt-4 font-medium text-foreground">6.1 Hosting</h3>
        <p className="mt-2 text-muted">
          Unser Server und unsere Datenbank werden bei Hostinger in Frankfurt am
          Main (Deutschland) betrieben. Ihre Daten verlassen für das Hosting
          nicht die Europäische Union.
        </p>

        <h3 className="mt-4 font-medium text-foreground">
          6.2 Messenger-Dienste
        </h3>
        <p className="mt-2 text-muted">
          Je nach gewähltem Kanal werden Ihre Nachrichten über die Infrastruktur
          des jeweiligen Messenger-Anbieters übertragen:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>
            <strong className="text-foreground/90">Telegram:</strong> Telegram
            FZ-LLC, Dubai / Telegram Messenger Inc.
          </li>
          <li>
            <strong className="text-foreground/90">WhatsApp:</strong> Meta
            Platforms Ireland Ltd. (Datenübermittlung in die USA möglich)
          </li>
          <li>
            <strong className="text-foreground/90">Signal:</strong> Signal
            Technology Foundation, USA
          </li>
        </ul>
        <p className="mt-2 text-muted">
          Die Nutzung des jeweiligen Messengers unterliegt dessen eigenen
          Datenschutzbestimmungen. Wir empfehlen Ihnen, diese vor der Nutzung zu
          lesen.
        </p>

        <h3 className="mt-4 font-medium text-foreground">
          6.3 KI-Sprachmodelle (LLM-Provider)
        </h3>
        <p className="mt-2 text-muted">
          Zur Verarbeitung Ihrer Eingaben und zur Generierung von Antworten
          nutzen wir KI-Sprachmodelle folgender Anbieter:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Anthropic, PBC — San Francisco, USA</li>
          <li>Google LLC — Mountain View, USA</li>
          <li>OpenAI, Inc. — San Francisco, USA</li>
        </ul>
        <p className="mt-2 text-muted">
          Bei der Nutzung dieser Dienste werden Ihre Eingaben (einschließlich der
          von Ihnen mitgeteilten Gesundheitsdaten) an Server dieser Anbieter in
          den USA übermittelt. Die Übermittlung erfolgt auf Grundlage von:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>
            Ihrer ausdrücklichen Einwilligung (Art. 49 Abs. 1 lit. a DSGVO)
          </li>
          <li>
            Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c
            DSGVO), soweit mit den Anbietern vereinbart
          </li>
        </ul>
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Wichtiger Hinweis:</strong> Die USA verfügen derzeit nicht über
          ein von der EU-Kommission anerkanntes angemessenes Datenschutzniveau
          für alle Bereiche. Es besteht das Risiko, dass US-Behörden auf
          übermittelte Daten zugreifen können, ohne dass gleichwertige
          Rechtsschutzmöglichkeiten wie in der EU bestehen. Durch Ihre
          Einwilligung erklären Sie sich mit diesem Risiko einverstanden.
        </p>
        <p className="mt-2 text-muted">
          Wir nutzen die API-Dienste dieser Anbieter. Gemäß deren
          API-Nutzungsbedingungen werden Ihre Daten nicht für das Training der
          KI-Modelle verwendet.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          7. Speicherdauer
        </h2>
        <ul className="mt-3 list-disc pl-5 text-muted space-y-1">
          <li>
            Ihre Daten werden gespeichert, solange sie für die Erbringung des
            Dienstes erforderlich sind.
          </li>
          <li>
            Es gibt keine automatische Löschfrist nach Abschluss eines
            Beratungsvorgangs.
          </li>
          <li>
            Sie können jederzeit die Löschung Ihrer Daten verlangen (siehe
            Abschnitt 9).
          </li>
          <li>
            Nach Eingang eines Löschverlangens löschen wir Ihre
            personenbezogenen Daten unverzüglich, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          8. Datensicherheit
        </h2>
        <p className="mt-3 text-muted">
          Wir treffen angemessene technische und organisatorische Maßnahmen zum
          Schutz Ihrer Daten, insbesondere:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>Verschlüsselte Übertragung (TLS/SSL)</li>
          <li>Zugriffsbeschränkung auf die Datenbank</li>
          <li>Serverstandort in Deutschland (Frankfurt am Main)</li>
          <li>Regelmäßige Sicherheitsupdates</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          9. Ihre Rechte
        </h2>
        <p className="mt-3 text-muted">
          Sie haben nach der DSGVO folgende Rechte:
        </p>
        <ul className="mt-2 list-disc pl-5 text-muted space-y-1">
          <li>
            <strong className="text-foreground/90">Auskunft</strong> (Art. 15
            DSGVO): Sie können Auskunft über Ihre gespeicherten Daten verlangen.
          </li>
          <li>
            <strong className="text-foreground/90">Berichtigung</strong> (Art. 16
            DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.
          </li>
          <li>
            <strong className="text-foreground/90">Löschung</strong> (Art. 17
            DSGVO): Sie können die Löschung Ihrer Daten verlangen.
          </li>
          <li>
            <strong className="text-foreground/90">Einschränkung</strong> (Art. 18
            DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.
          </li>
          <li>
            <strong className="text-foreground/90">Datenübertragbarkeit</strong>{" "}
            (Art. 20 DSGVO): Sie können Ihre Daten in einem strukturierten
            Format erhalten.
          </li>
          <li>
            <strong className="text-foreground/90">Widerspruch</strong> (Art. 21
            DSGVO): Sie können der Verarbeitung widersprechen, sofern diese auf
            berechtigtem Interesse beruht.
          </li>
          <li>
            <strong className="text-foreground/90">
              Widerruf der Einwilligung
            </strong>{" "}
            (Art. 7 Abs. 3 DSGVO): Sie können Ihre Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Verarbeitung bleibt unberührt.
          </li>
        </ul>
        <p className="mt-3 text-muted">
          Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
          <strong className="text-foreground/90">datenschutz@b42.io</strong>
        </p>

        <h3 className="mt-4 font-medium text-foreground">Beschwerderecht</h3>
        <p className="mt-2 text-muted">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Die für uns zuständige Aufsichtsbehörde ist:
        </p>
        <p className="mt-2 text-muted">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
          <br />
          Ludwig-Erhard-Str. 22, 7. OG
          <br />
          20459 Hamburg
          <br />
          https://datenschutz-hamburg.de
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          10. Keine automatisierte Einzelentscheidung
        </h2>
        <p className="mt-3 text-muted">
          Es findet keine automatisierte Entscheidungsfindung im Sinne von Art.
          22 DSGVO statt. Die KI-gestützte Beratung dient der Unterstützung —
          die Entscheidung über die Antragstellung liegt bei Ihnen.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">
          11. Änderungen dieser Datenschutzerklärung
        </h2>
        <p className="mt-3 text-muted">
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen,
          etwa bei Änderungen unseres Dienstes oder der Rechtslage. Die jeweils
          aktuelle Fassung finden Sie auf dieser Seite.
        </p>
      </section>

    </div>
  );
}

const pages: Record<string, { title: string; content: React.ReactNode }> = {
  impressum: { title: "Impressum", content: <ImpressumContent /> },
  datenschutz: { title: "Datenschutz", content: <DatenschutzContent /> },
};

export function LegalModal({
  page,
  onClose,
}: {
  page: string;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const data = pages[page];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white px-6 py-8 shadow-2xl sm:rounded-2xl sm:px-8 sm:my-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {data.title}
          </h1>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            aria-label="Schließen"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {data.content}
      </div>
    </div>
  );
}
