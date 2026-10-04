import React, { useState } from 'react';
import {
  Clock,
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Database,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollHighlight } from '../common/ScrollHighlight';

// ============================================================================
// CONSCIOUSNESS DECK DATA: Lojistas (Produtos) & Empresas de Serviços
// ============================================================================
interface ConsciousnessCard {
  id: string;
  number: string;
  pillar: string;
  shortLabel: string;
  title: string;
  description: string;
  image: string;
  metrics: {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }[];
  cta: string;
  mobileCta: string;
  href: string;
}

const consciousnessCards: ConsciousnessCard[] = [
  {
    id: 'card-1',
    number: '01',
    pillar: 'Pilar 01 — Disponibilidade Contínua',
    shortLabel: 'Operação 24/7',
    title: 'Sua empresa faturando além das 18h00',
    description:
      'Mais de 60% das compras e orçamentos ocorrem fora do horário comercial. Enquanto sua loja física fecha e a equipe descansa, nossa agência deixa seu canal direto posicionado para vender produtos no checkout automático e captar clientes qualificados 24 horas por dia.',
    image: '/images/commerce-live.jpg',
    metrics: [
      {
        icon: TrendingUp,
        text: '+64% das compras ocorrem fora do horário comercial',
      },
      {
        icon: Clock,
        text: 'Checkout automático e captação de leads operando 24/7',
      },
    ],
    cta: 'ESTRUTURAR MEU CANAL 24/7 COM A AGÊNCIA',
    mobileCta: 'Estruturar Canal 24/7',
    href: '#contato',
  },
  {
    id: 'card-2',
    number: '02',
    pillar: 'Pilar 02 — Comportamento do Consumidor',
    shortLabel: 'Busca no Google',
    title: 'A decisão de compra começa na tela do celular',
    description:
      'Oito em cada dez clientes pesquisam no Google antes de ir até o estabelecimento físico ou contratar um serviço. Nossa agência posiciona sua empresa no topo das buscas com uma página rápida, oficial e desenhada para transformar buscas em vendas imediatas.',
    image: '/images/burger-restaurant.jpg',
    metrics: [
      {
        icon: Search,
        text: '82% dos consumidores pesquisam no Google antes de comprar',
      },
      {
        icon: CheckCircle2,
        text: 'Posicionamento oficial com catálogo e contato em 1 clique',
      },
    ],
    cta: 'DOMINAR AS BUSCAS LOCAIS COM A AGÊNCIA',
    mobileCta: 'Dominar Buscas Locais',
    href: '#contato',
  },
  {
    id: 'card-3',
    number: '03',
    pillar: 'Pilar 03 — Fator de Consciência',
    shortLabel: 'Ativo Próprio',
    title: 'Terra alugada vs. Ativo comercial próprio',
    description:
      'Vender só por rede social ou marketplace é pagar até 20% de taxas e viver à mercê de quedas de algoritmo. Nossa agência estrutura o canal direto próprio da sua empresa: margem 100% sua e clientes que são seu patrimônio comercial exclusivo.',
    image: '/images/digital-sovereignty.jpg',
    metrics: [
      {
        icon: ShieldCheck,
        text: 'Margem 100% sua: zero taxas de 20% para intermediários',
      },
      {
        icon: Database,
        text: 'Base de clientes própria: ativo patrimonial protegido',
      },
    ],
    cta: 'CONSTRUIR MEU ATIVO PRÓPRIO COM A AGÊNCIA',
    mobileCta: 'Construir Ativo Próprio',
    href: '#contato',
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export const RetailOpportunitySection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="oportunidade" className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#F3F7FD] border-t border-slate-200/60">
      <div className="site-container relative z-10">
        {/* Section Header: Motivos para Lojistas e Empresas de Serviços Começarem Hoje */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="badge-royal mb-4 sm:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Por Que Começar Hoje</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B4F] leading-tight mb-4 sm:mb-5"
          >
            Seu cliente pesquisa e toma decisões online todos os dias.{' '}
            <span className="text-[#2563EB]">
              A pergunta é: ele encontra sua empresa ou fecha com o{' '}
              <ScrollHighlight variant="underline" color="blue" delay={0.25}>
                concorrente?
              </ScrollHighlight>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto"
          >
            Mais de 80% das decisões de compra e contratações de serviços começam na tela de um celular.
            Seja você um lojista com estoque físico ou uma empresa de serviços especializada, adiar seu canal direto
            significa entregar faturamento diário na mão de quem já está no ar.
          </motion.p>
        </div>

        {/* Mobile Quick Selector Tabs (< 768px) in Clean White & Azul Royale (Accessible 44px Touch Targets) */}
        <div className="md:hidden flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-white border border-blue-100 mb-4 shadow-sm">
          {consciousnessCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveCard(idx)}
              className={`flex-1 py-2 px-1.5 rounded-xl text-[11px] font-black transition-all text-center truncate min-h-[44px] flex items-center justify-center ${
                activeCard === idx
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'text-[#64748B] hover:text-[#0B1B4F]'
              }`}
            >
              {card.shortLabel}
            </button>
          ))}
        </div>

        {/* Desktop & Tablet: Interactive Expanding Accordion Gallery Deck - Pure White Card on Brand Soft Blue Background */}
        <div className="w-full md:h-[500px] lg:h-[530px] flex flex-col md:flex-row items-stretch gap-3 lg:gap-4 p-2 sm:p-3.5 md:p-3.5 lg:p-5 rounded-[28px] bg-white border border-blue-100 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.08)] relative overflow-hidden mb-12 sm:mb-16 select-none">

          {consciousnessCards.map((card, index) => {
            const isActive = activeCard === index;

            return (
              <React.Fragment key={card.id}>
                {/* Active Expanded Card (Clean White Surface with Royal Blue Accents) */}
                {isActive ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    className="flex-1 min-w-0 rounded-[22px] bg-white border border-[#BFD5FE] overflow-hidden flex flex-col md:flex-row items-stretch p-4 lg:p-6 gap-5 lg:gap-6 relative shadow-[0_20px_45px_-10px_rgba(37,99,235,0.12)]"
                  >
                    {/* Left Column: Big Image with Rounded Corners & Explicit Dimensions for CLS */}
                    <div className="w-full md:w-[46%] h-[220px] sm:h-[260px] md:h-full rounded-[18px] overflow-hidden relative shrink-0 shadow-md group bg-slate-100">
                      <motion.img
                        src={card.image}
                        alt={`${card.title} — Estruturação de canal digital e vendas online Vectio`}
                        width={600}
                        height={400}
                        loading="lazy"
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/40 via-transparent to-black/10 pointer-events-none" />

                      {/* Pillar Badge Overlay on Image in Royal Blue */}
                      <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[#0B1B4F] text-[11px] font-black flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                        <span>{card.pillar.split(' — ')[1]}</span>
                      </div>
                    </div>

                    {/* Right Column: Badges, Title, Copy & Royal Blue Double-Arrow CTA */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1 lg:py-2">
                      {/* Top Metrics Badges Stack in Azul Royale & Leve Cinza */}
                      <div className="flex flex-col gap-2 mb-3">
                        {card.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#BFD5FE] bg-[#EFF4FF] text-[#0B1B4F] shadow-xs self-start max-w-full"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <metric.icon className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-bold text-[#0B1B4F]">
                              {metric.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Card Title in Midnight Navy */}
                      <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-black text-[#0B1B4F] leading-tight mb-2.5 tracking-tight">
                        {card.title}
                      </h3>

                      {/* Card Description in Neutral Slate Gray */}
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                        {card.description}
                      </p>

                      {/* Bottom Action Button: Living Azul Royale Pill with White Circular Arrow Badges */}
                      <a
                        href={card.href}
                        className="btn-glow-aura btn-dynamic inline-flex items-center justify-between sm:justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[48px] rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto mt-auto group border border-white/20 text-center"
                      >
                        <span className="hidden sm:flex w-5 h-5 rounded-full bg-white text-[#2563EB] items-center justify-center font-bold shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-1 shadow-xs">
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span className="sm:hidden">{card.mobileCta}</span>
                        <span className="hidden sm:inline">{card.cta}</span>
                        <span className="w-5 h-5 rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 shadow-xs">
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Inactive Collapsed Card - Clean Enterprise Accordion Tab (No Squished Images) */
                  <motion.div
                    layout
                    onClick={() => setActiveCard(index)}
                    onMouseEnter={() => setActiveCard(index)}
                    className="hidden md:flex w-20 lg:w-24 shrink-0 h-full rounded-[22px] overflow-hidden relative cursor-pointer group border border-slate-200/90 hover:border-[#2563EB]/60 bg-white hover:bg-[#F8FAFC] transition-all duration-300 ease-out select-none flex-col justify-between items-center py-7 shadow-xs hover:shadow-md"
                  >
                    {/* Top Number Badge in Soft Royal Blue Accent */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-[#EFF4FF] border border-[#BFD5FE] text-[#0B1B4F] flex items-center justify-center text-xs font-black shadow-xs group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-105 transition-all duration-300">
                      {card.number}
                    </div>

                    {/* Vertical Label at Bottom */}
                    <span className="relative z-10 text-xs font-black tracking-widest text-[#475569] group-hover:text-[#2563EB] uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap transition-colors duration-300">
                      {card.shortLabel}
                    </span>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 4. CARD DE TRANSIÇÃO / DIAGNÓSTICO RÁPIDO (PONTE VISUAL PARA O BLOCO ESCURO) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-[24px] p-[1.5px] bg-gradient-to-r from-[#2563EB]/40 via-indigo-500/25 to-[#080C1A]/40 shadow-[0_16px_40px_-12px_rgba(11,27,79,0.08)]"
        >
          <div className="rounded-[22px] bg-white p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EFF4FF] border border-[#BFD5FE] text-[10px] sm:text-[11px] font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>Próximo Passo · Diagnóstico Rápido</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#0B1B4F] mb-1">
                Deixe nossa agência posicionar o canal online da sua empresa.
              </h4>
              <p className="text-xs sm:text-sm text-[#475569]">
                Seja para vender produtos com ERP integrado (sob análise) ou fechar contratos de serviços com previsibilidade, nossa agência assume toda a estruturação técnica e comercial.
              </p>
            </div>

            <a
              href="#contato"
              className="btn btn-primary btn-glow-aura w-full md:w-auto text-xs sm:text-sm shrink-0 py-3 px-4 sm:py-3.5 sm:px-7 min-h-[48px] group"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="sm:hidden font-bold">Solicitar Diagnóstico</span>
              <span className="hidden sm:inline font-bold">Solicitar Diagnóstico com a Agência</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailOpportunitySection;
