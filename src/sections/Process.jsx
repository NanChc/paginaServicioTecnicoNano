import {
  Search,
  MessageCircle,
  ClipboardCheck,
  FileText,
  Settings,
  CheckCircle2,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import { processSteps } from '../data/process.js';

const STEP_ICONS = {
  search: Search,
  'message-circle': MessageCircle,
  'clipboard-check': ClipboardCheck,
  'file-text': FileText,
  settings: Settings,
  'check-circle': CheckCircle2,
};

export default function Process() {
  return (
    <section id="como-trabajamos" className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <SectionTitle
          title="¿Cómo trabajamos?"
          subtitle="Un proceso claro y transparente diseñado para tu tranquilidad en cada etapa de la reparación."
        />

        {/* Grilla 3x2 de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((item) => {
            const Icon = STEP_ICONS[item.icon] || Search;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-md hover:border-blue-900 transition-all duration-200 flex flex-col items-center text-center relative group"
              >
                {/* Contenedor de ícono con insignia numérica */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Insignia con el número de paso */}
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    {item.step}
                  </div>
                </div>

                {/* Título del paso */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-200 mb-2">
                  {item.title}
                </h3>

                {/* Descripción del paso */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
