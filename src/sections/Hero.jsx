import { ArrowRight, Smartphone, Monitor } from 'lucide-react';
import Button from '../components/Button.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';
import heroBg from '../assets/images/header.png';

export default function Hero() {
  const whatsappUrl = buildWhatsAppLink(
    'Hola, NanoFix. Quisiera realizar una consulta general sobre servicio técnico.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center bg-[#070c18] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Imagen de fondo con overlay degradado oscuro/azulado */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Mesa de trabajo de servicio técnico con dispositivos y herramientas de precisión"
          className="absolute right-6 lg:right-40 top-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] lg:w-[480px] h-[480px] sm:h-[560px] lg:h-[620px] object-cover rounded-[28px] border border-slate-800 shadow-2xl opacity-100 hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c18] via-[#070c18]/90 to-[#070c18]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-[#070c18]/80" />
        {/* Glow decorativo azul sutil */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            SERVICIO TÉCNICO ESPECIALIZADO
          </div>

          {/* Título principal con "en buenas manos." en azul cursivo */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Tu tecnología,
            <span className="block text-blue-500 italic font-serif tracking-normal mt-1">
              en buenas
            </span>
            <span className="block text-blue-500 italic font-serif tracking-normal">
              manos.
            </span>
          </h1>

          {/* Descripción exacta del PDF */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
            En NanoFix nos especializamos en el servicio técnico de celulares y
            computadoras. Trabajamos para ayudarte a resolver problemas
            tecnológicos de manera profesional, clara y confiable.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Consultar por WhatsApp
            </Button>
            <Button
              href="#servicios"
              variant="secondary"
              size="lg"
            >
              Nuestros Servicios
            </Button>
          </div>

          {/* Indicadores inferiores: Celulares y Computadoras */}
          <div className="flex items-center gap-8 pt-4 border-t border-slate-800/80 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span>Celulares</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Monitor className="w-4 h-4" />
              </div>
              <span>Computadoras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
