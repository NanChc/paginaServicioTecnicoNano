import { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Button from '../components/Button.jsx';
import { services } from '../data/services.js';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

export default function Services() {
  const [activeTab, setActiveTab] = useState('celulares');

  const filteredServices = services.filter(
    (item) => item.category === activeTab
  );

  const customConsultUrl = buildWhatsAppLink(
    'Hola, NanoFix. Quisiera consultar por una reparación personalizada para un caso complejo.'
  );

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones integrales para tus dispositivos favoritos. Utilizamos repuestos de alta calidad y técnicas avanzadas."
        />

        {/* Selector de pestañas (Tabs) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-200/70 rounded-xl gap-2 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('celulares')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === 'celulares'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Celulares</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('computadoras')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === 'computadoras'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Computadoras</span>
            </button>
          </div>
        </div>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bloque destacado: ¿No encontrás lo que buscás? */}
        <div className="mt-16 md:mt-20 bg-[#0a1128] border border-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Elemento de iluminación decorativo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna izquierda: Información y CTA */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                ¿No encontrás lo que buscás?
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                Realizamos reparaciones a medida y diagnósticos personalizados
                para casos complejos.
              </p>
              <div className="pt-2">
                <Button
                  href={customConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Consultar ahora
                </Button>
              </div>
            </div>

            {/* Columna derecha: 4 Cajas de estadísticas (2x2) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center backdrop-blur-xs">
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  100%
                </div>
                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-1">
                  GARANTIZADO
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center backdrop-blur-xs">
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  +1000
                </div>
                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-1">
                  REPARACIONES
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center backdrop-blur-xs">
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  4.9
                </div>
                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-1">
                  ESTRELLAS
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center backdrop-blur-xs">
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  24h
                </div>
                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-1">
                  SOPORTE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
