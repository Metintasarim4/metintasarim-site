export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-48 pb-24 px-6 overflow-x-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* ÜST BÖLÜM: Vizyon ve Kimlik */}
        <section className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[120px] -z-10"></div>
          <p className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-6">Dijitalin Mimarı</p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-12 leading-none">
            METİN <br /> <span className="text-blue-600">TASARIM</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-400 font-bold uppercase tracking-tighter leading-relaxed">
            <div className="space-y-6">
              <p className="text-white text-xl md:text-2xl italic font-black border-l-4 border-blue-600 pl-6">
                "Biz sadece kod yazmıyoruz; Başakşehir'den dünyaya açılan dijital başarı hikayeleri inşa ediyoruz."
              </p>
              <p>
                1981 yılında başlayan bir yaşam serüveninin, teknolojiyle harmanlanmış zirve noktasıdır Metin Tasarım. 
                Yılların getirdiği tecrübeyi, Next.js ve Laravel gibi modern teknolojilerin hızıyla birleştiriyoruz.
              </p>
            </div>
            <div className="space-y-6 pt-4">
              <p>
                İstanbul'un kalbi Başakşehir'de, yerel esnafın ve kurumsal devlerin dijital dönüşümüne liderlik ediyoruz. 
                Amacımız, her işletmeyi Google aramalarında hak ettiği 1. sıraya taşımaktır.
              </p>
              <p>
                MTN Solar ve Metin Aydınlatma gibi projelerle kanıtladığımız kalite anlayışımız, 
                her zaman "hız, güvenlik ve sonuç" odaklı olmuştur.
              </p>
            </div>
          </div>
        </section>

        {/* İSTATİSTİKLER VE DEĞERLER */}
        <section className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-16">
          {[
            { label: "Deneyim", value: "20+ Yıl" },
            { label: "Proje", value: "500+" },
            { label: "Google Puanı", value: "%100" },
            { label: "Destek", value: "7/24" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-white mb-2 italic">{stat.value}</div>
              <div className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* TEKNOLOJİK GÜÇ */}
        <section className="mt-32">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-16 tracking-tighter">
            Kullandığımız <span className="text-gray-600">Teknolojiler</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Next.js & React", d: "Dünyanın en hızlı web altyapısı ile saniyeler içinde açılan sayfalar.", i: "⚡" },
              { t: "Laravel & PHP", d: "E-ticaret ve kurumsal sistemlerde sarsılmaz güvenlik ve esneklik.", i: "🛡️" },
              { t: "Teknik SEO", d: "Kod seviyesinde yapılan optimizasyonlarla Google botlarına rehberlik.", i: "🔍" }
            ].map((tech, i) => (
              <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-blue-500/50 transition-all">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{tech.i}</div>
                <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tighter">{tech.t}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed uppercase tracking-tighter">{tech.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KÜLTÜREL BAĞ: BÜGET VURGUSU */}
        <section className="mt-32 p-12 md:p-20 bg-blue-600 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              Büget'ten <br /> İstanbul'a
            </h2>
            <p className="max-w-2xl text-white/80 font-bold uppercase tracking-tighter leading-relaxed mb-10">
              Köklerimiz Kahramanmaraş Afşin'in Büget köyüne dayanıyor. Oranın kültürüyle yoğrulan dürüstlük ve 
              çalışkanlık ilkesini, bugün Başakşehir'deki modern yazılım ofisimize taşıyoruz.
            </p>
            <a href="/#iletisim" className="inline-block bg-black text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Bizimle Tanışın
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}