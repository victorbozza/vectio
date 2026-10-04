import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Search,
  Smartphone,
  MessageSquare,
  Clock,
  Layers,
  Users,
  Video,
  Building2,
  Headphones,
  Image as ImageIcon,
  Check,
} from 'lucide-react';
import { GoogleMeetSimulator } from './GoogleMeetSimulator';
import { ScrollHighlight } from '../common/ScrollHighlight';

interface TimelineStep {
  id: string;
  stepNumber: string;
  phase: string;
  duration: string;
  tabLabel: string;
  shortTabLabel: string;
  title: string;
  description: string;
  clientAction: string;
  agencyAction: string;
  ctaText: string;
  mobileCtaText: string;
  demoType: 'search' | 'experience' | 'kickoff' | 'account';
}

const timelineSteps: TimelineStep[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    phase: 'Etapa 01 — Diagnóstico Comercial',
    duration: 'Etapa 01',
    tabLabel: '1. Diagnóstico Comercial',
    shortTabLabel: 'Diagnóstico',
    title: 'Diagnóstico Comercial: Dominância no Google para Lojas, Estabelecimentos e Empresas',
    description:
      'Mais de 80% das decisões de compra e contratações começam no Google. Seja para um estabelecimento local, loja de produtos ou empresa de serviços, nossa agência mapeia a demanda da sua cidade, audita concorrentes e desenha o plano de posicionamento oficial para colocar sua marca em destaque absoluto.',
    clientAction: 'Participar de uma conversa estratégica e objetiva com o consultor de negócios da Vectio.',
    agencyAction: 'Auditoria de demanda regional, mapeamento de termos de pesquisa e estruturação do posicionamento oficial da sua marca.',
    ctaText: 'SOLICITAR DIAGNÓSTICO COMERCIAL',
    mobileCtaText: 'Solicitar Diagnóstico',
    demoType: 'search',
  },
  {
    id: 'step-2',
    stepNumber: '02',
    phase: 'Etapa 02 — Extensão do Físico ao Digital',
    duration: 'Etapa 02',
    tabLabel: '2. Extensão do Físico ao Digital',
    shortTabLabel: 'Extensão',
    title: 'Uma extensão profissional da sua empresa: do físico ao digital com máximo alinhamento',
    description:
      'Construímos o canal online para ser o mais profissional possível, perfeitamente alinhado à proposta comercial e aos serviços ou produtos do seu estabelecimento ou loja. Trata-se de uma extensão legítima e de alto padrão da sua empresa física: transpondo a mesma credibilidade, autoridade e seriedade presencial para uma plataforma com acabamento institucional impecável.',
    clientAction: 'Apresentar a proposta de valor, portfólio de serviços ou produtos e posicionamento do seu estabelecimento.',
    agencyAction: 'Desenvolvimento da arquitetura digital sob medida, alinhamento direto da proposta comercial e construção da extensão oficial com acabamento profissional impecável.',
    ctaText: 'ESTRUTURAR EXTENSÃO PROFISSIONAL',
    mobileCtaText: 'Estruturar Extensão',
    demoType: 'experience',
  },
  {
    id: 'step-3',
    stepNumber: '03',
    phase: 'Etapa 03 — Kick-off & Alinhamento',
    duration: 'Etapa 03',
    tabLabel: '3. Kick-off & Alinhamento',
    shortTabLabel: 'Kick-off',
    title: 'Reunião de Kick-off e alinhamento direto antes da entrega final',
    description:
      'Antes de publicar o projeto no ar, realizamos uma reunião de kick-off e homologação conjunta com você. Apresentamos a navegação completa, revisamos os fluxos de conversão no WhatsApp e validamos cada detalhe com você para assegurar que a plataforma reflita com perfeição as metas do seu negócio.',
    clientAction: 'Participar da sessão de alinhamento por vídeo ou presencial e aprovar a entrega final.',
    agencyAction: 'Apresentar a plataforma pronta, testar os fluxos práticos com você e alinhar os últimos detalhes antes de colocar no ar.',
    ctaText: 'AGENDAR REUNIÃO DE ALINHAMENTO',
    mobileCtaText: 'Agendar Alinhamento',
    demoType: 'kickoff',
  },
  {
    id: 'step-4',
    stepNumber: '04',
    phase: 'Etapa 04 — Atendimento & Suporte Contínuo',
    duration: 'Etapa 04',
    tabLabel: '4. Atendimento & Suporte',
    shortTabLabel: 'Suporte',
    title: 'Acompanhamento direto com o consultor, suporte ágil e evolução da plataforma',
    description:
      'Após a entrega e ativação da sua presença online, nosso relacionamento continua: você tem contato direto comigo como seu consultor de negócios. Cuidamos da estabilidade técnica, monitoramos o canal, prestamos suporte ágil no WhatsApp e orientamos a evolução contínua da sua empresa no digital.',
    clientAction: 'Focar no atendimento dos clientes e contar com seu consultor de negócios no WhatsApp.',
    agencyAction: 'Atendimento direto com seu consultor de negócios, monitoramento técnico de servidores, suporte rápido e consultoria contínua de melhorias.',
    ctaText: 'FALAR COM O CONSULTOR DE NEGÓCIOS',
    mobileCtaText: 'Falar com Consultor',
    demoType: 'account',
  },
];

export const AgencyRoleSection: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const current = timelineSteps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < timelineSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <section id="agencia" className="relative py-12 sm:py-20 md:py-28 bg-[#080C1A] text-white border-t border-slate-800/80 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Smooth top edge dark aura fusion */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#080C1A] to-transparent pointer-events-none -z-0" />

      <div className="site-container relative z-10">
        {/* Section Header: Linha do Tempo da Agência (WCAG 2.1 AAA Compliant & Balanced Padding) */}
        <div className="max-w-3xl mx-auto text-center py-4 sm:py-6 mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="badge-dark mb-4 sm:mb-5"
          >
            <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Linha do Tempo de Implementação</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight mb-4 sm:mb-6"
          >
            Como nossa agência posiciona sua empresa no canal online,{' '}
            <ScrollHighlight variant="underline" color="sky" delay={0.25}>
              <span className="text-[#93C5FD]">etapa por etapa.</span>
            </ScrollHighlight>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto"
          >
            Um processo estruturado com versatilidade para estabelecimentos, lojas e empresas de serviços:
            você cuida do seu negócio enquanto nossa equipe assume da engenharia à gestão contínua da sua presença digital.
          </motion.p>
        </div>

        {/* =========================================================================
        {/* =========================================================================
            INTERACTIVE HORIZONTAL TIMELINE TRACK (DESKTOP & MOBILE NAVIGATION)
            Unified 4-node progress track on ALL screen sizes with connected active fill line
           ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-14 px-1 sm:px-0">
          {/* Timeline Connector Line and Milestones */}
          <div className="relative">
            {/* Background Base Line - Always visible on all screens */}
            <div className="absolute top-[18px] sm:top-[24px] left-[10%] sm:left-[6%] right-[10%] sm:right-[6%] h-[2.5px] sm:h-[3px] bg-[#1F2937] rounded-full -z-0" />

            {/* Active Blue Progress Fill Line - Always visible on all screens */}
            <div
              className="absolute top-[18px] sm:top-[24px] left-[10%] sm:left-[6%] h-[2.5px] sm:h-[3px] bg-[#1A56DB] shadow-[0_0_12px_rgba(26,86,219,0.8)] rounded-full transition-all duration-500 ease-out -z-0"
              style={{
                width: `${(currentStepIndex / (timelineSteps.length - 1)) * 80}%`,
              }}
            />

            {/* Milestones Row - ALWAYS 4 COLUMNS in a single clean row */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2">
              {timelineSteps.map((step, idx) => {
                const isActive = currentStepIndex === idx;
                const isPast = currentStepIndex > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStepIndex(idx)}
                    className="flex flex-col items-center justify-start text-center group cursor-pointer p-0.5 sm:p-1.5 transition-transform active:scale-95 focus:outline-hidden"
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {/* Node Beacon Circle with Perfect Flexbox Centering */}
                    <div className="relative mb-1.5 sm:mb-3 flex items-center justify-center">
                      <div
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full inline-flex items-center justify-center text-xs sm:text-sm font-extrabold transition-all duration-200 shrink-0 select-none ${
                          isActive
                            ? 'bg-[#1A56DB] text-[#FFFFFF] ring-2 sm:ring-4 ring-[#1A56DB]/40 shadow-lg shadow-blue-700/50 scale-105'
                            : isPast
                            ? 'bg-[#1F2937] border-2 border-[#4B5563] text-[#F3F4F6]'
                            : 'bg-[#1F2937] border-2 border-[#374151] text-[#D1D5DB] group-hover:border-[#6B7280] group-hover:text-white'
                        }`}
                      >
                        <span className="flex items-center justify-center leading-none text-center">
                          {isPast ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#93C5FD]" /> : step.stepNumber}
                        </span>
                      </div>

                      {/* Small Live Pulse on Active Node */}
                      {isActive && (
                        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#3B82F6] animate-ping" />
                      )}
                    </div>

                    {/* Step Duration Pill (Desktop: Etapa 01/02/03/04 | Mobile: Compact text) */}
                    <span
                      className={`inline-flex items-center justify-center text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 sm:mb-1.5 transition-colors text-center ${
                        isActive
                          ? 'bg-[#1A56DB]/30 text-[#93C5FD] border border-[#3B82F6]/50'
                          : 'bg-[#1F2937]/80 text-[#9CA3AF] border border-[#374151]'
                      }`}
                    >
                      <span className="sm:hidden">Etapa {step.stepNumber}</span>
                      <span className="hidden sm:inline">{step.duration}</span>
                    </span>

                    {/* Step Label - Centered below circle */}
                    <span
                      className={`text-[10.5px] sm:text-[13px] font-bold text-center leading-tight transition-colors w-full px-0.5 ${
                        isActive ? 'text-[#F8FAFC]' : 'text-[#6B7280] group-hover:text-[#9CA3AF]'
                      }`}
                    >
                      <span className="sm:hidden">{step.shortTabLabel}</span>
                      <span className="hidden sm:inline">{step.tabLabel}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN INTERACTIVE TIMELINE STAGE (DYNAMIC COCKPIT + NARRATIVE)
            100% Fluid & Mobile-First with generous breathing room on all screens
           ========================================================================= */}
        <div className="w-full rounded-2xl sm:rounded-[28px] bg-[#0A1333] border border-[#1E293B] p-2.5 sm:p-5 lg:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden mb-10 sm:mb-14">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-xl sm:rounded-[22px] bg-[#0E1A40] border border-[#1E3A8A]/50 overflow-hidden flex flex-col lg:flex-row items-stretch p-3.5 sm:p-6 lg:p-8 xl:p-10 gap-6 lg:gap-10 xl:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
            >
              {/* Left Column: Dynamic Visual Demonstration Cockpit */}
              <div className="w-full lg:w-[48%] min-h-[300px] sm:min-h-[360px] rounded-lg sm:rounded-[18px] bg-[#070F2B]/90 border border-white/15 p-2.5 sm:p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-cyan-500/5 pointer-events-none" />

                {/* ===============================================================
                    1. DEMO: Google Search Dominance Mockup (Versatile for Store, Establishment or Company)
                   =============================================================== */}
                {current.demoType === 'search' && (
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Google Search Bar Mockup with Google Branding */}
                      <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm p-2 sm:p-3 mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          {/* Google Authentic Colorful Logo */}
                          <div className="shrink-0 flex items-center select-none font-bold text-xs sm:text-sm tracking-tighter pr-0.5">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC05]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                          </div>

                          {/* Authentic Google Pill Search Bar with Versatile Query */}
                          <div className="flex-1 min-w-0 flex items-center justify-between gap-1 px-2.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#DFE1E5] shadow-[0_1px_3px_rgba(32,33,36,0.1)]">
                            <div className="flex items-center gap-1.5 min-w-0 flex-1">
                              <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9AA0A6] shrink-0" />
                              <span className="text-[10.5px] sm:text-xs text-[#202124] font-medium truncate block">
                                <span className="sm:hidden">sua empresa em <span className="font-semibold text-[#1A73E8]">[cidade]</span></span>
                                <span className="hidden sm:inline">loja ou empresa em <span className="font-semibold text-[#1A73E8]">[sua cidade]</span></span>
                              </span>
                            </div>

                            {/* Google Mic & Lens Icons (compact on mobile) */}
                            <div className="hidden xs:flex items-center gap-1 shrink-0 pl-1 border-l border-slate-200">
                              <svg className="w-3 h-3 text-[#4285F4]" viewBox="0 0 24 24" fill="none">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4" />
                                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#34A853" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Google SERP Sub-Navigation Tabs */}
                        <div className="flex items-center justify-between text-[10px] sm:text-[11px] pt-1 border-t border-slate-100 overflow-x-auto no-scrollbar">
                          <div className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap">
                            <span className="flex items-center gap-1 font-semibold text-[#1A73E8] border-b-2 border-[#1A73E8] pb-0.5">
                              <Search className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              Todas
                            </span>
                            <span className="text-[#5F6368] hover:text-[#202124] cursor-pointer">Mapas</span>
                            <span className="text-[#5F6368] hover:text-[#202124] cursor-pointer">Shopping</span>
                            <span className="text-[#5F6368] hover:text-[#202124] cursor-pointer">Imagens</span>
                          </div>
                          <span className="hidden sm:inline text-[10px] text-[#70757A]">
                            Aprox. 480.000 resultados (0,24 s)
                          </span>
                        </div>
                      </div>

                      {/* Google Search Result #1 (Versatile Official Channel) */}
                      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#BFD5FE] shadow-sm relative mb-2.5">
                        <div className="flex items-center justify-between gap-1.5 mb-1.5">
                          <div className="flex items-center gap-1.5 min-w-0 flex-1">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EFF4FF] border border-[#BFD5FE] flex items-center justify-center shrink-0">
                              <span className="text-[9px] sm:text-[10px] font-black text-[#2563EB]">V</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-[11.5px] sm:text-xs font-semibold text-[#202124] leading-tight truncate">
                                  Sua Marca Oficial
                                </span>
                                <span className="px-1 py-0.2 rounded bg-[#EFF4FF] text-[#2563EB] text-[8px] sm:text-[9px] font-black uppercase tracking-wider shrink-0">
                                  Oficial
                                </span>
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-[#4D5156] font-normal block truncate">
                                https://www.suaempresa.com.br
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[8.5px] sm:text-[10px] font-bold text-[#202124] bg-slate-100 px-1.5 py-0.5 rounded">
                              Destaque
                            </span>
                            <span className="text-[#70757A] text-xs font-bold select-none cursor-pointer">⋮</span>
                          </div>
                        </div>

                        {/* Result Title */}
                        <h4 className="text-[12.5px] sm:text-[14px] font-medium text-[#1A0DAB] hover:underline cursor-pointer leading-snug mb-1">
                          Sua Empresa Oficial — Presença Digital e Atendimento Direto
                        </h4>

                        {/* Google Rich Snippet */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[9.5px] sm:text-[11px] mb-1.5">
                          <span className="flex items-center gap-0.5 font-bold text-[#E37400]">
                            <span>★ 4.9</span>
                            <span className="text-amber-500">★★★★★</span>
                            <span className="text-[#70757A] font-normal">(184)</span>
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="text-[#137333] font-semibold">Atendimento online</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-[#4D5156]">WhatsApp</span>
                        </div>

                        {/* Result Snippet Text */}
                        <p className="text-[10.5px] sm:text-xs text-[#4D5156] leading-relaxed mb-2 line-clamp-2 sm:line-clamp-none">
                          Canal oficial de alta conversão para estabelecimentos, lojas e serviços da sua cidade com catálogo e atendimento rápido.
                        </p>

                        {/* Sitelinks - Mobile 1 Col / Desktop 2 Col */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-2 border-t border-slate-100">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 hover:bg-[#EFF4FF]/60 border border-slate-200/80 transition-colors cursor-pointer text-left">
                            <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#1A0DAB] hover:underline block leading-tight">
                              ▷ Catálogo &amp; Soluções
                            </span>
                            <span className="text-[9px] sm:text-[9.5px] text-[#5F6368] block mt-0.5 leading-tight">
                              Consulte produtos, serviços e horários.
                            </span>
                          </div>

                          <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 hover:bg-[#EFF4FF]/60 border border-slate-200/80 transition-colors cursor-pointer text-left">
                            <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#1A0DAB] hover:underline block leading-tight">
                              ▷ Atendimento no WhatsApp
                            </span>
                            <span className="text-[9px] sm:text-[9.5px] text-[#5F6368] block mt-0.5 leading-tight">
                              Fale direto com a equipe comercial.
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Google Result #2 (Competitor without digital channel) */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-500 flex items-center justify-between gap-1.5 opacity-80 mb-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                          <span className="truncate text-[9.5px] sm:text-[10px]">#2 Concorrente local</span>
                        </div>
                        <span className="text-[9px] font-bold text-amber-700 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          -82% visibilidade
                        </span>
                      </div>
                    </div>

                    {/* Bottom Stat Pill with High-Contrast Green Tag */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-bold">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#059669] text-[#F1FFF8] text-[10.5px] sm:text-xs font-extrabold shadow-xs self-start sm:self-auto">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F1FFF8] stroke-[2.5]" />
                        <span>Posição #1 Garantida pela Vectio</span>
                      </span>
                      <span className="text-[#CBD5E1] text-[10px] sm:text-[11px] font-semibold">
                        Versatilidade para Varejo &amp; Serviços
                      </span>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                    2. DEMO: Professional Extension from Physical to Digital
                   =============================================================== */}
                {current.demoType === 'experience' && (
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border border-slate-200 shadow-xs mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#2563EB]" />
                          <span className="text-[11px] sm:text-xs font-bold text-[#0B1B4F]">Extensão do Físico ao Digital</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#EFF4FF] text-[#2563EB] text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0">
                          Padrão Executivo
                        </span>
                      </div>

                      {/* Visual Comparison Stage: Physical Authority vs Digital High-Performance */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                        {/* Physical Operation Card */}
                        <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 sm:pb-2 border-b border-slate-100">
                            <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#64748B]" />
                            <span className="text-[11.5px] sm:text-xs font-extrabold text-[#0B1B4F]">Operação Presencial</span>
                          </div>
                          <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] sm:text-[11px] text-[#475569]">
                            <li className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Proposta comercial e serviços consolidados</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Reputação e autoridade já conquistadas</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Atendimento e padrão de excelência física</span>
                            </li>
                          </ul>
                          <div className="mt-2 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-slate-100 text-[9.5px] sm:text-[10px] font-bold text-[#64748B]">
                            A solidez do seu negócio no mundo físico
                          </div>
                        </div>

                        {/* Digital Extension Card */}
                        <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#BFD5FE] shadow-xs bg-gradient-to-b from-[#EFF4FF]/40 to-white">
                          <div className="flex items-center gap-2 mb-2 pb-1.5 sm:pb-2 border-b border-slate-100">
                            <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
                            <span className="text-[11.5px] sm:text-xs font-extrabold text-[#2563EB]">Extensão Digital Oficial</span>
                          </div>
                          <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] sm:text-[11px] text-[#0B1B4F]">
                            <li className="flex items-start gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Alinhamento total à proposta do seu negócio</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Design corporativo com alta conversão mobile</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>Mesma credibilidade física agora ativa 24/7</span>
                            </li>
                          </ul>
                          <div className="mt-2 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-slate-100 text-[9.5px] sm:text-[10px] font-bold text-[#2563EB]">
                            O canal mais profissional para a sua marca
                          </div>
                        </div>
                      </div>

                      {/* Bridge Banner */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-xs flex flex-col xs:flex-row xs:items-center justify-between gap-1 sm:gap-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] shrink-0" />
                          <span className="text-[#0B1B4F] font-semibold text-[10.5px] sm:text-[11px] truncate">
                            Alinhamento cirúrgico aos produtos e serviços
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-[#2563EB] shrink-0">Arquitetura Vectio</span>
                      </div>
                    </div>

                    {/* Bottom Stat Pill */}
                    <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-1.5 text-xs font-bold">
                      <span className="text-[#94A3B8] text-[10px] sm:text-xs">Posicionamento do canal:</span>
                      <span className="text-[#93C5FD] text-[10px] sm:text-xs font-black uppercase tracking-wide">Extensão Oficial do Físico ao Digital</span>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                    3. DEMO: Kick-off & Alignment Executive Meeting before Launch (Google Meet Simulator)
                   =============================================================== */}
                {current.demoType === 'kickoff' && (
                  <GoogleMeetSimulator />
                )}

                {/* ===============================================================
                    4. DEMO: Dedicated Account Management & Continuous Growth
                   =============================================================== */}
                {current.demoType === 'account' && (
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Account Hub Header */}
                      <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border border-slate-200 shadow-xs mb-2.5 sm:mb-3">
                        <div className="flex items-center gap-2">
                          <Headphones className="w-4 h-4 text-[#2563EB]" />
                          <span className="text-[11px] sm:text-xs font-bold text-[#0B1B4F]">Atendimento Direto com o Consultor</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-black text-[#2563EB] bg-[#EFF4FF] px-2 py-0.5 rounded-full uppercase shrink-0">
                          Suporte Contínuo
                        </span>
                      </div>

                      {/* Account Manager Presence Card */}
                      <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#BFD5FE] shadow-xs mb-2.5 sm:mb-3">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563EB] text-white font-black text-xs flex items-center justify-center shadow-xs shrink-0">
                              CN
                            </div>
                            <div className="min-w-0">
                              <span className="text-[11.5px] sm:text-xs font-extrabold text-[#0B1B4F] block truncate">
                                Seu Consultor de Negócios Vectio
                              </span>
                              <span className="text-[9.5px] sm:text-[10px] text-[#64748B] block truncate">
                                Atendimento pessoal e direto no WhatsApp
                              </span>
                            </div>
                          </div>
                          <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Ativo
                          </span>
                        </div>

                        {/* Real-time Health Metrics */}
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center pt-1">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-[#F8FAFC] border border-slate-200">
                            <span className="text-[9px] sm:text-[9.5px] text-[#64748B] block font-semibold">Uptime</span>
                            <span className="text-[11px] sm:text-xs font-extrabold text-emerald-600">99.98%</span>
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg bg-[#F8FAFC] border border-slate-200">
                            <span className="text-[9px] sm:text-[9.5px] text-[#64748B] block font-semibold">Suporte</span>
                            <span className="text-[11px] sm:text-xs font-extrabold text-[#2563EB]">&lt; 15 min</span>
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg bg-[#F8FAFC] border border-slate-200">
                            <span className="text-[9px] sm:text-[9.5px] text-[#64748B] block font-semibold">Relatórios</span>
                            <span className="text-[11px] sm:text-xs font-extrabold text-[#0B1B4F]">Semanais</span>
                          </div>
                        </div>
                      </div>

                      {/* Continuous Support Feed */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-xs flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                          <span className="text-[#0B1B4F] font-semibold text-[10.5px] sm:text-[11px] truncate">
                            Ajustes, novos banners e suporte sob demanda
                          </span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#64748B] shrink-0">Com 1 mensagem</span>
                      </div>
                    </div>

                    {/* Bottom Stat Pill */}
                    <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-1.5 text-xs font-bold">
                      <span className="text-[#CBD5E1] text-[10px] sm:text-xs">Atendimento pós-entrega:</span>
                      <span className="text-[#93C5FD] text-[10px] sm:text-xs font-black uppercase tracking-wide">Contato direto no WhatsApp</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Timeline Narrative & Division of Responsibility */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-1 lg:py-2">
                <div>
                  {/* Step Eyebrow Badge & Step Counter Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A8A]/50 border border-[#3B82F6]/50 text-[#BFDBFE] text-xs font-black uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                      <span>{current.phase}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#93C5FD]">
                      <Layers className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span>Etapa {currentStepIndex + 1} de {timelineSteps.length}</span>
                    </div>
                  </div>

                  {/* Title (WCAG AAA Legibility: #FFFFFF guaranteed with explicit style and font-black) */}
                  <h3
                    style={{ color: '#FFFFFF' }}
                    className="text-xl sm:text-2xl lg:text-[1.75rem] font-black text-white leading-tight mb-3.5 tracking-tight"
                  >
                    {current.title}
                  </h3>

                  {/* Description (WCAG AAA Legibility: #E2E8F0 slate-200, highly legible on dark blue) */}
                  <p className="text-sm sm:text-[15px] text-[#E2E8F0] leading-relaxed mb-6 font-normal">
                    {current.description}
                  </p>

                  {/* The Division of Responsibility Card on This Step (Accessible Contrast Tokens) */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#070F2B] border border-[#1E2E66] mb-6 space-y-3.5 shadow-inner">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-[#93C5FD] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-white/15">
                        <Users className="w-3.5 h-3.5 text-[#93C5FD]" />
                      </div>
                      <div className="text-xs">
                        <strong className="text-[#F1F5F9] block mb-1 font-bold text-[13px]">
                          Sua única ação nesta etapa:
                        </strong>
                        <span className="text-[#CBD5E1] leading-relaxed text-xs sm:text-[13px] block">
                          {current.clientAction}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-3 border-t border-[#1E2E66]">
                      <div className="w-6 h-6 rounded-full bg-[#1A56DB] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs border border-blue-400/30">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="text-xs">
                        <strong className="text-[#93C5FD] block mb-1 font-bold text-[13px]">
                          O que a Agência Vectio executa por você:
                        </strong>
                        <span className="text-white font-semibold leading-relaxed text-xs sm:text-[13px] block">
                          {current.agencyAction}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation & Action CTA: Structured Hierarchy (Full-width CTA + Dedicated Stepper Bar) */}
                <div className="space-y-3 pt-4 border-t border-[#1E293B]">
                  {/* Primary CTA in High-Contrast Royal Blue (WCAG AA Compliant: #2563EB / Hover: #1D4ED8) */}
                  <a
                    href="#contato"
                    className="btn-glow-aura btn-dynamic flex items-center justify-between sm:justify-center gap-3 w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ease-in-out hover:scale-[1.01] group border border-white/20 text-center"
                  >
                    <span className="w-5 h-5 rounded-full bg-white text-[#1D4ED8] hidden sm:flex items-center justify-center font-bold shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="sm:hidden">{current.mobileCtaText}</span>
                    <span className="hidden sm:inline">{current.ctaText}</span>
                    <span className="w-5 h-5 rounded-full bg-white text-[#1D4ED8] flex items-center justify-center font-bold shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </a>

                  {/* Stepper Navigation Buttons (Previous / Next - Accessible >= 44x44px Touch Targets, Zero Overflow) */}
                  <div className="flex items-center justify-between gap-2 text-xs font-bold pt-0.5">
                    <button
                      onClick={handlePrev}
                      disabled={currentStepIndex === 0}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] min-w-[44px] rounded-xl border transition-all duration-200 ease-in-out ${
                        currentStepIndex === 0
                          ? 'bg-[#1F2937]/40 border-[#374151]/50 text-[#6B7280] cursor-not-allowed opacity-50'
                          : 'bg-[#1F2937] hover:bg-[#374151] border-[#4B5563] text-[#E5E7EB] hover:text-white cursor-pointer shadow-xs'
                      }`}
                      aria-label="Etapa anterior"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Anterior</span>
                    </button>

                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#070F2B] border border-[#1E2E66] text-xs font-semibold whitespace-nowrap">
                      <span className="text-[#94A3B8]">Etapa</span>
                      <span className="font-extrabold text-[#93C5FD]">{currentStepIndex + 1}</span>
                      <span className="text-[#94A3B8]">de</span>
                      <span className="font-extrabold text-white">{timelineSteps.length}</span>
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={currentStepIndex === timelineSteps.length - 1}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] min-w-[44px] rounded-xl border transition-all duration-200 ease-in-out ${
                        currentStepIndex === timelineSteps.length - 1
                          ? 'bg-[#1F2937]/40 border-[#374151]/50 text-[#6B7280] cursor-not-allowed opacity-50'
                          : 'bg-[#1F2937] hover:bg-[#374151] border-[#4B5563] text-[#E5E7EB] hover:text-white cursor-pointer shadow-xs'
                      }`}
                      aria-label="Próxima etapa"
                    >
                      <span>Próxima</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AgencyRoleSection;
