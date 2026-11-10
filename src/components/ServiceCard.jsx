import {
  Search,
  Smartphone,
  BatteryCharging,
  Zap,
  RefreshCw,
  Wrench,
  Shield,
  Monitor,
  Cpu,
  MessageSquare,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const ICON_MAP = {
  search: Search,
  smartphone: Smartphone,
  battery: BatteryCharging,
  zap: Zap,
  software: RefreshCw,
  wrench: Wrench,
  shield: Shield,
  monitor: Monitor,
  cpu: Cpu,
};

export default function ServiceCard({ service }) {
  const { name, description, icon } = service;
  const IconComponent = ICON_MAP[icon] || Wrench;

  const whatsappMessage = `Hola, NanoFix. Quisiera realizar una consulta sobre el servicio de ${name}.`;
  const whatsappHref = buildWhatsAppLink(whatsappMessage);

  return (
    <article className="bg-white rounded-xl border border-slate-200/90 p-6 md:p-7 shadow-xs hover:shadow-md hover:border-blue-900 transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200">
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-200 mb-2">{name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-2 border-t border-slate-100">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors group/link"
        >
          <MessageSquare className="w-4 h-4 text-slate-400 group-hover/link:text-blue-900 transition-colors" />
          <span>Consultar</span>
        </a>
      </div>
    </article>
  );
}
