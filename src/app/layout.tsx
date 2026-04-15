import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kostenlose Pflegeberatung — Schritt für Schritt, per Chat",
  description:
    "Unsere Pflegeberatung hilft dir beim Pflegegrad-Antrag, bei der Vorbereitung auf die Begutachtung und beim Widerspruch — verständlich erklärt, direkt über WhatsApp, Telegram oder Signal.",
  openGraph: {
    title: "Kostenlose Pflegeberatung — Schritt für Schritt, per Chat",
    description:
      "Unsere Pflegeberatung hilft dir beim Pflegegrad-Antrag, bei der Vorbereitung auf die Begutachtung und beim Widerspruch — verständlich erklärt, direkt über WhatsApp, Telegram oder Signal.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
