"use client";
import { useState, useEffect } from 'react';
import { regions } from '../data/regions';

// BURASI SLIDER LİSTESİ (İstediğin ilçeleri buraya ekle/çıkar)
const districts = [
  "BAŞAKŞEHİR",
  "BAĞCILAR",
  "BEŞİKTAŞ",
  "BEYOĞLU",
  "FATİH",
  "KADIKÖY",
  "ŞİŞLİ",
  "BAKIRKÖY",
  "BEYLİKDÜZÜ",
  "ATAŞEHİR",
  "SARIYER",
  "NİŞANTAŞI",
  "ÜSKÜDAR",
  "ÜMRANİYE"
];

export default function Home() {
  // --- SLIDER AYARLARI ---
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Önce yazıyı söndür
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % districts.length); // Yazıyı değiştir
        setFade(true); // Tekrar yak
      }, 500); // 0.5 saniye bekle (Animasyon süresi)
    }, 3500); // Her 3.5 saniyede bir değiştir

    return () => clearInterval(interval);
  }, []);

  // --- FORM VERİLERİ ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // --- WHATSAPP GÖNDERME ---
  const sendToWhatsapp = (e: any) => {
    e.preventDefault();
    if (!formData.name) { alert("Lütfen adınızı giriniz."); return; }
    const text = `Merhaba Metin Tasarım, sitenizden yazıyorum.%0A%0A👤 *İsim:* ${formData.name}%0A📧 *E-posta:* ${formData.email}%0A📝 *Mesaj:* ${formData.message}`;
    window.open(`https://wa.me/905432107058?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION (HAREKETLİ BAŞLIK BURADA) */}
      <section className="pt-48 pb-20 text-center px-6 max-w-6xl min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none italic uppercase">
          {/* Değişen İlçe İsmi */}
          <span className={`block transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {districts[index]}
          </span>
          <span className="text-blue-600 block mt-2">WEB TASARIM</span>
        </h1>
        
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed uppercase font-bold tracking-tighter">
          Metin Tasarım ile İstanbul merkezli, yüksek performanslı ve SEO odaklı dijital çözümler. Google'da zirveye çıkmanız için buradayız.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#iletisim" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-blue-600/30 uppercase tracking-widest hover:scale-105">
            Hemen Başla
          </a>
          <a 
            href="https://wa.me/905432107058?text=Merhaba, web tasarım hizmeti almak istiyorum."
            target="_blank"
            className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-green-600/20 uppercase tracking-widest flex items-center gap-2 hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* 2. NEDEN BİZ? */}
      <section className="py-24 w-full bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Neden <span className="text-blue-500">Biz?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Hız", d: "Next.js ile Google hız testlerinde 100/100 tam puan.", i: "⚡" },
              { t: "SEO", d: "Başakşehir aramalarında organik görünürlük garantisi.", i: "🎯" },
              { t: "Destek", d: "0543 210 70 58 ile 7/24 doğrudan teknik destek.", i: "🛠️" },
              { t: "Güven", d: "MTN Solar ve Metin Aydınlatma gibi güçlü referanslar.", i: "💎" }
            ].map((item, i) => (
              <div key={i} className="text-center group p-6 hover:bg-white/5 rounded-3xl transition-all border border-transparent hover:border-white/10">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.i}</div>
                <h3 className="text-xl font-bold mb-2 uppercase italic">{item.t}</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed uppercase font-black tracking-widest">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HİZMETLER */}
      <section id="hizmetler" className="py-24 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: "SEO Uyumlu Yazılım", desc: "Next.js kullanarak dünyanın en hızlı açılan, Google botlarının sevdiği siteleri kodluyoruz.", icon: "🚀" },
          { title: "Kurumsal Web Tasarım", desc: "Arama motoru optimizasyonu ile İstanbul aramalarında rakiplerinizin önüne geçin.", icon: "📈" },
          { title: "Premium Tasarım", desc: "Kullanıcı deneyimi odaklı, modern ve güven veren kurumsal arayüz tasarımları.", icon: "🎨" }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl hover:border-blue-500/5 transition-all group hover:bg-white/[0.07]">
            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h2>
            <p className="text-gray-500 leading-relaxed text-sm font-bold uppercase tracking-tighter">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. PORTFOLYO */}
      <section id="projeler" className="py-24 container mx-auto px-6 w-full">
        <div className="mb-12">
          <p className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-2">Başarı Hikayeleri</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Seçkin <span className="text-gray-600">Projeler</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[3.5rem] bg-white/5 border border-white/10 aspect-video flex items-center justify-center transition-all hover:border-blue-500/50 cursor-pointer">
            <div className="text-center z-10 transition-all group-hover:scale-110">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">MTN SOLAR</h3>
              <p className="text-blue-500 font-bold text-[10px] tracking-widest mt-2 uppercase">Enerji & Kurumsal</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="group relative overflow-hidden rounded-[3.5rem] bg-white/5 border border-white/10 aspect-video flex items-center justify-center transition-all hover:border-blue-500/50 cursor-pointer">
            <div className="text-center z-10 transition-all group-hover:scale-110">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">METİN AYDINLATMA</h3>
              <p className="text-blue-500 font-bold text-[10px] tracking-widest mt-2 uppercase">E-Ticaret Çözümleri</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
        </div>
      </section>

      {/* 5. HİZMET BÖLGELERİ (ÖZET) */}
      <section className="py-24 w-full border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Türkiye Geneli <span className="text-blue-500">Hizmet Ağı</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Sadece Başakşehir değil; İstanbul'un tüm ilçeleri ve Türkiye'nin 81 ilinde profesyonel web tasarım hizmeti sunuyoruz.
            </p>
            <a 
              href="/hizmet-bolgeleri" 
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black transition-all border border-white/10 hover:border-white/30 uppercase tracking-widest group"
            >
              TÜM HİZMET BÖLGELERİNİ GÖR
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. İLETİŞİM */}
      <section id="iletisim" className="py-24 container mx-auto px-6 w-full">
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-8 md:p-20 backdrop-blur-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 leading-none">Başakşehir <br /> <span className="text-blue-500">Ofisimiz</span></h2>
              <p className="text-gray-400 text-lg mb-12 uppercase font-bold tracking-tighter leading-relaxed">Projeleriniz için 7/24 yanınızdayız.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-all">📍</div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Konum</p>
                    <p className="text-lg font-bold uppercase tracking-tighter text-gray-300">Başakşehir, İstanbul</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-green-600 transition-all">📞</div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Telefon & WhatsApp</p>
                    <a href="tel:+905432107058" className="text-lg font-bold uppercase tracking-tighter hover:text-blue-500 transition-colors text-gray-300">0543 210 70 58</a>
                  </div>
                </div>
              </div>
            </div>

            {/* İLETİŞİM FORMU */}
            <form onSubmit={sendToWhatsapp} className="flex flex-col gap-4">
              <input 
                type="text" placeholder="ADINIZ SOYADINIZ" required
                className="w-full bg-white/5 border border-white/10 p-6 rounded-3xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white" 
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" placeholder="E-POSTA ADRESİNİZ" 
                className="w-full bg-white/5 border border-white/10 p-6 rounded-3xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white" 
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea 
                placeholder="PROJENİZDEN BAHSEDİN" rows={5} 
                className="w-full bg-white/5 border border-white/10 p-6 rounded-3xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest resize-none text-white"
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button type="submit" className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">
                TEKLİF İSTE 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 w-full border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-black tracking-[0.5em] uppercase">© 2026 Metin Tasarım - Başakşehir İstanbul / Tüm Hakları Saklıdır.</p>
      </footer>
    </main>
  );
}