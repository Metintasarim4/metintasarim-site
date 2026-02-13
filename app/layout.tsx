import type { Metadata } from "next";
import "./globals.css";
import ChatPanel from "../components/ChatPanel"; 

export const metadata: Metadata = {
  // TIKLANABİLİR BAŞLIK (Google'daki Mavi Yazı)
  title: {
    default: "Metin Tasarım - Başakşehir Profesyonel Web Tasarım & SEO Ajansı",
    template: "%s | Metin Tasarım"
  },
  
  // VİTRİN AÇIKLAMASI (Google'daki Gri Yazı)
  description: "İşletmenizi Google'da zirveye taşıyın! Başakşehir merkezli ajansımızda %100 SEO uyumlu, hızlı ve mobil dostu web siteleri tasarlıyoruz. Hemen teklif alın, satışlarınızı artırın.",
  
  // ARAMA KELİMELERİ (Google çok bakmaz ama diğerleri bakar)
  keywords: ["Başakşehir Web Tasarım", "İstanbul SEO ve WEB Sitesi Uzmanı", "Kurumsal Web Sitesi", "E-Ticaret Sitesi", "Metin Tasarım", "Next.js Yazılım", "Grafik Tasarım","Web Tasarım"],
  
  // SOSYAL MEDYA GÖRÜNÜMÜ (WhatsApp/Twitter/Facebook paylaşınca çıkanlar)
  openGraph: {
    title: "Metin Tasarım - İşinizi Dijitale Taşıyoruz 🚀",
    description: "Profesyonel web tasarım ve SEO hizmetleri ile rakiplerinizin önüne geçin. Başakşehir ofisimize bekleriz.",
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
        <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
          <nav className="w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl py-4 px-8 flex justify-between items-center shadow-2xl">
            <a href="/" className="flex items-center gap-2 font-black italic">
              METİN<span className="text-blue-500">TASARIM</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/blog" className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors text-white">Blog</a>
              <a href="/hakkimizda" className="text-[10px] font-bold uppercase text-gray-400 hover:text-white transition-colors text-white">Hakkımızda</a>
              <a href="/#iletisim" className="bg-white text-black text-[10px] font-black uppercase px-6 py-2 rounded-full">Teklif Al</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <ChatPanel />
      </body>
    </html>
  );
}