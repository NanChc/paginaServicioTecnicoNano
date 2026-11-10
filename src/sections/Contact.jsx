import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import Button from '../components/Button.jsx';
import { businessConfig } from '../config/business.js';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deviceType: 'Celular',
    service: '',
    problemDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, ingresá tu nombre completo.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, ingresá tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un formato de correo electrónico válido.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, ingresá un número de teléfono de contacto.';
    }

    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = 'Por favor, contanos brevemente qué le sucede al equipo.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Estado local: preparación de consulta sin backend
    // Aquí en el futuro se puede invocar una API REST o webhook (ej. fetch('/api/contact', ...))
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      deviceType: 'Celular',
      service: '',
      problemDescription: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Construir mensaje para WhatsApp a partir de los datos cargados en el formulario
  const preparedWhatsappMessage = `Hola, NanoFix. Mi nombre es ${formData.fullName}. Quiero consultar por un ${formData.deviceType}${formData.service ? ` (${formData.service})` : ''
    }. Detalle del problema: ${formData.problemDescription}. Mi teléfono de contacto es: ${formData.phone}.`;

  const continueWhatsappUrl = buildWhatsAppLink(preparedWhatsappMessage);

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna izquierda: Información institucional de contacto */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Contacto
              </h2>
              <div className="w-12 h-1 bg-blue-900 mt-3 rounded-full mb-6" />
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Estamos listos para ayudarte. Completá el formulario o
                contactanos por WhatsApp para un diagnóstico inmediato.
              </p>
            </div>

            {/* Tres tarjetas de contacto */}
            <div className="space-y-4">
              {/* Tarjeta WHATSAPP */}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-blue-900 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    WHATSAPP
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {businessConfig.whatsappNumber}
                  </div>
                </div>
              </a>

              {/* Tarjeta EMAIL */}
              <a
                href={`mailto:${businessConfig.email}`}
                className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-blue-900 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    EMAIL
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {businessConfig.email}
                  </div>
                </div>
              </a>

              {/* Tarjeta UBICACIÓN */}
              <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    UBICACIÓN
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {businessConfig.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario de contacto en tarjeta blanca */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    ¡Consulta preparada con éxito!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Hemos preparado los detalles de tu consulta. Podés
                    continuar directamente por WhatsApp para una respuesta
                    inmediata de nuestro equipo técnico.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Button
                    href={continueWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    icon={<MessageSquare className="w-5 h-5" />}
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Continuar por WhatsApp
                  </Button>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Nueva consulta
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Nombre completo y Correo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.fullName
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@email.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Teléfono y Tipo de dispositivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="11 1234 5678"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.phone
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="deviceType"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Tipo de dispositivo
                    </label>
                    <select
                      id="deviceType"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-slate-400 transition-colors cursor-pointer"
                    >
                      <option value="Celular">Celular</option>
                      <option value="Computadora">Computadora</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Servicio solicitado */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Servicio solicitado
                  </label>
                  <input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Ej. Cambio de pantalla"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-slate-400 transition-colors"
                  />
                </div>

                {/* Descripción del problema */}
                <div>
                  <label
                    htmlFor="problemDescription"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Descripción del problema
                  </label>
                  <textarea
                    id="problemDescription"
                    name="problemDescription"
                    rows={4}
                    value={formData.problemDescription}
                    onChange={handleChange}
                    placeholder="Contanos brevemente qué le sucede al equipo..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${errors.problemDescription
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                  />
                  {errors.problemDescription && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.problemDescription}
                    </p>
                  )}
                </div>

                {/* Botón Enviar consulta */}
                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    Enviar consulta
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
