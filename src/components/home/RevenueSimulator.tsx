import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollHighlight } from '../common/ScrollHighlight';
import {
  Calculator,
  TrendingUp,
  Moon,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';

export const RevenueSimulator: React.FC = () => {
  const [businessType, setBusinessType] = useState<'retail' | 'services'>('retail');
  const [currentRevenue, setCurrentRevenue] = useState<number>(120000);
  const [averageTicket, setAverageTicket] = useState<number>(240);

  // Dynamic calculations based on business type
  const onlineGrowthRate = businessType === 'retail' ? 0.32 : 0.40;
  const afterHoursShare = businessType === 'retail' ? 0.48 : 0.35;

  const estimatedAdditionalMonthly = Math.round(currentRevenue * onlineGrowthRate);
  const estimatedOrdersMonthly = Math.max(1, Math.round(estimatedAdditionalMonthly / averageTicket));
  const estimatedAfterHoursRevenue = Math.round(estimatedAdditionalMonthly * afterHoursShare);
  const estimatedAnnualGrowth = estimatedAdditionalMonthly * 12;

  // Format currency
  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz uma simulação de tração comercial na vectio: negócio de ${
      businessType === 'retail' ? 'Varejo/E-commerce' : 'Serviços/B2B'
    }, faturamento atual de ${formatBRL(currentRevenue)} e potencial de +${formatBRL(
      estimatedAdditionalMonthly
    )}/mês no digital. Gostaria de um diagnóstico personalizado!`
  );

  return (
    <section id="simulador" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200/80">
      <div className="site-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-royal mb-4"
          >
            <Calculator className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Simulador Interativo de Tração</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B4F] leading-tight mb-4">
            Descubra o{' '}
            <ScrollHighlight variant="marker" color="blue" delay={0.2}>
              potencial oculto
            </ScrollHighlight>{' '}
            de receita do seu negócio
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Mova os controles abaixo para simular o faturamento adicional que canais diretos
            e páginas de alta conversão podem desbloquear.
          </p>
        </div>

        {/* Main Interactive Tool Widget on #F8FAFC */}
        <div className="max-w-5xl mx-auto rounded-[24px] border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(11,27,79,0.07)]">
          {/* Segmented Control: Business Type (Responsive Wrap with Accessible 44px Touch Targets) */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex flex-col sm:flex-row p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-xs w-full sm:w-auto gap-1">
              <button
                onClick={() => setBusinessType('retail')}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 min-h-[44px] rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  businessType === 'retail'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#0B1B4F]'
                }`}
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Varejo Físico &amp; Produtos</span>
              </button>

              <button
                onClick={() => setBusinessType('services')}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 min-h-[44px] rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  businessType === 'services'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#0B1B4F]'
                }`}
              >
                <Briefcase className="w-4 h-4 shrink-0" />
                <span>Serviços &amp; Empresas B2B</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Sliders in Clean White Card */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 bg-white p-5 sm:p-7 rounded-[20px] border border-slate-200/80 shadow-xs">
              {/* Slider 1: Faturamento Atual */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label htmlFor="currentRevenue" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#475569]">
                    Faturamento Mensal Atual (Balcão / Offline)
                  </label>
                  <span className="text-sm sm:text-base font-black text-[#2563EB]">
                    {formatBRL(currentRevenue)}
                  </span>
                </div>
                <input
                  id="currentRevenue"
                  type="range"
                  min={20000}
                  max={600000}
                  step={10000}
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full h-3.5 sm:h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#475569] font-semibold mt-1">
                  <span>R$ 20.000</span>
                  <span>R$ 300.000</span>
                  <span>R$ 600.000+</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label htmlFor="averageTicket" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#475569]">
                    {businessType === 'retail' ? 'Ticket Médio por Pedido' : 'Ticket Médio por Contrato/Serviço'}
                  </label>
                  <span className="text-sm sm:text-base font-black text-[#2563EB]">
                    {formatBRL(averageTicket)}
                  </span>
                </div>
                <input
                  id="averageTicket"
                  type="range"
                  min={businessType === 'retail' ? 50 : 200}
                  max={businessType === 'retail' ? 1200 : 8000}
                  step={businessType === 'retail' ? 10 : 100}
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full h-3.5 sm:h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#475569] font-semibold mt-1">
                  <span>{businessType === 'retail' ? 'R$ 50' : 'R$ 200'}</span>
                  <span>{businessType === 'retail' ? 'R$ 600' : 'R$ 4.000'}</span>
                  <span>{businessType === 'retail' ? 'R$ 1.200+' : 'R$ 8.000+'}</span>
                </div>
              </div>

              {/* Dynamic Insight Banner in Royal Blue */}
              <div className="flex items-start gap-3 p-4 rounded-xl sm:rounded-2xl bg-[#EFF4FF] border border-[#BFD5FE] text-xs text-[#0B1B4F]">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {businessType === 'retail' ? (
                    <>
                      <strong>Varejo Omnicanal:</strong> Compras locais fora do horário comercial representam quase metade do faturamento potencial com estoque que já está na sua loja.
                    </>
                  ) : (
                    <>
                      <strong>Lead Qualification:</strong> Páginas de alta conversão filtram curiosos e entregam contatos prontos para fechar contrato direto no WhatsApp da sua equipe.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Right Column: Calculated Results Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[20px] border border-blue-200/90 bg-white p-5 sm:p-7 shadow-[0_8px_28px_-6px_rgba(37,99,235,0.08)] flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#2563EB] mb-2 block">
                    Projeção de Tração Comercial Estimada
                  </span>

                  {/* Big Estimated Number */}
                  <div className="mb-5 sm:mb-6">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0B1B4F] mb-1">
                      +{formatBRL(estimatedAdditionalMonthly)}
                      <span className="text-base sm:text-lg font-bold text-[#475569]"> /mês</span>
                    </div>
                    <div className="text-xs text-[#475569] font-medium">
                      Impacto adicional projetado sobre o faturamento atual
                    </div>
                  </div>

                  {/* Micro Metrics Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-100 mb-5 sm:mb-6">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#475569] mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{businessType === 'retail' ? 'Novos Pedidos' : 'Novos Leads Qualif.'}</span>
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#0B1B4F]">
                        ~{estimatedOrdersMonthly}
                        <span className="text-xs font-normal text-[#475569]"> /mês</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#475569] mb-1">
                        <Moon className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Vendas Noturnas</span>
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#2563EB]">
                        {formatBRL(estimatedAfterHoursRevenue)}
                      </div>
                    </div>
                  </div>

                  {/* Annual projection pill */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 text-xs mb-5 sm:mb-6">
                    <span className="text-[#475569] font-semibold">Potencial anual acumulado:</span>
                    <span className="font-extrabold text-[#0B1B4F]">+{formatBRL(estimatedAnnualGrowth)} /ano</span>
                  </div>
                </div>

                {/* CTA Button in Living Royal Blue with Glow Aura */}
                <a
                  href={`https://wa.me/5514996131152?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-glow-aura w-full text-xs sm:text-sm py-3 px-4 sm:py-3.5 sm:px-6 min-h-[48px] group"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span className="sm:hidden font-bold">Validar Projeção no WhatsApp</span>
                  <span className="hidden sm:inline font-bold">Validar essa Projeção com um Especialista</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSimulator;
