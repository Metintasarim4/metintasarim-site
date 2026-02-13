import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ sehir: string, ilce: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const sehir = (resolvedParams?.sehir || "istanbul").toUpperCase();
  const ilce = (resolvedParams?.ilce || "basaksehir").toUpperCase();
  
  return {
    title: `${ilce} Web Tasarım | ${sehir} Profesyonel SEO - Metin Tasarım`,
  }
}

export default async function SehirIlcePage({ params }: { params: Promise<{ sehir: string, ilce: string }> }) {
  const resolvedParams = await params;
  const ilceAdi = (resolvedParams?.ilce || "").toUpperCase();
  const sehirAdi = (resolvedParams?.sehir || "").toUpperCase();

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-48 pb-24 px-6 flex flex-col items-center">
      {/* ANA BAŞLIK ALANI */}
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-4">
          {ilceAdi} <br /> 
          <span className="text-blue-600">WEB TASARIM</span>
        </h1>
        <p className="text-gray-400 text-xl font-bold uppercase tracking-[0.3em] max-w-3xl mx-auto">
          {sehirAdi} BÖLGESİNDE PROFESYONEL YAZILIM VE SEO ÇÖZÜMLERİ.
        </p>
      </div>

      {/* STRATEJİK İÇERİK BÖLÜMÜ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full border-t border-white/5 pt-20">
        <div className="space-y-4">
          <h3 className="text-blue-500 font-black italic text-lg uppercase underline decoration-2 underline-offset-8 mb-6">Lokal SEO Gücü</h3>
          <p className="text-gray-500 text-sm font-bold uppercase leading-relaxed tracking-tighter">
            {ilceAdi} merkezli aramada işletmenizi Google 1. sıraya taşıyoruz. Sadece bir web sitesi değil, bölgenizdeki müşterilere doğrudan ulaşan bir satış makinesi inşa ediyoruz.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-blue-500 font-black italic text-lg uppercase underline decoration-2 underline-offset-8 mb-6">Next.js Performansı</h3>
          <p className="text-gray-500 text-sm font-bold uppercase leading-relaxed tracking-tighter">
            Eski nesil hantal yapılar yerine Next.js 15+ teknolojisiyle ışık hızında açılan sayfalar kodluyoruz. Hız, Google sıralamanız için en kritik kriterdir.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-blue-500 font-black italic text-lg uppercase underline decoration-2 underline-offset-8 mb-6">Butik Yaklaşım</h3>
          <p className="text-gray-500 text-sm font-bold uppercase leading-relaxed tracking-tighter">
            Metin Tasarım olarak fabrikasyon işler yerine her projeye özel butik yazılım geliştiriyoruz. 1981'den gelen tecrübeyi modern dijital dünya ile birleştiriyoruz.
          </p>
        </div>
      </div>

      {/* ALT BUTON */}
      <div className="mt-24">
        <a href="/" className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
          ANA SAYFAYA DÖN
        </a>
      </div>
    </main>
  );
}