import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle2, Send } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phone?: string; // Number with country code, e.g. '5514996131152'
  formattedPhone?: string; // e.g. '(14) 99613-1152'
  defaultMessage?: string;
  consultantName?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phone = '5514996131152',
  formattedPhone = '(14) 99613-1152',
  defaultMessage = 'Olá! Estava no site da Vectio e gostaria de mais informações sobre as soluções de e-commerce e canais digitais.',
  consultantName = 'Consultoria Vectio',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-show preview card after a gentle delay for high conversion
  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('vectio_wa_dismissed');
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(false);
    setHasInteracted(true);
    sessionStorage.setItem('vectio_wa_dismissed', 'true');
  };

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[950] flex flex-col items-end select-none pointer-events-none"
      aria-label="Atendimento via WhatsApp"
    >
      {/* =========================================================================
          INTERACTIVE PROACTIVE CHAT PREVIEW CARD (LEAD CONVERSION CARD)
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            className="pointer-events-auto mb-3.5 w-[310px] sm:w-[340px] max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_16px_40px_-8px_rgba(11,27,79,0.18),0_4px_16px_rgba(37,99,235,0.06)] overflow-hidden text-left"
          >
            {/* Card Header (Brand Synergy with Royal Deep Palette) */}
            <div className="bg-gradient-to-r from-[#0B1B4F] via-[#0E2368] to-[#1D4ED8] p-3.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 shadow-inner">
                  <img
                    src="/images/vectio-symbol.png"
                    alt="Vectio"
                    className="w-5 h-5 object-contain filter brightness-0 invert"
                  />
                  {/* Real-time Green Beacon */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E] border-2 border-[#0B1B4F]" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs tracking-tight text-white font-display">
                      {consultantName}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" fill="#38BDF8" color="#0B1B4F" />
                  </div>
                  <span className="text-[10px] text-blue-200/90 font-medium block">
                    Marília e Região • Atendimento Online
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Fechar balão"
                aria-label="Fechar balão"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Message Bubble Body */}
            <div className="p-3.5 space-y-3 bg-[#F8FAFC]">
              <div className="bg-white rounded-xl rounded-tl-sm p-3 border border-slate-200/80 shadow-xs">
                <p className="text-xs text-[#334155] leading-relaxed">
                  Olá! 👋 Precisa de apoio para estruturar o seu <strong className="text-[#0B1B4F] font-semibold">e-commerce</strong> ou <strong className="text-[#0B1B4F] font-semibold">canais digitais</strong>?
                </p>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Converse diretamente com o nosso especialista em Marília e solicite um diagnóstico.
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#94A3B8] font-medium">
                  <Clock className="w-3 h-3 text-[#22C55E]" />
                  <span>Online agora • Resposta rápida</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action Inside Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false);
                  sessionStorage.setItem('vectio_wa_dismissed', 'true');
                }}
                className="btn btn-dynamic w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-[0_4px_14px_rgba(34,197,94,0.35)] flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Conversar no WhatsApp</span>
                <Send className="w-3 h-3 ml-auto opacity-80" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MAIN FLOATING TRIGGER BUTTON (PULSING BEACON & DYNAMIC TOOLTIP)
          ========================================================================= */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        {/* Subtle Pill Tooltip on Desktop */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(11,27,79,0.08)] cursor-pointer hover:border-slate-300 hover:shadow-md transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-xs font-bold text-[#0B1B4F] tracking-tight font-display">
                Fale no WhatsApp
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Circular Anchor */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp com a Vectio"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#16A34A] via-[#22C55E] to-[#25D366] text-white shadow-[0_8px_28px_rgba(34,197,94,0.42),0_4px_12px_rgba(11,27,79,0.12)] hover:shadow-[0_12px_36px_rgba(34,197,94,0.55),0_6px_16px_rgba(11,27,79,0.18)] transition-all duration-300 border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-[#22C55E]/40"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#22C55E] opacity-35 animate-ping pointer-events-none -z-10"
            style={{ animationDuration: '3s' }}
          />

          {/* SVG WhatsApp Official Glyph */}
          <WhatsAppIcon className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-white transition-transform duration-300 drop-shadow-sm group-hover:scale-105" />

          {/* Real-time Online Indicator Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
          </span>
        </motion.a>
      </div>
    </div>
  );
};

// =========================================================================
// OFFICIAL HIGH-FIDELITY WHATSAPP VECTOR ICON
// =========================================================================
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default WhatsAppFloatingButton;
