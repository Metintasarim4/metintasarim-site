import { posts } from '../../data/posts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Web Tasarım ve SEO İpuçları",
  description: "Web tasarım trendleri ve SEO taktikleri.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 text-center">
          GÜNCEL <span className="text-blue-600">BLOG</span>
        </h1>

        <div className="grid gap-10">
          {posts.map((post) => (
            <div key={post.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{post.date}</div>
              <h2 className="text-2xl font-black italic uppercase mb-4 text-white group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-all">
                Devamını Oku →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}