import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-primary/10 via-[#C026D3]/5 to-transparent relative overflow-hidden border-t border-slate-100">
      {/* Ambient background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold font-sans text-sm tracking-wide uppercase mb-6">
          Zacznij uczyć się sprytniej od zaraz
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-black text-[#C026D3] mb-6 leading-tight">
          Gotowa na przełom w hiszpańskim?
        </h2>
        
        <p className="text-lg md:text-xl text-slate-700 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Nie trać czasu na wkuwanie nudnych regułek i chaotyczne listy słówek. Odbierz darmowy mini-przewodnik i zobacz, jak naprawdę uczyć się sprytniej, by w końcu zacząć swobodnie rozmawiać.
        </p>

        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-10 shadow-2xl max-w-xl mx-auto text-left relative">
          {/* Mini Spanish flag decorative border top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl overflow-hidden flex">
            <div className="w-1/3 bg-[#C82A2A]" />
            <div className="w-1/3 bg-[#FFC510]" />
            <div className="w-1/3 bg-[#C82A2A]" />
          </div>

          {/* Pływający avatar z naklejką HOLA! (Przeniesiony na dół-prawo i bardziej odsunięty) */}
          <div className="absolute -bottom-12 -right-12 md:-right-24 w-32 h-32 md:w-40 md:h-40 z-20 hidden sm:block">
            <div className="relative w-full h-full">
              {/* Naklejka HOLA! po prawej stronie dymku/awatara */}
              <div className="absolute -top-3 -right-3 bg-[#D946EF] text-white text-xs md:text-sm font-black px-3.5 py-1.5 rounded-2xl shadow-lg transform rotate-12 border-2 border-white uppercase tracking-wider z-30 select-none">
                Hola!
              </div>
              {/* Okrągły avatar z białą obwódką */}
              <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-tr from-[#EE7B30] to-[#FFC510] relative">
                <img 
                  src="/cta-agata.jpg" 
                  alt="Agata Piątek - Przywitaj się!" 
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <h3 className="font-heading text-lg md:text-xl font-bold text-[#C026D3] mb-6 text-center pt-2">
            Podaj imię i email – link wyślę prosto do Ciebie! 👇
          </h3>

          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="email" 
                placeholder="Twój najlepszy email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-slate-800"
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Twoje imię" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-slate-800"
                required
              />
            </div>
            
            <div className="flex items-start gap-3 mt-2">
              <input type="checkbox" id="privacy-cta" className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" required />
              <label htmlFor="privacy-cta" className="text-sm text-slate-600 font-sans leading-tight">
                Zapisując się uważasz, że akceptujesz Politykę Prywatności.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(238,123,48,0.39)] mt-4 uppercase tracking-wider"
            >
              Chcę bezpłatny przewodnik!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
