export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Başakşehir'de İşletmenizi Google'da Nasıl Öne Çıkarırsınız?",
      excerpt: "Lokal SEO stratejileri ile İstanbul Başakşehir'deki rakiplerinizin önüne geçmenin yolları.",
      date: "25 Ocak 2026",
      category: "SEO"
    },
    {
      id: 2,
      title: "Neden Next.js 15+ Kullanmalısınız?",
      excerpt: "Modern web tasarımında hızın önemi ve Next.js'in sunduğu teknik avantajlar.",
      date: "20 Ocak 2026",
      category: "YAZILIM"
    }
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-48 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-4">Metin Tasarım Blog</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            DİJİTAL <span className="text-gray-600">BİLGİ</span> <br /> KÜTÜPHANESİ
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer border-b border-white/5 pb-12">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                <span className="text-gray-600 text-[10px] font-bold uppercase">{post.date}</span>
              </div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-blue-500 transition-colors mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-500 uppercase font-bold text-xs tracking-tighter leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-3 rounded-xl group-hover:bg-white group-hover:text-black transition-all">
                Devamını Oku
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}