import { posts } from '../../../data/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Sayfa Bulunamadı" };
  return { title: post.title };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6">
      <article className="container mx-auto max-w-3xl">
        <a href="/blog" className="text-gray-500 hover:text-white font-bold uppercase text-xs tracking-widest mb-8 inline-block">← Geri Dön</a>
        
        <header className="mb-10 border-b border-white/10 pb-10 text-center">
          <span className="text-blue-500 font-bold uppercase text-xs mb-4 block">{post.date}</span>
          <h1 className="text-3xl md:text-5xl font-black italic uppercase text-white">{post.title}</h1>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}