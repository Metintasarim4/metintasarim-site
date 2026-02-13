"use client";
import { useState, useRef, useEffect } from 'react';

export default function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('chat'); // 'chat' veya 'form'
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  // Sohbet açıldığında en alta kaydır
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, step]);

  // WhatsApp Gönder
  const sendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Merhaba Metin Tasarım, asistanınız üzerinden yazıyorum.%0A%0A👤 *İsim:* ${formData.name}%0A📞 *Tel:* ${formData.phone}%0A💬 *Konu:* ${formData.message || 'Genel Bilgi'}`;
    window.open(`https://wa.me/905432107058?text=${text}`, '_blank');
    
    // İşlem bitince kapat ve sıfırla
    setIsOpen(false);
    setStep('chat');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* --- SOHBET PENCERESİ --- */}
      {isOpen && (
        <div className="mb-4 w-[340px] md:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300 max-h-[600px]">
          
          {/* 1. ÜST BAŞLIK */}
          <div className="bg-blue-900 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">🤖</div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-blue-900 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Metin Tasarım Asistanı</h3>
                <p className="text-[10px] text-blue-200">Çevrimiçi | Başakşehir Ofis</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-80 hover:opacity-100 text-xl">✕</button>
          </div>

          {/* 2. İÇERİK ALANI */}
          <div className="p-4 bg-gray-50 flex-1 overflow-y-auto max-h-[400px] flex flex-col gap-4">
            
            {/* Adım 1: BİLGİLENDİRME MESAJLARI */}
            {step === 'chat' && (
              <>
                {/* Robot Mesajı 1 */}
                <div className="flex gap-3 animate-in slide-in-from-left-4 duration-500">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm shrink-0">🤖</div>
                  <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-sm text-gray-700 border border-gray-100">
                    Merhaba! 👋 <strong>Metin Tasarım</strong>'a hoş geldiniz.
                  </div>
                </div>

                {/* Robot Mesajı 2 (Gecikmeli gibi) */}
                <div className="flex gap-3 animate-in slide-in-from-left-4 duration-700 delay-150">
                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm shrink-0">🤖</div>
                   <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-sm text-gray-700 border border-gray-100">
                     Sizlere <strong>SEO uyumlu</strong>, Google'da üst sıralara çıkan ve %100 mobil uyumlu web siteleri yapıyoruz. 🚀
                   </div>
                </div>

                {/* Robot Mesajı 3 */}
                <div className="flex gap-3 animate-in slide-in-from-left-4 duration-1000 delay-300">
                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm shrink-0">🤖</div>
                   <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-sm text-gray-700 border border-gray-100">
                     Size nasıl yardımcı olabilirim?
                   </div>
                </div>

                {/* SEÇENEKLER (Butonlar) */}
                <div className="flex flex-col gap-2 mt-2 pl-11 animate-in fade-in duration-1000 delay-500">
                  <button 
                    onClick={() => setStep('form')}
                    className="bg-blue-600 text-white py-2 px-4 rounded-xl text-sm font-bold hover:bg-blue-700 transition text-left shadow-lg shadow-blue-200"
                  >
                    📝 Hemen Fiyat Teklifi Al
                  </button>
                  <a 
                    href="tel:+905432107058"
                    className="bg-white border border-blue-200 text-blue-800 py-2 px-4 rounded-xl text-sm font-bold hover:bg-blue-50 transition text-left"
                  >
                    📞 Sizi Aramak İstiyorum
                  </a>
                  <a 
                    href="https://wa.me/905432107058" target="_blank"
                    className="bg-green-500 text-white py-2 px-4 rounded-xl text-sm font-bold hover:bg-green-600 transition text-left shadow-lg shadow-green-200"
                  >
                    💬 Direkt WhatsApp'a Git
                  </a>
                </div>
              </>
            )}

            {/* Adım 2: FORM ALANI */}
            {step === 'form' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                 {/* Kullanıcı 'Teklif Al' dediği için sanki o yazmış gibi gösterelim */}
                 <div className="flex justify-end mb-4">
                    <div className="bg-blue-600 text-white p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm">
                      Fiyat teklifi almak istiyorum 📝
                    </div>
                 </div>

                 {/* Robot Cevabı */}
                 <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm shrink-0">🤖</div>
                    <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-sm text-gray-700 border border-gray-100">
                      Harika! Size özel bir çalışma yapabilmemiz için aşağıdaki kısa formu doldurup "Gönder"e basmanız yeterli. 👇
                    </div>
                 </div>

                 <form onSubmit={sendToWhatsapp} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
                    <input 
                      type="text" placeholder="Adınız Soyadınız" required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-blue-500 outline-none text-black"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="tel" placeholder="Telefon Numaranız" required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-blue-500 outline-none text-black"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                    <textarea 
                      placeholder="Projenizden kısaca bahsedin..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-blue-500 outline-none resize-none text-black"
                      rows={3}
                      value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setStep('chat')} className="flex-1 py-3 bg-gray-200 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-300">Geri</button>
                      <button type="submit" className="flex-[2] py-3 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 shadow-lg shadow-green-200">WhatsApp'a Gönder ➤</button>
                    </div>
                 </form>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* --- ANA BUTON (Yuvarlak) --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center"
      >
        {/* Bildirim Balonu (Dikkat Çekici) */}
        {!isOpen && (
          <span className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-lg border border-gray-100 animate-bounce whitespace-nowrap">
            Size nasıl yardım edebilirim? 👋
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
          </span>
        )}

        <div className={`${isOpen ? 'bg-gray-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'} text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110`}>
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-3xl">💬</span>
          )}
        </div>
        
        {/* Online Durum Işığı */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        )}
      </button>

    </div>
  );
}