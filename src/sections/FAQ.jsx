import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import { faqs } from '../data/faq.js';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

export default function FAQ() {
  // Primer elemento abierto por defecto para feedback visual inmediato
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappDirectUrl = buildWhatsAppLink(
    'Hola, NanoFix. Tengo una consulta puntual que no encontré en las preguntas frecuentes.'
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <SectionTitle
          title="Preguntas Frecuentes"
          subtitle="Despejá tus dudas sobre nuestros procesos, tiempos y garantías."
        />

        {/* Acordeón dentro de tarjeta blanca */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none focus:bg-slate-50/80"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Texto y enlace debajo del acordeón */}
        <div className="text-center mt-10 text-sm sm:text-base text-slate-600">
          <span>¿Tenés otra consulta? </span>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
          >
            Escribinos directamente
          </a>
        </div>
      </div>
    </section>
  );
}
