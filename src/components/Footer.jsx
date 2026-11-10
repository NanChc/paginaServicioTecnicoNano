import {
  Smartphone,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from 'lucide-react';
import { businessConfig } from '../config/business.js';
import { buildWhatsAppLink } from '../utils/whatsapp.js';
import nanofixLogo from '../assets/images/nanofixLogo.png';

// Componentes SVG limpios para redes sociales
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// function TwitterIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
// }

// function LinkedinIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  // Twitter: TwitterIcon,
  // LinkedIn: LinkedinIcon,
};

export default function Footer() {
  const sections = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Cómo trabajamos", href: "#como-trabajamos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const servicesList = [
    "Reparación de Pantallas",
    "Cambio de Batería",
    "Mantenimiento de PC",
    "Optimización de Sistemas",
    "Diagnóstico Avanzado",
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-3 inline-flex">
              <img
                src={nanofixLogo}
                alt="NanoFix Logo"
                className="w-15 h-15 object-contain rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                NanoFix
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Servicio técnico profesional de alta precisión para celulares y
              computadoras. Calidad, confianza y transparencia en cada
              reparación.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-2">
              {businessConfig.socialLinks.map((item) => {
                const IconComponent = SOCIAL_ICONS[item.name] || Smartphone;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-blue-600 transition-all flex items-center justify-center"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Secciones */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Secciones
            </h3>
            <ul className="space-y-2.5 text-sm">
              {sections.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((serviceName) => (
                <li key={serviceName}>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{businessConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {businessConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NanoFix. Todos los derechos reservados.</p>
          <a
            href="#inicio"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-medium group"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
