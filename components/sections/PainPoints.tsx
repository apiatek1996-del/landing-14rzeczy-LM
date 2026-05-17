import React from 'react';
import { XCircle } from 'lucide-react';

const problems = [
  {
    title: "Rozumiesz, ale nie mówisz",
    desc: "Robisz tylko to, co łatwe. Oglądasz seriale, robisz quizy, słuchasz podcastów, ale zapominasz o aktywnym używaniu języka."
  },
  {
    title: "Chaos w materiałach",
    desc: "Zapisujesz się na kolejne kursy i gromadzisz darmowe PDF-y licząc, że tym razem „samo wejdzie”, zamiast wracać do starych notatek."
  },
  {
    title: "Traktujesz mówienie jak „test”",
    desc: "Czekasz, aż poczujesz się w 100% gotowa. Zamiast powiedzieć cokolwiek, wolisz milczeć, żeby nie popełnić błędu."
  },
  {
    title: "Tłumaczysz słowo po słowie",
    desc: "Jesteś zależna od perfekcyjnej znajomości każdego słówka. Gdy tylko brakuje Ci jednego wyrazu – zacinasz się i panikujesz."
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C026D3] mb-6">
            Sprawdź, czy też wpadasz w te pułapki...
          </h2>
          <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">
            Wielu moich uczniów miesiącami stało w miejscu, powtarzając te same, nieskuteczne nawyki językowe. Ty nie musisz tracić na to czasu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((prob, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-background-dark/50 border border-transparent hover:border-primary/20 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#C026D3] mb-2">
                  {prob.title}
                </h3>
                <p className="font-sans text-slate-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
