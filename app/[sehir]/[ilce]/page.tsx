import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ sehir: string; ilce: string }>
}

// URL'den gelen yazıyı düzgün formata çeviren yardımcı fonksiyon
const formatName = (str: string) => {
  if (!str) return '';
  // Türkçe karakter hatalarını ve tireleri boşluğa çevirir, ilk harfi büyütür
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// 🌟 1. DİNAMİK SEO AYARLARI (GOOGLE BURAYI OKUR) 🌟
export async function generateMetadata({ params }: Props) {
  const { sehir, ilce } = await params;
  
  const sehirAdi = formatName(sehir);
  const ilceAdi = formatName(ilce);

  return {
    // Arama sonucunda çıkacak MAVİ BAŞLIK
    title: `${ilceAdi} Web Tasarım & SEO Uzmanı | ${sehirAdi} - Metin Tasarım`,
    
    // Arama sonucunda çıkacak GRİ AÇIKLAMA
    description: `${sehirAdi} ${ilceAdi} bölgesindeki işletmenizi dijitale taşıyın! Profesyonel web tasarım, e-ticaret ve SEO hizmetleriyle Google'da ilk sıraya yerleşin. Hemen teklif alın.`,
    
    // Anahtar Kelimeler
    keywords: [
      `${ilceAdi} web tasarım`, 
      `${sehirAdi} web tasarım`, 
      `${ilceAdi} seo ajansı`, 
      `${ilceAdi} kurumsal kimlik`, 
      "e-ticaret sitesi", 
      "web yazılım"
    ]
  };
}

// 🌟 2. SAYFA GÖRÜNÜMÜ 🌟
export default async function CityDistrictPage({ params }: Props) {
  const { sehir, ilce } = await params;
  
  const sehirAdi = formatName(sehir);
  const ilceAdi = formatName(ilce);

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6">
      <article className="container mx-auto max-w-4xl text-center">
        
        {/* Üst Kategori Etiketi */}
        <div className="mb-6 inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
          <span>📍</span> {sehirAdi} / {ilceAdi}
        </div>

        {/* SEO Uyumlu H1 Başlığı */}
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
          {ilceAdi} <span className="text-blue-600">Web Tasarım</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
          <strong>{sehirAdi}, {ilceAdi}</strong> bölgesindeki işletmeniz için modern, hızlı ve %100 SEO uyumlu web siteleri tasarlıyoruz. Hedef kitlenize ulaşmak ve satışlarınızı artırmak için profesyonel çözümlerimizle yanınızdayız.
        </p>

        {/* Harekete Geçirici Butonlar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#iletisim" className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
            Hemen Teklif Al
          </a>
          <a href="https://wa.me/905432107058" target="_blank" className="bg-green-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-green-500 transition-all flex items-center justify-center gap-2">
            WhatsApp Destek
          </a>
        </div>

        {/* Alt İçerik - SEO İçin Ekstra Metin */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 italic uppercase">Neden {ilceAdi}?</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yerel SEO çalışmaları sayesinde, bölgenizdeki müşteriler internette hizmet aradığında ilk olarak sizi bulur. {ilceAdi} web tasarım ajansı olarak, rakiplerinizi geride bırakacak stratejiler geliştiriyoruz.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 italic uppercase">Hizmetlerimiz</h2>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
              <li>✅ Kurumsal Web Sitesi Tasarımı</li>
              <li>✅ E-Ticaret ve Sanal Mağaza Kurulumu</li>
              <li>✅ Google SEO ve Harita Optimizasyonu</li>
              <li>✅ Logo ve Kurumsal Kimlik Çalışmaları</li>
            </ul>
          </div>
        </div>

      </article>
    </main>
  );
}