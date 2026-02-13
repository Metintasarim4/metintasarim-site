import { regions } from '../../data/regions';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmet Bölgelerimiz | Metin Tasarım",
  description: "İstanbul başta olmak üzere Türkiye'nin 81 iline profesyonel web tasarım ve SEO hizmeti sunuyoruz. Bölgenizdeki hizmetlerimiz için tıklayın.",
};

export default function ServiceRegions() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6">
      <div className="container mx-auto">
        
        {/* Başlık Kısmı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
            Hizmet <span className="text-blue-600">Bölgelerimiz</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Metin Tasarım olarak sınır tanımıyoruz. İşletmeniz nerede olursa olsun, dijital dünyada sizi en tepeye taşıyoruz.
          </p>
        </div>

        {/* Liste Kısmı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region) => (
            <div key={region.city} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
              <h2 className="text-2xl font-black text-blue-500 mb-4 uppercase italic tracking-tighter border-b border-white/10 pb-4">
                {region.city}
              </h2>
              <ul className="space-y-2">
                {region.districts.map((ilce) => (
                  <li key={ilce}>
                    <a 
                      href={`/${region.city.toLowerCase()}/${ilce.toLowerCase()}`} 
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide group-hover:translate-x-2 duration-300"
                    >
                      <span className="text-blue-600">›</span> {ilce} Web Tasarım
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Mesaj */}
        <div className="mt-20 text-center bg-blue-900/20 border border-blue-500/20 rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-4">Listenizde kendi bölgenizi bulamadınız mı?</h3>
          <p className="text-gray-400 mb-8">Hiç sorun değil. Dünyanın her yerine hizmet veriyoruz.</p>
          <a href="/#iletisim" className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
            Hemen İletişime Geçin
          </a>
        </div>

      </div>
    </main>
  );
}