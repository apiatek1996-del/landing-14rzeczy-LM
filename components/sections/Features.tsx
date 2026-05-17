import React from 'react';

const ArrowIcon = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#C026D3] flex items-center justify-center text-[#C026D3] mt-0.5">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

// Ręcznie rysowana flaga Hiszpanii (CSS) - bezpieczna na każdym systemie (np. Windows)
const SpanishFlag = () => (
  <div className="w-7 h-4.5 rounded overflow-hidden flex flex-col shadow border border-neutral-750/50">
    <div className="h-[25%] bg-[#C82A2A]" />
    <div className="h-[50%] bg-[#FFC510]" />
    <div className="h-[25%] bg-[#C82A2A]" />
  </div>
);

const TabletMockup = () => (
  <div className="relative w-full max-w-sm">
    {/* Glow behind the tablet */}
    <div className="absolute inset-0 bg-[#C026D3]/15 rounded-[2.5rem] blur-2xl -z-10 transform scale-95" />
    
    {/* Tablet bezel casing */}
    <div className="bg-slate-950 p-3.5 pb-10 rounded-[2.5rem] shadow-2xl border-[6px] border-slate-900 relative aspect-[3/4.2] flex flex-col justify-between">
      {/* Front Camera */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rounded-full" />
      
      {/* Screen Content - Notion Dark Theme */}
      <div className="bg-[#191919] rounded-[1.6rem] overflow-hidden w-full h-full flex flex-col border border-slate-800 relative select-none">
        
        {/* Notion Cover Image Banner */}
        <div className="relative h-20 w-full bg-[#EAEAEA] flex items-center justify-center overflow-hidden border-b border-neutral-800">
          {/* stylized "Check it!" */}
          <span 
            className="font-black text-3xl tracking-tighter text-[#C82A2A] transform uppercase font-serif"
            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.15)' }}
          >
            Check it!
          </span>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        {/* CSS Spanish Flag Icon overlapping banner */}
        <div className="absolute top-[62px] left-6 z-10">
          <SpanishFlag />
        </div>

        {/* Notion Content Container */}
        <div className="p-4 pt-6 space-y-3 flex-grow overflow-hidden font-sans text-left relative">
          {/* Title */}
          <h3 className="font-serif font-bold text-base text-white leading-tight mt-1.5">
            14 rzeczy które przyspieszają naukę hiszpańskiego
          </h3>
          
          {/* Subtitle */}
          <p className="text-[10px] text-slate-400 leading-snug">
            Od ponad 9 lat pracuję jako lektorka hiszpańskiego i widzę powtarzające się schematy...
          </p>

          {/* Callout box */}
          <div className="border-l-2 border-slate-500 pl-2 py-1 bg-white/5 rounded-r text-[9px] text-slate-300 leading-normal">
            💡 To nie jest lista motywacyjnych trików. To rzeczy, które naprawdę widzę...
          </div>

          {/* Section title (Orange) */}
          <h4 className="text-[10px] font-bold text-[#EE7B30] uppercase tracking-wider pt-1">
            Osoby, które najszybciej uczą się języka:
          </h4>

          {/* Blurred/Teaser Checklist Content Area */}
          <div className="relative">
            {/* Blended locked overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/70 to-[#191919]/20 z-20 flex flex-col items-center justify-center pb-2 pt-6">
              <div className="bg-[#C026D3] text-white p-2 rounded-full shadow-lg animate-bounce">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[9px] font-bold text-white mt-2 bg-[#191919] px-2 py-0.5 rounded-full border border-neutral-800 shadow-sm tracking-wide uppercase">
                Odblokuj 14 punktów
              </span>
            </div>

            {/* Blurred Mock List */}
            <div className="space-y-3 filter blur-[4px] opacity-25 select-none pointer-events-none">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-white">
                  <div className="w-3 h-3 rounded border border-slate-500 flex-shrink-0 bg-white/5"></div>
                  <span>Trzymają hiszpański na widoku</span>
                </div>
                <p className="text-[8px] text-slate-400 pl-4 leading-normal">
                  Notatki, książki, ściągawki czy otwarte zakładki przypominają...
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-white">
                  <div className="w-3 h-3 rounded border border-slate-500 flex-shrink-0 bg-white/5"></div>
                  <span>Nie robią tylko tego, co łatwe i przyjemne</span>
                </div>
                <p className="text-[8px] text-slate-400 pl-4 leading-normal">
                  Bierne słuchanie i oglądanie seriali to iluzja nauki...
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer mockup label */}
        <div className="py-2.5 px-4 bg-neutral-900 border-t border-neutral-800 flex justify-between items-center text-[10px] text-slate-500">
          <span>Agata • Przewodnik</span>
          <span className="text-primary font-semibold">Podgląd</span>
        </div>
        
      </div>
      
      {/* Home Indicator line */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full" />
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Lewa strona - Mockup tabletu z zamazanym Notion i flagą CSS */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <TabletMockup />
        </div>

        {/* Prawa strona - Lista sekretów w stylu Italiany */}
        <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            W tej liście między innymi:
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <ArrowIcon />
              <p className="font-sans text-slate-700 leading-relaxed text-base md:text-lg">
                bardzo proste do wdrożenia <strong>nawyki 1 oraz 4</strong>, które zajmą Ci dosłownie 5 minut dziennie, a natychmiast zmuszą Twój mózg do myślenia po hiszpańsku i wyeliminują powtarzanie tych samych błędów.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <ArrowIcon />
              <p className="font-sans text-slate-700 leading-relaxed text-base md:text-lg">
                <strong>punkty 3, 10 oraz 13</strong>, które pomogą Ci <strong>ODWAŻNIE przełamać paraliż przed mówieniem</strong> i swobodnie omijać brakujące słówka bez paniki i zacinania się.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <ArrowIcon />
              <p className="font-sans text-slate-700 leading-relaxed text-base md:text-lg">
                zrozumienie zasady numer 2 zajmie Ci 3 minuty, a od razu <strong>otworzy Ci oczy na to, dlaczego samo oglądanie seriali nie działa</strong> i co musisz natychmiast zmienić, by język zaczął być aktywny.
              </p>
            </div>

            <p className="font-sans text-slate-500 italic text-base pl-12">
              ...i wiele więcej!
            </p>
          </div>

          <div className="pt-6">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-12 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(238,123,48,0.39)] uppercase tracking-wide"
            >
              Pobieram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
