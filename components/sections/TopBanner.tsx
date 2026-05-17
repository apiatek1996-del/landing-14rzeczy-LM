import React from 'react';

export default function TopBanner() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tickerContent = (
    <div className="flex items-center gap-8 whitespace-nowrap px-4 font-heading font-black text-xs md:text-sm tracking-wider uppercase text-white">
      <span>🇪🇸 14 ZASAD, KTÓRE PRZYŚPIESZĄ TWOJĄ NAUKĘ HISZPAŃSKIEGO</span>
      <button 
        onClick={scrollToForm}
        className="bg-[#FFC510] hover:bg-[#FFD343] text-slate-900 font-sans font-black text-[10px] md:text-xs px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm tracking-widest flex items-center gap-1.5"
      >
        <span>POBIERAM</span>
        <span>🔥</span>
      </button>
      <span>⚡️ ODBIERZ DARMOWY MINI-PRZEWODNIK</span>
      <span className="text-white/40">•</span>
      <span>☕️ SWOBODNE ROZMOWY PRZY KAWIE</span>
      <span className="text-white/40">•</span>
    </div>
  );

  return (
    <div className="sticky top-0 z-50 bg-[#C026D3] text-white py-3 overflow-hidden shadow-md flex items-center select-none border-b border-primary/20">
      <div className="relative w-full flex overflow-hidden">
        {/* Kontener marquee ze zduplikowaną zawartością dla nieskończonej pętli */}
        <div className="animate-marquee flex items-center">
          {tickerContent}
          {tickerContent}
          {tickerContent}
          {tickerContent}
        </div>
      </div>
    </div>
  );
}
