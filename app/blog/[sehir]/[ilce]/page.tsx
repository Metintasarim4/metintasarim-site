import { Metadata } from 'next';

// 1. Her bölgeye özel SEO başlığı (Metadata) üretimi
export async function generateMetadata({ params }: { params: Promise<{ sehir: string, ilce: string }> }): Promise<Metadata> {
  const { sehir, ilce } = await params;
  const ilceUpper = ilce.toUpperCase();
  
  return {
    title: `${ilceUpper} Web Tasarım Dünyasında Hızın Önemi | Metin Tasarım`,
    description: `${ilceUpper} bölgesindeki işletmeler için Next.js ile ışık hızında web tasarım ve SEO çözümleri.`,
  }
}

// 2. Blog İçeriğinin Bölgesel Uyarlaması
export default async function RegionalBlogPage({ params }: { params: Promise<{ sehir: string, ilce: string }> }) {
  const { sehir, ilce } = await params;
  const ilceAdi = ilce.charAt(0).toUpperCase() + ilce.slice(1);

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-48 pb-24 px-6">
      <article className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-12 leading-tight">
          {ilceAdi} Web Tasarım <br /> <span className="text-blue-600">Dünyasında Hızın Önemi</span>
        </h1>

        <div className="prose prose-invert max-w-none text-gray-400 font-bold uppercase tracking-tighter leading-loose">
          <p className="text-xl text-white mb-8">
            Günümüz dijital dünyasında, {ilceAdi} bölgesindeki işletmeler için bir web sitesinin sadece güzel görünmesi yetmiyor; 
            aynı zamanda ışık hızında olması gerekiyor.
          </p>

          <h2 className="text-2xl text-white font-black italic mt-12 mb-6 uppercase tracking-widest border-l-4 border-blue-600 pl-4">
            {ilceAdi} İşletmeleri İçin Neden Next.js?
          </h2>
          <p>
            Birçok ajans hala eski nesil WordPress altyapılarını kullanırken, biz Metin Tasarım olarak projelerimizde Next.js 15+ teknolojisini tercih ediyoruz. 
            Google, {ilceAdi} genelinde saniyeler içinde açılan bu siteleri "Kullanıcı Dostu" olarak işaretler ve sizi bölgenizdeki SEO aramalarında en tepeye taşır.
          </p>

          <div className="mt-16 p-10 bg-white/5 border border-white/10 rounded-[3rem]">
            <h3 className="text-white font-black italic mb-4">PROFESYONEL ÇÖZÜM ORTAĞINIZ</h3>
            <p>
              Lütfü Metin liderliğindeki Metin Tasarım, 1981 yılından bu yana biriken tecrübesiyle {ilceAdi} ve çevresine butik hizmet sunuyor. 
              Dijital dönüşüm hikayenizi birlikte yazmak için bize ulaşın: 
              <span className="block text-2xl text-blue-500 mt-4">0543 210 70 58</span>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}