import { businessConfig } from '../config/business.js';

/**
 * Genera el enlace de WhatsApp para iniciar conversación con el mensaje indicado.
 * @param {string} [message] - Mensaje a enviar. Si no se indica, usa defaultMessage de la configuración.
 * @returns {string} URL formateada para WhatsApp Web / App.
 */
export function buildWhatsAppLink(message = businessConfig.defaultMessage) {
  const textToSend = message || businessConfig.defaultMessage;
  const encodedMessage = encodeURIComponent(textToSend);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodedMessage}`;
}

export default buildWhatsAppLink;
