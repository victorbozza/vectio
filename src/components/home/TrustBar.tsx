import React from 'react';

const partners = [
  'Shopify',
  'VTEX',
  'Meta Verified',
  'Google Partner',
  'Mercado Pago',
  'PagSeguro',
  'Melhor Envio',
  'RD Station',
  'Bling ERP',
  'Tiny ERP',
  'Hubspot',
  'Kangu',
];

export const TrustBar: React.FC = () => {
  return (
    <section className="relative py-7 sm:py-8 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="site-container mb-3.5 sm:mb-4">
        <div className="flex items-center justify-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#64748B] font-extrabold text-center">
            Ecossistema &amp; Conexões Homologadas
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </div>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee gap-3 sm:gap-5 items-center py-1">
          {/* First sequence */}
          {partners.map((name, idx) => (
            <div
              key={`p1-${idx}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl bg-white border border-[rgba(37,99,235,0.12)] text-[#0B1B4F] shadow-[0_2px_6px_-2px_rgba(11,27,79,0.04)] hover:border-[#93B9FD] hover:shadow-[0_6px_20px_-4px_rgba(37,99,235,0.12)] transition-all duration-200 cursor-default group shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
              <span className="text-xs sm:text-sm font-bold text-[#0B1B4F] whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}

          {/* Duplicated sequence for seamless infinite loop */}
          {partners.map((name, idx) => (
            <div
              key={`p2-${idx}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl bg-white border border-[rgba(37,99,235,0.12)] text-[#0B1B4F] shadow-[0_2px_6px_-2px_rgba(11,27,79,0.04)] hover:border-[#93B9FD] hover:shadow-[0_6px_20px_-4px_rgba(37,99,235,0.12)] transition-all duration-200 cursor-default group shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
              <span className="text-xs sm:text-sm font-bold text-[#0B1B4F] whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
