import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Instrument_Serif({ subsets: ["latin"], variable: "--font-display", weight: "400", style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Close","description":"Landing page brand keintiman","url":"https://crave-close.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://crave-close.pintuweb.com"),
  title: "Positive Crave — Konsep Close",
  description: "Landing page Positive Crave konsep \"Close\": cara baru untuk merasa dekat — desain, edukasi, dan eksplorasi.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page", "desain web"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-close.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-close.pintuweb.com",
    siteName: "Positive Crave",
    title: "Positive Crave — Konsep Close",
    description: "Landing page Positive Crave konsep \"Close\": cara baru untuk merasa dekat — desain, edukasi, dan eksplorasi.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Close" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Close",
    description: "Landing page Positive Crave konsep \"Close\": cara baru untuk merasa dekat — desain, edukasi, dan eksplorasi.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#132a3e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased bg-deep text-haze overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-tide focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-deep"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
