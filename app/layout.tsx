import type { Metadata } from "next";
import "./globals.css";
import ChatPanel from "../components/ChatPanel"; 
import Script from 'next/script';

export const metadata: Metadata = {
  // BAŞLIK (Title)
  title: {
    default: "Metin Tasarım - İstanbul Web Tasarım Uzmanı & Grafik Ajansı",
    template: "%s | Metin Tasarım"
  },
  
  // AÇIKLAMA (Description)
  description: "İstanbul web tasarım uzmanı Metin Tasarım ile tanışın! Profesyonel web tasarım, grafik tasarım ve kurumsal kimlik hizmetleri sunuyoruz. Başakşehir merkezli ajansımızla markanızı dijitalde zirveye taşıyın.",
  
  // ANAHTAR KELİMELER (Keywords)
  keywords: [
    "İstanbul Web Tasarım Uzmanı", 
    "Web Tasarım", 
    "Grafik Tasarım", 
    "Kurumsal Kimlik", 
    "Logo Tasarımı", 
    "Başakşehir Web Tasarım", 
    "SEO Uyumlu Web Sitesi", 
    "Metin Tasarım",
    "Metin Web Tasarım"
  ],
  
  // İKONLAR
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  // SOSYAL MEDYA GÖRÜNÜMÜ
  openGraph: {
    title: "Metin Tasarım - Web & Grafik Tasarım Hizmetleri",
    description: "Kurumsal kimlik, logo ve profesyonel web tasarım çözümleri. İşinizi profesyonellere emanet edin.",
    url: "https://www.metintasarim.com",
    siteName: "Metin Tasarım",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-[#030303] text-white">
        
        {/* ÜST MENÜ (NAVBAR) */}
        <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
          <nav className="w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl py-4 px-8 flex justify-between items-center shadow-2xl">
            <a href="/" className="flex items-center gap-2 font-black italic">
              METİN<span className="text-blue-500">TASARIM</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/blog" className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="/hakkimizda" className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors">Hakkımızda</a>
              <a href="/#iletisim" className="bg-white text-black text-[10px] font-black uppercase px-6 py-2 rounded-full hover:bg-gray-200 transition">Teklif Al</a>
            </div>
          </nav>
        </header>

        {/* SAYFA İÇERİĞİ */}
        <main className="min-h-screen">{children}</main>

        {/* CHAT ROBOTU */}
        <ChatPanel />
        {/* --- SCHEMA.ORG (GOOGLE ZENGİN SONUÇLAR / KİMLİK KARTI) --- */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Metin Tasarım",
              "image": "https://www.metintasarim.com/icon.png",
              "@id": "https://www.metintasarim.com",
              "url": "https://www.metintasarim.com",
              "telephone": "+905432107058",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Başakşehir",
                "addressLocality": "İstanbul",
                "addressCountry": "TR"
              },
              "description": "İstanbul merkezli profesyonel web tasarım, e-ticaret ve SEO ajansı.",
              "priceRange": "₺₺"
            }
          `}
        </Script>
        {/* -------------------------------------------------------- */}

        {/* --- GOOGLE ANALYTICS KODU BAŞLANGIÇ --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2VG61L08VQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2VG61L08VQ');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS KODU BİTİŞ --- */}

      </body>
    </html>
  );
}