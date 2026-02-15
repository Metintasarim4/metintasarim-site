"use client";
import { useState, useEffect } from 'react';
import { regions } from '../data/regions';

// --- SLIDER İLÇELERİ ---
const districts = ["BAŞAKŞEHİR", "BEŞİKTAŞ", "KADIKÖY", "ŞİŞLİ", "BAKIRKÖY", "BEYLİKDÜZÜ", "ATAŞEHİR"];

// --- 🌟 PROJELER LİSTESİ (YENİ YATIRIM SİTELERİ EKLENDİ) 🌟 ---
const portfolioProjects = [
  {
    id: 1,
    title: "AYDINLATMA SİTESİ",
    category: "Aydınlatma Sitesi Örneği",
    link: "https://green-louse-148271.hostingersite.com/",
    image: "/proje1.jpg"
  },
  {
    id: 2,
    title: "PARTİ & KIRTASİYE",
    category: "Parti Malzemesi ve Kırtasiye Örneği",
    link: "https://pink-ibis-263812.hostingersite.com/",
    image: "/proje2.jpg"
  },
  {
    id: 3,
    title: "E-TİCARET STORE",
    category: "Store Mağaza İçin E-Ticaret Sitesi Örneği",
    link: "https://yellowgreen-koala-694379.hostingersite.com/",
    image: "/proje3.jpg"
  },
  {
    id: 4,
    title: "KOREL EMLAK",
    category: "Emlak Sitesi Örneği",
    link: "https://metin.metintasarim.io/",
    image: "/proje4.jpg"
  },
  {
    id: 5,
    title: "RİSK ANALİZ",
    category: "Yatırım Adına Yapılan Projemiz",
    link: "https://riskanaliz.com.tr/",
    image: "/proje5.jpg"
  },
  {
    id: 6,
    title: "COREL INVESTMENT",
    category: "Yatırım Adına Yapılan Projemiz 2",
    link: "https://corelinvestment.com/",
    image: "/proje6.jpg"
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  // Akıllı Form Verileri
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    service: '', 
    budget: '', 
    message: '' 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % districts.length);
        setFade(true); 
      }, 500); 
    }, 3500); 
    return () => clearInterval(interval);
  }, []);

  // WhatsApp Mesaj Şablonu
  const sendToWhatsapp = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.service || !formData.budget) { 
        alert("Lütfen adınızı, istediğiniz hizmeti ve bütçenizi seçiniz."); 
        return; 
    }
    const text = `🚀 *Web Sitenizden Yeni Teklif Talebi Var!*%0A%0A👤 *Müşteri:* ${formData.name}%0A📧 *E-posta:* ${formData.email || 'Belirtilmedi'}%0A💼 *İstenen Hizmet:* ${formData.service}%0A💰 *Bütçe Aralığı:* ${formData.budget}%0A📝 *Proje Detayı:* ${formData.message || 'Belirtilmedi'}`;
    window.open(`https://wa.me/905432107058?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-20 text-center px-6 max-w-6xl min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none italic uppercase">
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
          <a href="https://wa.me/905432107058" target="_blank" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-green-600/20 uppercase tracking-widest flex items-center gap-2 hover:scale-105">
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
              { t: "Güven", d: "Premium ajans kalitesinde kurumsal çözümler.", i: "💎" }
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
          { title: "SEO Uyumlu Yazılım", desc: "Google botlarının sevdiği siteleri kodluyoruz.", icon: "🚀" },
          { title: "Kurumsal Web Tasarım", desc: "İstanbul aramalarında rakiplerinizin önüne geçin.", icon: "📈" },
          { title: "Premium Tasarım", desc: "Güven veren kurumsal arayüz tasarımları.", icon: "🎨" }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl hover:border-blue-500/5 transition-all group hover:bg-white/[0.07]">
            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h2>
            <p className="text-gray-500 leading-relaxed text-sm font-bold uppercase tracking-tighter">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. PROJELER (Yeni Eklenenlerle Beraber 6 Proje) */}
      <section id="projeler" className="py-24 container mx-auto px-6 w-full">
        <div className="mb-12 text-center md:text-left">
          <p className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-2">Başarı Hikayeleri</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Neler <span className="text-gray-600">Yaptık?</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[3rem] bg-gray-900 border border-white/10 aspect-video flex flex-col items-center justify-end transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 block"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10 p-8 w-full text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-blue-400 font-bold text-xs tracking-widest mt-2 uppercase bg-black/50 inline-block px-4 py-1 rounded-full backdrop-blur-md">
                  {project.category}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Siteyi İncele →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 5. HİZMET BÖLGELERİ */}
      <section className="py-24 w-full border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
              Türkiye Geneli <span className="text-blue-500">Hizmet Ağı</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Sadece Başakşehir değil; İstanbul'un tüm ilçeleri ve Türkiye'nin 81 ilinde profesyonel web tasarım hizmeti sunuyoruz.
            </p>
            <a href="/hizmet-bolgeleri" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black transition-all border border-white/10 hover:border-white/30 uppercase tracking-widest group">
              TÜM HİZMET BÖLGELERİNİ GÖR <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. İLETİŞİM (AKILLI FORM) */}
      <section id="iletisim" className="py-24 container mx-auto px-6 w-full">
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-8 md:p-20 backdrop-blur-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 leading-none">Projeye <br /> <span className="text-blue-500">Başlayalım</span></h2>
              <p className="text-gray-400 text-lg mb-12 uppercase font-bold tracking-tighter leading-relaxed">Fikrinizi hayata geçirmek için doğru yerdesiniz. Hemen formu doldurun, size özel teklifimizi hazırlayalım.</p>
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

            <form onSubmit={sendToWhatsapp} className="flex flex-col gap-5">
              <input type="text" placeholder="ADINIZ SOYADINIZ (Zorunlu)" required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white placeholder:text-gray-600" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <input type="email" placeholder="E-POSTA ADRESİNİZ" className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white placeholder:text-gray-600" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <div className="relative">
                <select required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white appearance-none cursor-pointer" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                  <option value="" disabled className="bg-gray-900">İHTİYACINIZ OLAN HİZMET?</option>
                  <option value="Kurumsal Web Sitesi" className="bg-gray-900">Kurumsal Web Sitesi</option>
                  <option value="E-Ticaret Sitesi" className="bg-gray-900">E-Ticaret Sitesi</option>
                  <option value="SEO ve Dijital Pazarlama" className="bg-gray-900">SEO ve Dijital Pazarlama</option>
                  <option value="Logo ve Kurumsal Kimlik" className="bg-gray-900">Logo ve Kurumsal Kimlik</option>
                  <option value="Özel Yazılım" className="bg-gray-900">Özel Yazılım</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</div>
              </div>

              <div className="relative">
                <select required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest text-white appearance-none cursor-pointer" value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                  <option value="" disabled className="bg-gray-900">PLANLADIĞINIZ BÜTÇE?</option>
                  <option value="15.000₺ - 25.000₺" className="bg-gray-900">15.000₺ - 25.000₺ (Başlangıç)</option>
                  <option value="25.000₺ - 50.000₺" className="bg-gray-900">25.000₺ - 50.000₺ (Profesyonel)</option>
                  <option value="50.000₺ - 100.000₺" className="bg-gray-900">50.000₺ - 100.000₺ (Premium)</option>
                  <option value="100.000₺ Üzeri" className="bg-gray-900">100.000₺ Üzeri (Kurumsal Çözümler)</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</div>
              </div>

              <textarea placeholder="PROJENİZDEN KISACA BAHSEDİN" rows={4} className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase font-bold text-xs tracking-widest resize-none text-white placeholder:text-gray-600" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              
              <button type="submit" className="w-full bg-blue-600 text-white py-6 mt-2 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                HEMEN TEKLİF AL 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 w-full border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-black tracking-[0.5em] uppercase">© 2026 Metin Tasarım - Başakşehir İstanbul / Tüm Hakları Saklıdır.</p>
      </footer>
    </main>
  );
}