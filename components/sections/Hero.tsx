import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div className="relative order-1 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-12 h-12 text-primary animate-bounce">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 22l10-5 10 5L12 2z" />
              </svg>
            </div>
            <div className="absolute top-1/4 -right-8 w-8 h-8 text-pink-400 rotate-12">
               <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            <div className="bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 rotate-1 transition-transform hover:rotate-0 duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/photo_desk1.jpg" 
                alt="Agata Piątek - Hiszpański dla Polaków" 
                className="w-full h-auto rounded-[1.5rem] object-cover object-[center_28%] aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-2 flex flex-col space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#C026D3] leading-[1.15] tracking-wide">
            Dlaczego jedni stoją w miejscu z hiszpańskim, a <span className="text-primary">inni robią szybki progres?</span>
          </h1>
          
          <p className="font-heading italic text-xl text-[#C026D3]">
            (To nie jest lista 100 aplikacji ani motywacyjnych trików. To 14 konkretnych zachowań, które dają realne efekty)
          </p>

          <p className="text-lg text-slate-800 leading-relaxed font-sans max-w-lg">
            Przestań uczyć się „dużo”, ale chaotycznie. Zobacz, co naprawdę robią osoby, którym hiszpański wchodzi do życia naturalnie i bez oporu. <strong className="font-extrabold text-[#C026D3]">Odbierz darmowy mini-przewodnik.</strong>
          </p>

          <div id="signup-form" className="mt-8 bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-2xl shadow-primary/5">
            <div id="mlb2-41407319" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41407319">
              <div className="ml-form-embedWrapper embedForm">
                
                {/* Formularz główny (Zostanie ukryty przez skrypt po udanym zapisie) */}
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <h3 className="font-heading text-xl font-bold text-[#C026D3] mb-6 text-center">
                    Podaj imię i email, a link do Przewodnika poleci prosto do Ciebie! 👇
                  </h3>
                  
                  <form 
                    className="ml-block-form flex flex-col space-y-4" 
                    action="https://assets.mailerlite.com/jsonp/973308/forms/187728463314027667/subscribe" 
                    data-code="" 
                    method="post" 
                    target="_blank"
                  >
                    <div>
                      <input 
                        aria-label="email" 
                        aria-required="true" 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-slate-800" 
                        name="fields[email]" 
                        placeholder="Twój najlepszy email" 
                        autoComplete="email" 
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        aria-label="name" 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-slate-800" 
                        name="fields[name]" 
                        placeholder="Twoje imię" 
                        autoComplete="given-name" 
                        required 
                      />
                    </div>
                    
                    <div className="flex items-start gap-3 mt-2">
                      <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" required />
                      <label htmlFor="privacy" className="text-sm text-slate-600 font-sans leading-tight">
                        Zapisując się uważasz, że akceptujesz Politykę Prywatności.
                      </label>
                    </div>

                    {/* Google Recaptcha wymagany przez MailerLite (Zabezpieczenie przed botami) */}
                    <div className="ml-form-recaptcha ml-validate-required flex justify-center py-2">
                      <div className="g-recaptcha scale-90 origin-center" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />

                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(238,123,48,0.39)] mt-4 cursor-pointer"
                    >
                      Chcę bezpłatny przewodnik!
                    </button>
                  </form>
                </div>

                {/* Sekcja Sukcesu (Wyświetlana przez AJAX po zapisie) */}
                <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                  <div className="ml-form-successContent text-center p-6 bg-[#F8F4ED] border-2 border-primary/25 rounded-2xl shadow-inner">
                    <h4 className="font-heading font-black text-[#C026D3] text-2xl mb-3">🎉 ¡Excelente!</h4>
                    <p className="font-sans text-slate-800 text-base leading-relaxed">
                      Twój darmowy mini-przewodnik poleciał już prosto na podany e-mail! Sprawdź swoją skrzynkę (i zajrzyj do zakładki Oferty lub folderu Spam, jeśli nie zobaczysz go w ciągu 2 minut). ¡Disfruta! ☕️🇪🇸
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
