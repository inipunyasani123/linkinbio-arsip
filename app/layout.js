import { Special_Elite, Lora } from "next/font/google";
import "./globals.css";

const elite = Special_Elite({ subsets: ["latin"], variable: "--font-elite", weight: "400" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", style: ["normal", "italic"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Dara","jobTitle":"Penulis & Penyair","url":"https://linkinbio-arsip.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-arsip.pintuweb.id"),
  title: { default: "Dara Puspita — Penulis & Penyair, Yogyakarta", template: "%s — Dara Puspita" },
  description: "Tautan Dara Puspita, penulis dan penyair di Yogyakarta: kumpulan puisi \"Rumah Kata\" dengan satu puisi utuh, arsip Surat Jumat Pagi, kelas menulis November 2026, dan kotak surat.",
  applicationName: "Arsip Kata",
  keywords: ["penyair yogyakarta", "buku puisi", "newsletter menulis", "kelas menulis daring", "link in bio penulis"],
  authors: [{ name: "Arsip Kata" }],
  creator: "Arsip Kata",
  publisher: "Arsip Kata",
  alternates: { canonical: "https://linkinbio-arsip.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-arsip.pintuweb.id",
    siteName: "Arsip Kata",
    title: "Dara Puspita — Penulis & Penyair, Yogyakarta",
    description: "Tautan Dara Puspita, penulis dan penyair di Yogyakarta: kumpulan puisi \"Rumah Kata\" dengan satu puisi utuh, arsip Surat Jumat Pagi, kelas menulis November 2026, dan kotak surat.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Dara Puspita — Penulis & Penyair, Yogyakarta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dara Puspita — Penulis & Penyair, Yogyakarta",
    description: "Tautan Dara Puspita, penulis dan penyair di Yogyakarta: kumpulan puisi \"Rumah Kata\" dengan satu puisi utuh, arsip Surat Jumat Pagi, kelas menulis November 2026, dan kotak surat.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${elite.variable} ${lora.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
