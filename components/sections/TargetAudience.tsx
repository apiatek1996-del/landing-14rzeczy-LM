import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  "uczysz się hiszpańskiego od dłuższego czasu, ale czujesz, że Twój progres utknął w martwym punkcie,",
  "dużo rozumiesz, czytasz i oglądasz, ale wciąż paraliżuje Cię myśl o naturalnej rozmowie,",
  "masz zapisane dziesiątki podcastów, rolek i seriali, ale ciężko Ci utrzymać regularność bez chaosu,",
  "chcesz przestać strzelać konstrukcjami gramatycznymi na chybił trafił i zacząć mówić bardziej świadomie,",
  "mieszkasz w Hiszpanii (lub planujesz przeprowadzkę) i chcesz w końcu poczuć się tu w 100% „jak u siebie”."
];

// Rysowany w CSS mockup transformacji językowej (Ścieżka Postępu)
const TransformationMockup = () => (
  <div className="relative w-full max-w-sm aspect-[4/4] flex items-center justify-center select-none">
    {/* Kolorowe poświaty w tle */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#EE7B30]/10 via-transparent to-[#C026D3]/10 rounded-full blur-3xl -z-10" />
    
    {/* Ozdobny, kręcący się przerywany okrąg */}
    <div className="absolute w-60 h-60 rounded-full border-2 border-dashed border-[#FFC510]/30 animate-[spin_120s_linear_infinite]" />
    <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#C026D3]/20" />

    {/* KROK 1: Start (Dół, lewo) */}
    <div className="absolute bottom-6 left-2 max-w-[170px] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100/80 -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 z-10">
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Początek drogi</span>
      </div>
      <p className="font-heading italic text-xs text-slate-500 leading-snug">
        "Hola, buenos días... i co dalej? 🤐"
      </p>
      <div className="mt-2 text-[9px] text-red-500 font-semibold flex items-center gap-1">
        <span>Stres i blokada</span>
      </div>
    </div>

    {/* KROK 2: Cel (Góra, prawo) */}
    <div className="absolute top-6 right-2 max-w-[190px] bg-white p-4 rounded-2xl shadow-xl border-2 border-[#C026D3]/20 rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 z-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-[9px] font-bold text-primary uppercase tracking-wide">Twój cel</span>
        </div>
        {/* Ręcznie rysowana mini flaga Hiszpanii */}
        <div className="w-4 h-2.5 rounded-sm overflow-hidden flex flex-col shadow-sm">
          <div className="h-[25%] bg-[#C82A2A]" />
          <div className="h-[50%] bg-[#FFC510]" />
          <div className="h-[25%] bg-[#C82A2A]" />
        </div>
      </div>
      <p className="font-heading font-black text-xs text-[#C026D3] leading-snug">
        "¡Me encanta vivir en España! ☕️🇪🇸"
      </p>
      <div className="mt-2 text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
        <span>Swobodne rozmowy przy kawie</span>
      </div>
    </div>

    {/* Łącząca ścieżka (Dotted vector line) */}
    <div className="absolute w-36 h-20 border-t-2 border-r-2 border-dashed border-[#FFC510] rounded-tr-[3rem] top-24 left-16 -z-10 opacity-60"></div>
    
    {/* Rakietka / Droga postępu */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC510] text-slate-900 px-3 py-1.5 rounded-full shadow-lg text-[10px] font-bold flex items-center gap-1 rotate-12">
      <span>🚀</span>
      <span>14 Kroków Agaty</span>
    </div>
  </div>
);

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background-dark/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C026D3] mb-16 text-center">
          Pobierz ten mini-przewodnik ZWŁASZCZA, JEŚLI:
        </h2>

        {/* Dwukolumnowy układ na desktopie (Ścieżka Transformacji + Tekst) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Lewa kolumna: Mockup Drogi Transformacji w CSS */}
          <div className="w-full lg:w-5/12 order-1 lg:order-1 flex justify-center">
            <TransformationMockup />
          </div>

          {/* Prawa kolumna: Lista korzyści */}
          <div className="w-full lg:w-7/12 order-2 lg:order-2">
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <ul className="space-y-6">
                {reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-[#C026D3]/10 p-1.5 rounded-full mt-1.5 flex-shrink-0">
                      <Check className="w-5 h-5 text-[#C026D3]" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-base md:text-lg text-slate-800 leading-relaxed font-medium">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Ciemna tablica podsumowująca na pełną szerokość (pod tekstem i grafiką) */}
        <div className="mt-16 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-center shadow-xl border border-slate-800 max-w-5xl mx-auto">
          <h3 className="font-heading text-xl md:text-3xl font-bold text-white mb-4">
            Nie wystarczy „uczyć się więcej” lub kupować kolejny kurs.
          </h3>
          <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Trzeba wiedzieć, JAK uczą się osoby, które najszybciej osiągają płynność. Ten przewodnik Ci to pokaże.
          </p>
        </div>

      </div>
    </section>
  );
}
