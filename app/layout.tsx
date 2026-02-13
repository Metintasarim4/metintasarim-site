import type { Metadata } from "next";
import "./globals.css";
import ChatPanel from "../components/ChatPanel"; 

export const metadata: Metadata = {
  title: "Metin Tasarım | Başakşehir Web Tasarım & SEO",
  description: "İstanbul Başakşehir merkezli profesyonel web çözümleri.",
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