"use client";
import { useState } from 'react';

export default function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // WhatsApp'a Gönderme Fonksiyonu
  const sendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Lütfen isim ve telefon giriniz.");
      return;
    }

    // Mesajı oluşturuyoruz
    const text = `Merhaba Metin Tasarım, web sitenizden yazıyorum.%0A%0A👤 *İsim:* ${formData.name}%0A📞 *Tel:* ${formData.phone}%0A💬 *Mesaj:* ${formData.message}`;
    
    // Kendi numaranı buraya yaz (905...)
    window.open(`https://wa.me/905432107058?text=${text}`, '_blank');
    
    // Formu temizle ve kapat
    setFormData({ name: '', phone: '', message: '' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* AÇILAN PENCERE */}
      {isOpen && (
        <div className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Başlık Kısmı */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-bold text-sm">Metin Tasarım Asistanı</h3>
                <p className="text-[10px] text-blue-100 opacity-80">Genellikle 5 dk içinde cevap veririz</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition"
            >
              ✕
            </button>
          </div>

          {/* Form Alanı */}
          <form onSubmit={sendToWhatsapp} className="p-5 flex flex-col gap-3">
            <p className="text-gray-500 text-xs mb-2">
              Projeleriniz için hemen teklif alın veya sorunuzu sorun.
            </p>
            
            <input 
              type="text" 
              placeholder="Adınız Soyadınız" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition text-gray-800"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            
            <input 
              type="tel" 
              placeholder="Telefon Numaranız" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition text-gray-800"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            
            <textarea 
              placeholder="Mesajınız (Opsiyonel)" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition h-24 resize-none text-gray-800"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />

            <button 
              type="submit" 
              className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-green-200 flex items-center justify-center gap-2"
            >
              <span>WhatsApp ile Gönder</span>
              <span>🚀</span>
            </button>
            
            <p className="text-[10px] text-center text-gray-400 mt-2">
              Kişisel verileriniz güvendedir.
            </p>
          </form>
        </div>
      )}

      {/* YUVARLAK AÇMA BUTONU */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'} text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-3xl">💬</span>
        )}
      </button>
      
      {/* Butonun altındaki 'Online' yazısı */}
      {!isOpen && (
        <span className="absolute -top-2 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}

    </div>
  );
}