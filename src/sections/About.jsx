import { Shield, Eye, Crosshair, ThumbsUp, Target } from 'lucide-react';
import aboutImg from '../assets/images/microscope.png';
import { values } from '../data/values.js';

const VALUE_ICONS = {
  shield: Shield,
  eye: Eye,
  crosshair: Crosshair,
  'thumbs-up': ThumbsUp,
};

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: Imagen con tarjeta flotante Nuestra Misión */}
          <div className="lg:col-span-6 relative">
            {/* Decoración de círculos de fondo */}
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-blue-50 rounded-full blur-2xl opacity-80 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg">
              <img
                src={aboutImg}
                alt="Técnico especialista de NanoFix realizando microelectrónica y reparación con microscopio"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Tarjeta flotante "Nuestra Misión" tal como en el PDF */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 right-4 sm:right-auto sm:max-w-md bg-white rounded-xl p-5 shadow-xl border border-slate-100 flex items-start gap-3.5 z-10">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Nuestra Misión
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brindar soluciones tecnológicas confiables, extendiendo la
                  vida útil de tus dispositivos con un servicio de excelencia.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Contenido textual, valores y cita */}
          <div className="lg:col-span-6 pt-8 lg:pt-0">
            {/* Encabezado con línea azul */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Sobre NanoFix
              </h2>
              <div className="w-12 h-1 bg-blue-900 mt-3 rounded-full" />
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              Somos un equipo apasionado por la tecnología con años de
              experiencia en el rubro. Entendemos lo importante que son tus
              dispositivos en el día a día.
            </p>

            {/* 4 valores en grilla 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((item) => {
                const Icon = VALUE_ICONS[item.icon] || Shield;
                return (
                  <div key={item.id} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cita destacada con borde azul a la izquierda */}
            <blockquote className="border-l-4 border-blue-900 bg-blue-50/50 rounded-r-lg p-4 text-slate-800 font-medium italic text-sm sm:text-base leading-relaxed">
              &ldquo;En NanoFix, el diagnóstico es gratuito y la calidad no es
              negociable.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
