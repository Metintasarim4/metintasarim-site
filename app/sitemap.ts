import { MetadataRoute } from 'next';
import { regions } from '../data/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.metintasarim.com';

  // Sitenin Ana Sayfaları
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Ana sayfa en yüksek öncelik
    },
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ];

  // Tüm İl ve İlçeleri Haritaya Otomatik Ekle
  regions.forEach((region) => {
    // Şehir URL'sini düzenle (Boşlukları tire yap, küçük harfe çevir)
    const sehirSlug = region.city.toLowerCase().replace(/\s+/g, '-');
    
    region.districts.forEach((ilce) => {
      // İlçe URL'sini düzenle
      const ilceSlug = ilce.toLowerCase().replace(/\s+/g, '-');
      
      routes.push({
        url: `${baseUrl}/${sehirSlug}/${ilceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6, // Alt sayfalar
      });
    });
  });

  return routes;
}