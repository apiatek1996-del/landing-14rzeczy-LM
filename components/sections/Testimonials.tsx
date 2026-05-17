import React from 'react';

const reviews = [
  { src: "/opinion1.jpg", alt: "Opinia o kursie hiszpańskiego - Malaga" },
  { src: "/opinion2.jpg", alt: "Opinia o kursie hiszpańskiego - Przełamanie oporności" },
  { src: "/opinion6.jpg", alt: "Opinia o lekcjach hiszpańskiego - Shakira i Madryt" },
  { src: "/opinion3.jpg", alt: "Opinia o lekcji hiszpańskiego - Camping na Mazurach" },
  { src: "/opinion7.jpg", alt: "Opinia o lekcjach hiszpańskiego - Mówienie od zaraz" },
  { src: "/opinion4.jpg", alt: "Opinia o kursie - Postępy i zabawa" },
  { src: "/opinion5.jpg", alt: "Opinia o kursie - Układanie zdań" }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#F8F4ED]/60 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold font-sans text-sm tracking-wide uppercase mb-4">
            Ściana dowodów (Social Proof)
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C026D3]">
            Co o nauce ze mną mówią inni
          </h2>
          <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            Zero zmyślonych opinii – oto prawdziwe zrzuty ekranu z prywatnych wiadomości, które regularnie dostaję od moich kursantów:
          </p>
        </div>

        {/* Profesjonalna siatka Pinterest/Masonry w CSS */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:_balance] space-y-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-white p-3 rounded-[2rem] shadow-md border-[3px] border-[#FFC510] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block w-full overflow-hidden mb-8"
            >
              <img 
                src={rev.src} 
                alt={rev.alt} 
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
