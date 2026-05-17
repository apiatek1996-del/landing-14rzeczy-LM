import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 px-4 border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Górna część - Grid informacyjny */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolumna 1: Nagłówek i rola */}
          <div className="space-y-4">
            <h3 className="font-heading font-black text-xl text-[#C026D3] leading-snug">
              Agata Piątek
            </h3>
            <p className="font-sans text-xs text-slate-400 font-bold uppercase tracking-wider">
              Ekspertka od Hiszpańskiego dla Polaków w Hiszpanii
            </p>
            <div className="inline-block bg-[#C026D3]/10 border border-[#C026D3]/20 rounded-lg px-3 py-1.5 text-xs text-[#C026D3] font-medium font-sans">
              Magistra filologii hiszpańskiej, 8 lat doświadczenia w nauczaniu
            </div>
          </div>

          {/* Kolumna 2: Misja */}
          <div className="space-y-3">
            <p className="font-sans text-slate-300 leading-relaxed text-sm">
              Mieszkam w Hiszpanii i pomagam Polakom przejść od <span className="italic">"Hola, buenos días"</span> do swobodnych rozmów przy kawie bez stresu.
            </p>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className="space-y-3 md:pl-8">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              Skontaktuj się
            </h4>
            <a 
              href="mailto:kontakt@ohiszpanski.pl" 
              className="font-sans text-primary hover:underline font-bold text-lg block transition-all"
            >
              kontakt@ohiszpanski.pl
            </a>
          </div>

        </div>

        {/* Dolna część - Separator, prawa autorskie i linki prawne */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Prawa autorskie */}
          <p className="font-sans text-xs text-slate-500 text-center md:text-left">
            © 2026 Agata Piątek. RTG Twojego Hiszpańskiego.
          </p>

          {/* Linki prawne */}
          <div className="flex gap-6 font-sans text-xs text-slate-400">
            <a 
              href="https://ohiszpanski.pl/polityka-prywatnosci/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              Polityka prywatności
            </a>
            <a 
              href="https://docs.google.com/document/d/1fZxywdbv-IiaTApd_8Tdx3gE68b_QNFjMV_pbQj9y64/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              Regulamin
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
