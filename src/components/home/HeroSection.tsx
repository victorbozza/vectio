import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollHighlight } from '../common/ScrollHighlight';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-36 md:pt-44 pb-0 overflow-hidden bg-white text-[#0B1B4F]">
      {/* =========================================================================
          ARCHITECTURAL PRECISION CANVAS & CENTRAL FOCAL RADIANCE
          Engineered for high-end B2B contrast on pure white background:
          Structured Cartesian coordinate grid, micro-dots, central diffuse light dome,
          and architectural alignment framing that draws immediate optical focus to the headline.
         ========================================================================= */}

      {/* 1. Structural Horizon Line Guide (Directly Anchoring Below Navbar) */}
      <div className="hero-horizon-line" />

      {/* 2. Precision Cartesian Coordinate Grid (Radially Masked to melt into white at edges) */}
      <div className="absolute inset-0 hero-precision-grid pointer-events-none select-none z-0" />

      {/* 3. Micro-Dot Intersection Matrix (Subtle Royal Tint for Structural Texture) */}
      <div className="absolute inset-0 hero-dot-matrix pointer-events-none select-none z-0" />

      {/* 4. Top-Down Directional Light Conic (Simulates High-End Studio Spotlight) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(37, 99, 235, 0.08) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 80%)',
        }}
      />

      {/* 5. Central Optical Focal Aura (Soft Blue & Sky Cyan Diffuse Light Dome Behind H1) */}
      <div className="hero-focal-aura z-0" />

      {/* 6. Precision Architectural Crosshairs & Framing Rails (Desktop >= 1024px) */}
      <div className="hidden lg:block absolute inset-0 max-w-5xl mx-auto pointer-events-none select-none z-0">
        {/* Top-Left Coordinate Mark */}
        <div className="absolute top-28 left-4 flex items-center justify-center text-slate-300/80 font-mono text-[11px]">
          <span>+</span>
        </div>
        {/* Top-Right Coordinate Mark */}
        <div className="absolute top-28 right-4 flex items-center justify-center text-slate-300/80 font-mono text-[11px]">
          <span>+</span>
        </div>
        {/* Bottom-Left Coordinate Mark */}
        <div className="absolute bottom-28 left-4 flex items-center justify-center text-slate-300/80 font-mono text-[11px]">
          <span>+</span>
        </div>
        {/* Bottom-Right Coordinate Mark */}
        <div className="absolute bottom-28 right-4 flex items-center justify-center text-slate-300/80 font-mono text-[11px]">
          <span>+</span>
        </div>
        {/* Subtle Vertical Symmetrical Alignment Rails */}
        <div className="absolute top-24 bottom-16 left-4 w-px bg-gradient-to-b from-transparent via-slate-200/60 to-transparent" />
        <div className="absolute top-24 bottom-16 right-4 w-px bg-gradient-to-b from-transparent via-slate-200/60 to-transparent" />
      </div>

      {/* 3D Floating Ecosystem Assets — Desktop (>= 1280px): Symmetrically Flanking the Hero without Obstructing Reading */}
      <div className="hidden xl:block absolute inset-0 max-w-[1560px] 2xl:max-w-[1760px] mx-auto pointer-events-none select-none z-20">
        {/* Left Floating 3D E-Commerce Cart Asset (Produtos) */}
        <motion.div
          initial={{ opacity: 0, x: -70, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-2 xl:left-4 2xl:left-8 top-[38%] 2xl:top-[40%] -translate-y-1/2"
        >
          <motion.div
            animate={{
              y: [0, -16, 0],
              rotate: [-1, 2, -1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-[210px] xl:w-[240px] 2xl:w-[280px]"
          >
            {/* 3D Cart Asset */}
            <img
              src="/images/floating-cart.png"
              alt="Desenvolvimento de e-commerce e catálogo online para venda de produtos em Marília"
              width={280}
              height={280}
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,27,79,0.16)]"
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating Status Pill: Positioned to the Top-Left to Keep Center Text Completely Clear */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className="absolute -top-3.5 left-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
              <span className="text-[10.5px] font-black text-[#0B1B4F] tracking-tight whitespace-nowrap">
                <span className="text-[#2563EB] font-extrabold">Produtos</span>
                <span className="mx-1 text-slate-300">·</span>
                <span>+1 Venda Despachada</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Floating 3D Conversion & Services Asset (Serviços) */}
        <motion.div
          initial={{ opacity: 0, x: 70, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-2 xl:right-4 2xl:right-8 top-[38%] 2xl:top-[40%] -translate-y-1/2"
        >
          <motion.div
            animate={{
              y: [-16, 0, -16],
              rotate: [1.5, -1.5, 1.5],
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-[195px] xl:w-[225px] 2xl:w-[265px]"
          >
            {/* 3D Services Asset */}
            <img
              src="/images/floating-services.png"
              alt="Páginas de alta conversão e captação de leads para empresas de serviços em Marília e região"
              width={265}
              height={265}
              className="w-full h-auto object-contain drop-shadow-[0_22px_40px_rgba(24,76,230,0.16)]"
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating Status Pill: Positioned to the Top-Right to Keep Center Text Completely Clear */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
              className="absolute -top-3.5 right-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
              <span className="text-[10.5px] font-black text-[#0B1B4F] tracking-tight whitespace-nowrap">
                <span className="text-[#2563EB] font-extrabold">Serviços</span>
                <span className="mx-1 text-slate-300">·</span>
                <span>+1 Lead Qualificado</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="site-container relative z-10">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Subtle Diffuse White Light Backplate (Guarantees Pristine Typography Contrast) */}
          <div
            className="absolute -inset-x-4 sm:-inset-x-12 -inset-y-8 rounded-3xl -z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.6) 60%, transparent 100%)',
            }}
          />

          {/* Top Social Proof Pill (Directly below Navbar dock - Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_12px_rgba(11,27,79,0.06)] hover:border-slate-300 transition-all duration-200 mb-5 sm:mb-8 max-w-[95%] sm:max-w-none mx-auto"
          >
            {/* Executive Avatars Stack */}
            <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white shadow-xs">
                V
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 border border-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white shadow-xs">
                T
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-700 border border-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white shadow-xs">
                ★
              </div>
            </div>

            {/* Live Indicator + Rating Stat & Local SEO Geo Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#0B1B4F] truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
              <span className="shrink-0">4.9 ★★★★★</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#64748B] font-semibold truncate">Agência Digital em Marília/SP</span>
            </div>
          </motion.div>

          {/* H1 — Fundory Typography: Midnight Navy + Italic Royal Blue Editorial Serif Accent (Local SEO Optimized) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="text-[1.65rem] xs:text-[1.85rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-[#0B1B4F] leading-[1.2] sm:leading-[1.14] mb-4 sm:mb-6 max-w-3xl lg:max-w-4xl mx-auto text-balance px-2 sm:px-1 break-words"
          >
            Canais diretos para quem vende{' '}
            <ScrollHighlight variant="editorial" color="blue" delay={0.25}>
              produtos
            </ScrollHighlight>
            .
            <br className="hidden sm:inline" /> Páginas de alta conversão para quem vende{' '}
            <ScrollHighlight variant="editorial" color="blue" delay={0.45}>
              serviços
            </ScrollHighlight>{' '}
            em Marília e Região.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: 'easeOut' }}
            className="text-[13.5px] sm:text-lg md:text-xl text-[#475569] max-w-[680px] mx-auto leading-relaxed mb-6 sm:mb-8 text-pretty px-2 sm:px-0"
          >
            A agência especializada em posicionar lojistas e prestadores de serviços de Marília e região no comando do seu próprio canal online — estruturando loja virtual com ERP integrado, checkout inteligente e SEO local de ponta a ponta.
          </motion.p>

          {/* Mobile / Tablet Responsive Dual Showcase: Produtos & Serviços (< 1280px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="xl:hidden flex items-center justify-center gap-4 sm:gap-8 my-5 sm:my-8 select-none pointer-events-none px-2"
          >
            {/* Left Pillar: Produtos (Cart) */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-1, 1.5, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-[85px] sm:w-[115px]"
              >
                <img
                  src="/images/floating-cart.png"
                  alt="Criação de loja virtual e catálogo de produtos com ERP integrado em Marília"
                  width={115}
                  height={115}
                  className="w-full h-auto object-contain drop-shadow-[0_8px_14px_rgba(11,27,79,0.1)]"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
              <div className="mt-2 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white border border-slate-200 text-[9.5px] sm:text-[10px] font-bold text-[#0B1B4F] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
                <span><strong className="text-[#2563EB] font-extrabold">Produtos</strong> · +1 Venda</span>
              </div>
            </div>

            {/* Center Dynamic Bridge */}
            <div className="flex flex-col items-center gap-1 opacity-30">
              <div className="w-px h-5 bg-slate-300" />
              <span className="text-[10px] font-extrabold text-[#2563EB]">&amp;</span>
              <div className="w-px h-5 bg-slate-300" />
            </div>

            {/* Right Pillar: Serviços (Consultant / Conversion) */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [-6, 0, -6],
                  rotate: [1.5, -1, 1.5],
                }}
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-[85px] sm:w-[115px]"
              >
                <img
                  src="/images/floating-services.png"
                  alt="Desenvolvimento de landing page de alta conversão para serviços em Marília e região"
                  width={115}
                  height={115}
                  className="w-full h-auto object-contain drop-shadow-[0_8px_14px_rgba(11,27,79,0.1)]"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
              <div className="mt-2 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white border border-slate-200 text-[9.5px] sm:text-[10px] font-bold text-[#0B1B4F] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
                <span><strong className="text-[#2563EB] font-extrabold">Serviços</strong> · +1 Lead</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons Duo (Touch-friendly min-h-[48px]) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-sm sm:max-w-none mx-auto w-full px-2 sm:px-0"
          >
            {/* Left Button: Living Azul Royale Pill with Glow Aura & Dynamic Arrow Badge */}
            <a
              href="#contato"
              className="btn-glow-aura btn-dynamic w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3.5 sm:gap-4 px-4 sm:px-7 py-3 sm:py-3.5 min-h-[48px] rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] group border border-white/20"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span>Falar com a Agência</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold shrink-0 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-12" />
              </span>
            </a>

            {/* Right Button: Leve Cinza / Branco Pill with Shimmer & Animated Blue Pulse */}
            <a
              href="#simulador"
              className="btn-dynamic w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-4 sm:px-7 py-3 sm:py-3.5 min-h-[48px] rounded-full bg-white hover:bg-slate-50 text-[#0B1B4F] text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 shadow-sm hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-300 hover:scale-[1.03] group"
            >
              <span className="sm:hidden">Calcular Potencial</span>
              <span className="hidden sm:inline">Calcular Potencial de Receita</span>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. BARRA DE PARCEIROS (VTEX, Bling, Shopify, Mercado Pago...) */}
      <div className="w-full bg-[#FAFCFF] border-y border-slate-200/60 py-7 sm:py-8 relative z-10">
        <div className="site-container">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#475569] text-center mb-5 sm:mb-6">
            Aprovado pelas principais plataformas do ecossistema
          </p>

          {/* Static Centered Partner Logos (Mobile-first wrapping with balanced row gaps) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 md:gap-x-12 gap-y-4 sm:gap-y-6 text-[#475569]">
            {/* Shopify */}
            <div className="flex items-center gap-2 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <svg className="w-4 h-4 fill-current text-[#95BF47]" viewBox="0 0 24 24">
                <path d="M15.337 2.012c-.085-.054-.194-.038-.261.037L12.44 5.04H8.48l-1.02 2.68H3.59c-.19 0-.35.15-.36.34l-.04.59L.02 19.34c-.02.26.17.48.43.5l14.39 1.13c.25.02.47-.16.5-.42l3.41-18.06c.03-.17-.07-.33-.23-.39l-3.18-.09zM10.82 3.65l1.69-1.92 1.45.04-1.28 2.03-1.86-.15z" />
              </svg>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">Shopify</span>
            </div>

            {/* VTEX */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <span className="w-2 h-2 rounded-full bg-[#EC008C]" />
              <span className="font-black text-xs sm:text-sm tracking-tight text-[#0B1B4F]">VTEX</span>
            </div>

            {/* Meta Verified */}
            <div className="flex items-center gap-2 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <svg className="w-4 h-4 fill-current text-[#0081FB]" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">Meta</span>
            </div>

            {/* Google Partner */}
            <div className="flex items-center gap-2 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">Google Partner</span>
            </div>

            {/* Mercado Pago */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <span className="w-2 h-2 rounded-full bg-[#009EE3]" />
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">Mercado Pago</span>
            </div>

            {/* Hubspot */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <span className="w-2 h-2 rounded-full bg-[#FF7A59]" />
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">Hubspot</span>
            </div>

            {/* RD Station */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1B4F] transition-colors duration-200 cursor-default opacity-80 hover:opacity-100">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0B1B4F]">RD Station</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
