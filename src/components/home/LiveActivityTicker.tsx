import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShoppingBag, Zap, ChevronRight } from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'sale' | 'lead' | 'recovery';
  title: string;
  value: string;
  detail: string;
  time: string;
  icon: React.ReactNode;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    type: 'sale',
    title: 'Pedido Online Aprovado (Pix)',
    value: 'R$ 489,00',
    detail: 'Retirada no Balcão • Moda & Vestuário',
    time: 'agora',
    icon: <ShoppingBag className="w-3.5 h-3.5 text-[#2563EB]" />,
  },
  {
    id: 2,
    type: 'lead',
    title: 'Lead Qualificado B2B',
    value: 'Contrato Anual',
    detail: 'Consultoria Tributária • WhatsApp Direto',
    time: 'há 2 min',
    icon: <Zap className="w-3.5 h-3.5 text-[#2563EB]" />,
  },
  {
    id: 3,
    type: 'recovery',
    title: 'Carrinho Abandonado Recuperado',
    value: 'R$ 1.280,00',
    detail: 'Automação Ativa • Autopeças & Acessórios',
    time: 'há 4 min',
    icon: <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />,
  },
  {
    id: 4,
    type: 'sale',
    title: 'Venda Fora do Horário Comercial (22h14)',
    value: 'R$ 740,00',
    detail: 'Entrega Expressa Local • Cosméticos',
    time: 'há 7 min',
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />,
  },
];

export const LiveActivityTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = activities[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  return (
    <div
      className="inline-flex items-center max-w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#BFD5FE] shadow-[0_2px_8px_-2px_rgba(11,27,79,0.04)] hover:border-[#2563EB] transition-colors duration-200 max-w-full">
        {/* Pulsing Live indicator in Royal Blue */}
        <div className="flex items-center gap-1.5 shrink-0 pl-0.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#2563EB]">
            Ao Vivo
          </span>
        </div>

        <div className="w-px h-3.5 bg-[#E2E8F0] shrink-0" />

        {/* Animated event item */}
        <div className="h-5 overflow-hidden min-w-0 flex-1 sm:min-w-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs min-w-0"
            >
              <div className="shrink-0">{current.icon}</div>
              <span className="font-semibold text-[#0B1B4F] truncate max-w-[110px] xs:max-w-[150px] sm:max-w-none">
                {current.title}:
              </span>
              <span className="font-bold text-[#2563EB] shrink-0">
                {current.value}
              </span>
              <span className="hidden sm:inline text-[#64748B] text-[11px] truncate">
                ({current.detail})
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skip button indicator */}
        <button
          onClick={handleNext}
          className="text-[#94A3B8] hover:text-[#2563EB] transition-colors min-h-[32px] min-w-[32px] sm:min-h-[36px] sm:min-w-[36px] flex items-center justify-center -mr-1 shrink-0"
          title="Próxima notificação em tempo real"
          aria-label="Avançar notificação"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default LiveActivityTicker;
