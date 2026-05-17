import React from 'react';

export default function TopBanner() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50 bg-[#C026D3] text-white py-3 px-4 shadow-md border-b border-primary/20 select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 md:gap-4 flex-wrap text-center font-heading font-black text-xs md:text-sm tracking-wider uppercase">
        <span className="flex items-center gap-2">
          <div className="w-5.5 h-3.5 flex-shrink-0 flex flex-col rounded-[2px] overflow-hidden shadow-sm border border-white/20">
            <div className="h-[25%] bg-[#C82A2A]" />
            <div className="h-[50%] bg-[#FFC510]" />
            <div className="h-[25%] bg-[#C82A2A]" />
          </div>
          <span>14 zasad, które przyśpieszą Twoją naukę hiszpańskiego</span>
        </span>
        <button 
          onClick={scrollToForm}
          className="bg-[#FFC510] hover:bg-[#FFD343] text-slate-900 font-sans font-black text-[10px] md:text-xs px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm tracking-widest flex items-center gap-1.5"
        >
          <span>POBIERAM</span>
          <span>🔥</span>
        </button>
      </div>
    </div>
  );
}
