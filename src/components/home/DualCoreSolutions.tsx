import React, { useState } from 'react';
import {
  ShoppingCart,
  Truck,
  CreditCard,
  RotateCcw,
  FileText,
  Zap,
  MessageSquare,
  Target,
  ArrowRight,
  Layers,
  CheckCircle,
  Database,
  Rocket,
  ShieldCheck,
  Sparkles,
  Clock,
  Store,
  Users,
  Check,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollHighlight } from '../common/ScrollHighlight';

interface SolutionFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SolutionPlanData {
  id: string;
  isSpotlight?: boolean;
  spotlightBadge?: string;
  planName: string;
  planTagline: string;
  categoryTag: string;
  deliverableStatus: string;
  timelineEstimate: string;
  targetAudience: string;
  targetIcon: React.ReactNode;
  subtitle: string;
  features: SolutionFeature[];
  ctaText: string;
  mobileCtaText: string;
  ctaHref: string;
  guarantees: string[];
}

const plans: SolutionPlanData[] = [
  {
    id: 'plan-ecommerce',
    isSpotlight: false,
    planName: 'Plano Loja Virtual & Vendas',
    planTagline: 'Criação Completa de E-commerce para Varejo',
    categoryTag: 'Para Lojas Físicas & Varejo',
    deliverableStatus: 'Implantação Completa',
    timelineEstimate: '15 a 20 dias úteis',
    targetAudience: 'Lojas de roupas, calçados, autopeças, cosméticos e varejo de produtos.',
    targetIcon: <Store className="w-3.5 h-3.5 text-[#2563EB]" />,
    subtitle:
      'Criação e desenvolvimento completo da sua loja virtual pela equipe da Vectio. Estrutura profissional com catálogo de produtos, sistema de gestão ERP (sob análise), cálculo de frete local (motoboy e transportadoras), pagamento rápido via Pix e vendas ativas 24 horas por dia.',
    features: [
      {
        icon: <ShoppingCart className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Criação e Desenvolvimento Completo',
        desc: 'Loja virtual construída do zero pela equipe da Vectio com design profissional sob medida.',
      },
      {
        icon: <Database className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Sistema de Gestão ERP (Sob Análise)',
        desc: 'Conexão e sincronização com sistemas de gestão compatíveis (Bling / Tiny) mediante análise técnica.',
      },
      {
        icon: <Truck className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Frete e Logística Local Inteligente',
        desc: 'Cálculo dinâmico de taxa de motoboy por bairro/CEP, transportadoras e opção de retirada na loja.',
      },
      {
        icon: <CreditCard className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Pagamento em 1 Clique com Pix e Antifraude',
        desc: 'Finalização de compra rápida e segura, com geração de código Pix na hora e aprovação imediata.',
      },
      {
        icon: <RotateCcw className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Recuperação de Vendas no WhatsApp',
        desc: 'Mensagens automáticas para resgatar compras iniciadas e elevar o faturamento da sua loja.',
      },
    ],
    ctaText: 'Contratar Plano Loja Virtual',
    mobileCtaText: 'Contratar Loja Virtual',
    ctaHref: '#contato',
    guarantees: ['Sem comissões sobre suas vendas', 'Loja 100% de propriedade sua', 'Acompanhamento pós-lançamento'],
  },
  {
    id: 'plan-landing-page',
    isSpotlight: true,
    spotlightBadge: '★ PLANO EM DESTAQUE · RÁPIDA ATIVAÇÃO',
    planName: 'Plano Página de Alta Conversão',
    planTagline: 'Página Comercial para Captação de Clientes',
    categoryTag: 'Para Prestadores de Serviços & Clínicas',
    deliverableStatus: 'Alta Conversão',
    timelineEstimate: '7 a 10 dias úteis',
    targetAudience: 'Clínicas, consultorias, escritórios, prestadores de serviços e empresas em geral.',
    targetIcon: <Users className="w-3.5 h-3.5 text-[#2563EB]" />,
    subtitle:
      'Estruturação completa de uma página comercial de resposta rápida focada em transformar visitantes em clientes no WhatsApp da sua empresa. Textos persuasivos que quebram objeções de compra, carregamento em menos de 1 segundo e captação qualificada para vendas.',
    features: [
      {
        icon: <FileText className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Comunicação Persuasiva & Quebra de Objeções',
        desc: 'Estrutura comercial com textos pensados para responder dúvidas e levar o cliente a pedir um orçamento.',
      },
      {
        icon: <Rocket className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Velocidade Extrema (Menos de 1 segundo)',
        desc: 'Carregamento instantâneo no celular para não perder nenhum cliente vindo de anúncios na internet.',
      },
      {
        icon: <MessageSquare className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Botão de WhatsApp & Contato Direto',
        desc: 'Botões destacados e formulário direto para que o interessado fale imediatamente com você.',
      },
      {
        icon: <Target className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Rastreamento de Anúncios e Vendas',
        desc: 'Configuração de métricas no Google e redes sociais para saber exatamente o retorno do seu investimento.',
      },
      {
        icon: <Zap className="w-4 h-4 text-[#2563EB]" strokeWidth={2} />,
        title: 'Design Exclusivo e Alta Autoridade',
        desc: 'Aparência moderna e profissional desenvolvida sob medida para transmitir segurança ao cliente.',
      },
    ],
    ctaText: 'Contratar Página de Alta Conversão',
    mobileCtaText: 'Contratar Página de Conversão',
    ctaHref: '#contato',
    guarantees: ['Entrega rápida em 7 a 10 dias', 'Preparada para anúncios no Google e redes sociais', 'Suporte com consultor de negócios'],
  },
];

interface PipelineStep {
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlights: string[];
}

const steps: PipelineStep[] = [
  {
    step: '01',
    title: 'Sincronização & Integração',
    subtitle: 'Conexão de ERP (sob análise), meios de frete e catálogo online sem duplicidade.',
    icon: <Database className="w-5 h-5 text-[#2563EB]" />,
    highlights: [
      'Integração com Bling, Tiny e plataformas de gestão compatíveis',
      'Configuração de raio logístico local (retirada no balcão e motoboy)',
      'Pagamento com finalização rápida e transparente sem desvios',
    ],
  },
  {
    step: '02',
    title: 'Engenharia de Conversão',
    subtitle: 'Desenvolvimento da loja ou página com foco em velocidade, clareza e vendas.',
    icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
    highlights: [
      'Carregamento instantâneo no celular (<1.0s) certificado',
      'Textos persuasivos estruturados para quebra de objeções imediatas',
      'Pix com código gerado na hora e cartão seguro antifraude',
    ],
  },
  {
    step: '03',
    title: 'Otimização & SEO Estrutural',
    subtitle: 'Implementação adequada de SEO para a sua página de vendas ou apresentação.',
    icon: <Search className="w-5 h-5 text-[#2563EB]" />,
    highlights: [
      'Otimização de SEO on-page para buscas locais e termos do seu segmento',
      'Estrutura semântica de títulos, meta tags e sitemap indexável para o Google',
      'Página de vendas ou apresentação preparada para ranquear nos buscadores',
    ],
  },
];

export const DualCoreSolutions: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <>
      {/* 7. SEÇÃO DOS PLANOS (TOM PASTEL AZUL SUAVE #F0F5FD COM CARDS 100% BRANCOS) */}
      <section id="solucoes" className="relative py-16 sm:py-20 md:py-28 bg-[#F0F5FD] border-t border-blue-100/70 overflow-hidden">
        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="badge-royal mb-4 sm:mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>Planos de Contratação Vectio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1B4F] leading-tight mb-4 sm:mb-5"
            >
              <ScrollHighlight variant="underline" color="blue" delay={0.2}>
                Dois motores de receita.
              </ScrollHighlight>{' '}
              <span className="text-[#475569]">Entregues e operados pela agência.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
              className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto"
            >
              Conheça os dois planos oficiais para estruturar o canal digital da sua empresa:
              escolha entre a criação e desenvolvimento do seu e-commerce para varejo ou a estruturação da sua landing page de alta conversão para serviços.
            </motion.p>
          </div>

          {/* Dual Plans Bento Cards Grid (Fundo 100% Branco com Salto Visual sobre #F0F5FD) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-9 mb-12 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                className={`relative rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 group bg-white ${
                  plan.isSpotlight
                    ? 'border-2 border-[#2563EB] shadow-[0_20px_50px_-10px_rgba(37,99,235,0.22)] ring-4 ring-[#2563EB]/10'
                    : 'border border-[#BFD5FE]/70 shadow-[0_10px_35px_-8px_rgba(11,27,79,0.06)] hover:border-[#93B9FD] hover:shadow-[0_14px_40px_-6px_rgba(37,99,235,0.12)]'
                }`}
              >
                {/* Spotlight Floating Ribbon */}
                {plan.isSpotlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-3.5 sm:px-4 py-1 rounded-full bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-[0_4px_16px_rgba(37,99,235,0.38)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-yellow-300" />
                    <span>{plan.spotlightBadge}</span>
                  </div>
                )}

                <div>
                  {/* Header Metadata Chips */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4FF] border border-[#BFD5FE]">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2563EB]">
                        {plan.categoryTag}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F8FAFC] border border-slate-200 text-[11px] font-semibold text-[#475569] shadow-xs">
                      <Clock className="w-3 h-3 text-[#2563EB]" />
                      <span>Prazo: {plan.timelineEstimate}</span>
                    </div>
                  </div>

                  {/* Plan Name & Tagline */}
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F] tracking-tight">
                      {plan.planName}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-0.5">
                      {plan.planTagline}
                    </p>
                  </div>

                  {/* Target Audience Pill Box */}
                  <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-[#F8FAFC] border border-slate-200 mb-4 text-xs text-[#334155]">
                    <div className="w-6 h-6 rounded-md bg-[#EFF4FF] border border-[#BFD5FE]/60 flex items-center justify-center shrink-0 mt-0.5">
                      {plan.targetIcon}
                    </div>
                    <div className="leading-snug">
                      <strong className="text-[#0B1B4F] font-bold">Ideal para: </strong>
                      <span>{plan.targetAudience}</span>
                    </div>
                  </div>

                  {/* Commercial Subtitle */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Features List (What Vectio Delivers) */}
                  <div className="space-y-3 mb-6 sm:mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#475569] mb-1">
                      O que está incluso na contratação:
                    </div>
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] bg-[#EFF4FF] border border-[#BFD5FE]/50 flex items-center justify-center shrink-0 mt-0.5">
                          {feature.icon}
                        </div>
                        <div className="text-left">
                          <span className="text-xs sm:text-sm font-bold text-[#0B1B4F] block leading-snug">
                            {feature.title}
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                            {feature.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA Link Button & Assurances */}
                <div className="pt-5 border-t border-slate-100">
                  <a
                    href={plan.ctaHref}
                    className={`btn w-full text-xs sm:text-sm py-3.5 px-4 sm:px-6 min-h-[48px] group ${
                      plan.isSpotlight
                        ? 'btn-primary btn-glow-aura'
                        : 'btn-primary shadow-[0_6px_20px_rgba(37,99,235,0.28)]'
                    }`}
                  >
                    <span className="sm:hidden font-bold">{plan.mobileCtaText}</span>
                    <span className="hidden sm:inline font-bold">{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 shrink-0" />
                  </a>

                  {/* Plan Guarantees Checklist */}
                  <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-[11px] text-[#475569]">
                    {plan.guarantees.map((item, gi) => (
                      <span key={gi} className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Commercial Trust Reassurance Strip in Clean White — 100% Fluid & Mobile-First */}
          <div className="w-full max-w-5xl mx-auto p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-[22px] bg-white border border-blue-100/90 shadow-[0_4px_20px_-4px_rgba(11,27,79,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-0 divide-y md:divide-y-0 divide-slate-100">
              {/* Item 1: Contrato */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 pt-3.5 first:pt-0 md:pt-0 md:pr-4 lg:pr-6 md:border-r md:border-slate-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] shadow-xs flex items-center justify-center shrink-0 border border-[#BFD5FE]/80 mt-0.5 sm:mt-0">
                  <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="font-bold text-xs sm:text-[13px] text-[#0B1B4F] leading-snug">
                    Contrato com Escopo Fechado
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Sem taxas surpresa ou cobranças ocultas
                  </div>
                </div>
              </div>

              {/* Item 2: Entrega */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 pt-3.5 first:pt-0 md:pt-0 md:px-4 lg:px-6 md:border-r md:border-slate-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] shadow-xs flex items-center justify-center shrink-0 border border-[#BFD5FE]/80 mt-0.5 sm:mt-0">
                  <Rocket className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="font-bold text-xs sm:text-[13px] text-[#0B1B4F] leading-snug">
                    Entrega 100% Chave na Mão
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Arquitetura, design e setup técnico inclusos
                  </div>
                </div>
              </div>

              {/* Item 3: Acompanhamento */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 pt-3.5 first:pt-0 md:pt-0 md:pl-4 lg:pl-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] shadow-xs flex items-center justify-center shrink-0 border border-[#BFD5FE]/80 mt-0.5 sm:mt-0">
                  <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="font-bold text-xs sm:text-[13px] text-[#0B1B4F] leading-snug">
                    Acompanhamento Direto
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Suporte com consultor de negócios via WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO METODOLOGIA OPERACIONAL (FUNDO BRANCO PURO #FFFFFF COM ALTO CONTRASTE NAS ABAS) */}
      <section id="metodologia" className="relative py-16 sm:py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
        <div className="site-container relative z-10">
          <div className="rounded-[20px] sm:rounded-[24px] border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-8 lg:p-10 shadow-[0_2px_8px_-2px_rgba(11,27,79,0.04)]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">
                  <Layers className="w-4 h-4" />
                  <span>Metodologia Operacional da Agência</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0B1B4F] tracking-tight">
                  Como nossa agência assume e posiciona o canal online no seu negócio
                </h2>
              </div>
              <span className="text-xs text-[#64748B]">
                Clique nas etapas para explorar a arquitetura:
              </span>
            </div>

            {/* Steps Navigation Bar com Contraste Nítido e Touch Target Adequado */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
              {steps.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-[14px] sm:rounded-[16px] text-left transition-all duration-200 border cursor-pointer min-h-[54px] flex flex-col justify-between ${
                    activeStepIndex === idx
                      ? 'border-2 border-[#2563EB] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.12)]'
                      : 'border border-slate-200 bg-white/70 hover:border-[#BFD5FE] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] sm:text-xs font-black ${
                        activeStepIndex === idx ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                      }`}
                    >
                      PASSO {s.step}
                    </span>
                    <div className="shrink-0">{s.icon}</div>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold truncate ${
                      activeStepIndex === idx ? 'text-[#0B1B4F]' : 'text-[#475569]'
                    }`}
                  >
                    {s.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Details Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-5 sm:p-7 rounded-[16px] sm:rounded-[18px] bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-extrabold">
                        ETAPA {activeStep.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1B4F]">
                        {activeStep.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] mb-4">
                      {activeStep.subtitle}
                    </p>

                    <div className="space-y-2">
                      {activeStep.highlights.map((item, hi) => (
                        <div key={hi} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 lg:pt-0">
                    <a
                      href="#contato"
                      className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm py-3 px-4 sm:py-3.5 sm:px-6 min-h-[48px]"
                    >
                      <span className="sm:hidden font-bold">Implementar essa Etapa</span>
                      <span className="hidden sm:inline font-bold">Quero essa etapa no meu negócio</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default DualCoreSolutions;
