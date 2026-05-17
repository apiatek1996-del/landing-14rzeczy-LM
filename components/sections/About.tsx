import React from 'react';

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
        
        <div className="w-full md:w-2/5">
          <div className="aspect-[4/5] rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-2xl rotate-2 border-4 border-white">
             <img 
               src="/photo_mug.jpg" 
               alt="Agata Piątek - Autorka" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="w-full md:w-3/5 space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C026D3]">
            Cześć, jestem Agata!
          </h2>
          
          <div className="font-sans text-base md:text-lg text-slate-700 space-y-4 leading-relaxed">
            <p className="font-bold text-slate-900 text-lg md:text-xl">
              Skończyłam magisterkę z filologii hiszpańskiej i mam ponad 9 lat doświadczenia w nauczaniu.
            </p>
            
            <p>
              Dziś mieszkam w Hiszpanii i czuję się tu jak w domu. Pomagam osobom, które już tu są lub planują przeprowadzkę, poczuć dokładnie to samo i swobodnie rozmawiać na co dzień.
            </p>

            <div className="bg-[#C026D3]/5 p-5 rounded-2xl border-l-4 border-[#C026D3] space-y-3">
              <h4 className="font-heading font-bold text-base md:text-lg text-[#C026D3]">Moja droga to nie była miłość od pierwszego wejrzenia:</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  💔 <strong>Nienawiść po licencjacie:</strong> Nudne podręczniki i wkuwanie tabelek prawie zabiło moją pasję do języka.
                </li>
                <li>
                  🗣️ <strong>8 lat do pierwszej rozmowy:</strong> W szkole i na studiach nie uczą żywego języka. Sama zaczęłam swobodnie mówić dopiero po 8 latach!
                </li>
                <li>
                  🙈 <strong>Erasmusowy wstyd:</strong> Chciałam powiedzieć kilka miłych słów o wykładzie, ale przed całą salą... ze stresu nie wykrztusiłam ani jednego słowa. Musiałam dokończyć po angielsku.
                </li>
              </ul>
            </div>

            <p>
              Wiem dokładnie, dlaczego stoisz w miejscu. Samo mieszkanie w Hiszpanii nie uczy automatycznie języka (łatwo zamknąć się w polskiej bańce), a wkuwanie list słówek to strata czasu. W moim darmowym przewodniku bez owijania w bawełnę pokazuję Ci, jak zacząć uczyć się sprytniej.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
