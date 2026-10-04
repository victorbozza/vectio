import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VectioLogo } from '../common/VicboLogo';

const navLinks = [
  { label: 'Por Que Começar', href: '#oportunidade' },
  { label: 'A Agência', href: '#agencia' },
  { label: 'Simulador', href: '#simulador' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      {/* Backdrop Dim Overlay when Mobile Menu is Open */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-[#0B1B4F]/50 -z-10"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Top Navbar Pill (Clean modern frosted glass with balanced contrast & natural drop shadow) */}
      <div
        className={`max-w-[1240px] mx-auto rounded-full transition-all duration-300 ${
          mobileOpen
            ? 'bg-white/95 border border-slate-200 shadow-lg py-2 sm:py-2.5 px-4 sm:px-6'
            : scrolled
            ? 'bg-white/90 hover:bg-white/95 border border-slate-200/80 shadow-[0_10px_30px_-6px_rgba(11,27,79,0.08),0_4px_12px_-2px_rgba(11,27,79,0.04)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/80 hover:bg-white/90 border border-slate-200/60 shadow-[0_4px_20px_-2px_rgba(11,27,79,0.05)] py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo + Agency Tag */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="flex items-center shrink-0 focus:outline-none"
              aria-label="Vectio Home"
            >
              <VectioLogo size="md" variant="default" />
            </a>
            <span className="hidden sm:inline-flex items-center text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#EFF4FF]/80 text-[#2563EB] border border-[#BFD5FE]/80">
              Agência
            </span>
          </div>

          {/* Center: Nav Menu Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-bold text-[#0B1B4F] hover:text-[#2563EB] px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Primary Action Button with Dynamic Living Animation (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="#contato"
              className="btn-glow-aura btn-dynamic bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-2.5 px-5 rounded-full flex items-center gap-2.5 transition-all hover:scale-[1.03] group border border-white/20"
            >
              <span>Falar com a Agência</span>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger / Close Toggle (Accessible >= 44x44px Touch Target with Frosted Glass) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-full text-[#0B1B4F] hover:text-[#2563EB] transition-colors duration-200 border border-slate-200/80 bg-white/80 hover:bg-white shadow-xs cursor-pointer active:scale-95"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#2563EB]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Card (Frosted Glass with High Legibility) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden max-w-[1240px] mx-auto mt-2 rounded-[24px] bg-white/95 border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(11,27,79,0.14)] p-4 sm:p-5 overflow-hidden"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-[15px] font-bold text-[#0B1B4F] hover:text-[#2563EB] px-3.5 py-3 rounded-xl hover:bg-[#EFF4FF] transition-colors duration-150 active:scale-[0.98] min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </a>
              ))}

              {/* Bottom CTA in Mobile Menu */}
              <div className="pt-3 mt-1.5 border-t border-slate-100 space-y-2">
                <a
                  href="#contato"
                  onClick={() => setMobileOpen(false)}
                  className="btn-glow-aura btn-dynamic w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-4 sm:py-3.5 sm:px-6 min-h-[48px] rounded-full flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgba(37,99,235,0.35)] border border-white/20 active:scale-[0.97]"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span>Falar com a Agência</span>
                </a>

                <div className="flex items-center justify-center gap-2 py-1 text-[11px] text-[#64748B] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Atendimento com Consultor de Negócios no WhatsApp</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
