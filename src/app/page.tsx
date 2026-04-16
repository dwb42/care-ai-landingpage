import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Hilfe beim Pflegegeld-Antrag — per Chat",
  description:
    "Wir begleiten dich Schritt für Schritt beim Pflegegeld-Antrag, der Pflegegrad-Einschätzung und der Begutachtung — kostenlos, per WhatsApp.",
  openGraph: {
    title: "Hilfe beim Pflegegeld-Antrag — per Chat",
    description:
      "Wir begleiten dich Schritt für Schritt beim Pflegegeld-Antrag, der Pflegegrad-Einschätzung und der Begutachtung — kostenlos, per WhatsApp.",
    locale: "de_DE",
    type: "website",
  },
};

export default function Home() {
  return <LandingPage />;
}
