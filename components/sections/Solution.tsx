import React from 'react';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    bad: "Lista „50 aplikacji do nauki języka”, które pobierzesz i natychmiast o nich zapomnisz.",
    good: "Konkretne zachowania i schematy, które widać u osób robiących największe, życiowe postępy."
  },
  {
    bad: "Motywacyjne teksty o „wychodzeniu ze strefy komfortu” pisane przez teoretyków.",
    good: "Praktyczne przykłady z prawdziwej, codziennej nauki języka i autentycznych sytuacji z Hiszpanii."
  },
  {
    bad: "Porady w stylu „po prostu oglądaj seriale po hiszpańsku” bez konkretnego systemu.",
    good: "Szczere wyjaśnienie, DLACZEGO stoisz w miejscu mimo stałego kontaktu z językiem (i jak to naprawić)."
  },
  {
    bad: "Kolejna nudna checklista w PDF-ie do zapisania na dysku i zakurzenia.",
    good: "Interaktywny mini-przewodnik online, do którego będziesz wracać z przyjemnością."
  }
];

export default function Solution() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background relative">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Mini-mockup czeklisty (CSS) na pograniczu tła po prawej */}
        <div className="absolute -top-12 lg:-top-20 right-0 -translate-y-1/2 hidden md:block z-20">
          <div className="absolute w-24 h-24 bg-[#C026D3]/10 rounded-full blur-xl -z-10" />
          
          <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] w-full transform rotate-3 hover:rotate-0 transition-transform duration-300">
            {/* Ręcznie rysowana mini flaga Hiszpanii */}
            <div className="absolute -top-1.5 -right-1.5 w-6 h-3.5 rounded overflow-hidden flex flex-col shadow-sm border border-neutral-700/10">
              <div className="h-[25%] bg-[#C82A2A]" />
              <div className="h-[50%] bg-[#FFC510]" />
              <div className="h-[25%] bg-[#C82A2A]" />
            </div>
            
            {/* Nagłówek czeklisty */}
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-5 h-5 rounded-md bg-[#C026D3]/10 flex items-center justify-center text-[#C026D3]">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span className="font-heading font-black text-[10px] text-slate-800 uppercase tracking-wider">
                Moja Czeklista
              </span>
            </div>

            {/* Trzy paski skeleton z zielonymi ptaszkami */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Check className="w-2 h-2" strokeWidth={4} />
                </div>
                <div className="h-1.5 w-24 bg-slate-100 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Check className="w-2 h-2" strokeWidth={4} />
                </div>
                <div className="h-1.5 w-16 bg-slate-100 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Check className="w-2 h-2" strokeWidth={4} />
                </div>
                <div className="h-1.5 w-20 bg-slate-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold font-sans text-sm tracking-wide uppercase mb-4">
            Dlaczego ten materiał działa inaczej?
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C026D3]">
            Czym różni się od innych darmowych poradników?
          </h2>
          <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            W internecie pełno jest powtarzanych w nieskończoność rad. Ja postawiłam na czystą praktykę i obserwacje.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-100">
              
              {/* Złe podejście */}
              <div className="flex gap-4 items-start border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                <div className="p-1.5 bg-red-50 rounded-full text-red-500 mt-1 flex-shrink-0">
                  <X className="w-5 h-5" strokeWidth={3} />
                </div>
                <p className="font-sans text-slate-600 leading-relaxed text-base">
                  {comp.bad}
                </p>
              </div>

              {/* Dobre podejście */}
              <div className="flex gap-4 items-start pt-6 md:pt-0 md:pl-6">
                <div className="p-1.5 bg-green-50 rounded-full text-green-600 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <p className="font-sans text-slate-800 font-medium leading-relaxed text-base">
                  {comp.good}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
