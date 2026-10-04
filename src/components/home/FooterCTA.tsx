import React from 'react';
import { ArrowRight, MessageSquare, MapPin, Phone, Mail, Clock, Building2, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { VectioLogo } from '../common/VicboLogo';
import { ScrollHighlight } from '../common/ScrollHighlight';

// =========================================================================
// CONFIGURAÇÃO NAP (NAME, ADDRESS, PHONE) & LOCAL SEO
// Sincronizado estritamente com os dados Schema.org LocalBusiness no index.html
// e com o Perfil da Empresa no Google (Google Meu Negócio).
// =========================================================================
const COMPANY_NAP = {
  legalName: 'Vectio',
  commercialName: 'Vectio — Agência de E-commerce & Canais Digitais',
  cnpj: '', // Não cadastrado ainda
  phone: '(14) 99613-1152',
  phoneRaw: '+5514996131152',
  email: 'victorbozza@outlook.com',
  address: {
    street: 'Rua Hermínio Cavalari, 739',
    complement: 'Bloco 10, Apto 1024',
    neighborhood: 'Sítios de Recreio Céu Azul',
    city: 'Marília',
    state: 'SP',
    postalCode: '17526-100',
    country: 'Brasil',
  },
  openingHours: 'Segunda a Sexta: 08h00 às 18h00',
  serviceAreas: ['Marília', 'Garça', 'Vera Cruz', 'Pompeia', 'Oriente', 'Bauru'],
};

export const FooterCTA: React.FC = () => {
  return (
    <footer id="contato" className="relative pt-12 sm:pt-16 md:pt-24 pb-12 bg-[#080C1A] text-white border-t border-slate-800/80 overflow-hidden">
      <div className="site-container relative z-10">
        {/* Fundory Signature Closing CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] p-5 sm:p-10 lg:p-14 mb-12 sm:mb-16 text-center overflow-hidden shadow-[0_16px_48px_rgba(37,99,235,0.35)]"
        >
          {/* Subtle Translucent Vectio "V" Brand Watermark in the Corner */}
          <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-10 w-48 h-48 sm:w-68 sm:h-68 lg:w-84 lg:h-84 pointer-events-none select-none opacity-[0.13] sm:opacity-[0.16] z-0 transform rotate-[-4deg]">
            <img
              src="/images/vectio-symbol.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>

          <div className="relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>Diagnóstico com a Agência</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-3.5 max-w-2xl mx-auto">
            Pronto para uma agência como a da Vectio assumir a{' '}
            <ScrollHighlight variant="marker" color="white" delay={0.25}>
              criação do seu canal digital?
            </ScrollHighlight>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-xl mx-auto leading-relaxed mb-7 sm:mb-8">
            Fale diretamente com o consultor de negócios da Vectio e descubra como
            vamos estruturar, integrar e posicionar a sua empresa no mercado online em Marília e região.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-md sm:max-w-none mx-auto">
            {/* Primary CTA with Living White Shimmer & WhatsApp Bounce */}
            <a
              href={`https://wa.me/${COMPANY_NAP.phoneRaw.replace('+', '')}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20posicionamento%20digital%20com%20a%20ag%C3%AAncia%20vectio%20em%20Mar%C3%ADlia!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dynamic w-full sm:w-auto bg-white text-[#2563EB] hover:bg-[#EFF4FF] border border-white shadow-[0_8px_28px_rgba(11,27,79,0.22)] text-xs sm:text-sm py-3 px-4 sm:py-3.5 sm:px-7 min-h-[48px] group transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
              </span>
              <MessageSquare className="w-4 h-4 text-[#2563EB] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 shrink-0" strokeWidth={2.5} />
              <span className="sm:hidden font-bold">Conversar no WhatsApp</span>
              <span className="hidden sm:inline font-bold">Conversar com a Agência no WhatsApp (DDD 14)</span>
            </a>

            {/* Secondary CTA: Crisp Translucent Pill */}
            <a
              href="#agencia"
              className="btn btn-dynamic w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/35 text-xs sm:text-sm py-3 px-4 sm:py-3.5 sm:px-7 min-h-[48px] group transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="font-bold">Conhecer a Agência</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>

        {/* =========================================================================
            LOCAL SEO & NAP DATA SECTION (NAME, ADDRESS, PHONE & LOCAL AUTHORITY)
            Rigidly synchronized with Schema.org LocalBusiness / Google Business Profile
           ========================================================================= */}
        <div className="pt-10 pb-8 sm:py-12 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-xs">
            {/* Col 1: Identidade Institucional & Atuação */}
            <div>
              <div className="mb-3.5">
                <VectioLogo size="sm" variant="dark" />
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Agência especializada em posicionamento de lojistas e prestadores de serviços no canal digital. Estruturamos lojas virtuais completas com ERP integrado e páginas de vendas em Marília e cidades vizinhas.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Empresa Homologada no Google</span>
              </div>
            </div>

            {/* Col 2: Dados Oficiais NAP (Sede Física & Fiscal) */}
            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3.5 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Sede &amp; Dados Cadastrais (NAP)</span>
              </div>
              <ul className="space-y-2.5 text-slate-300">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Endereço Comercial:</span>
                    <span>{COMPANY_NAP.address.street} — {COMPANY_NAP.address.complement}</span>
                    <span className="block text-slate-400">{COMPANY_NAP.address.neighborhood} • {COMPANY_NAP.address.city}/{COMPANY_NAP.address.state}</span>
                    <span className="text-[11px] text-slate-400">CEP: {COMPANY_NAP.address.postalCode}</span>
                  </div>
                </li>
                {COMPANY_NAP.cnpj ? (
                  <li className="text-[11px] text-slate-400 pt-1">
                    <span className="block font-medium text-slate-300">Razão Social: {COMPANY_NAP.legalName}</span>
                    <span>CNPJ: {COMPANY_NAP.cnpj}</span>
                  </li>
                ) : (
                  <li className="text-[11px] text-slate-400 pt-1">
                    <span className="block font-medium text-slate-300">{COMPANY_NAP.commercialName}</span>
                    <span className="text-slate-400">Marília e Região • Atendimento Comercial &amp; Digital</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Col 3: Atendimento Comercial Local (DDD 14) */}
            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3.5 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Contato Regional (DDD 14)</span>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a
                    href={`tel:${COMPANY_NAP.phoneRaw}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#60A5FA] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400">Atendimento Telefônico / WhatsApp:</span>
                      <span className="font-bold text-white text-sm">{COMPANY_NAP.phone}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY_NAP.email}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#60A5FA] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400">E-mail Corporativo:</span>
                      <span className="font-medium text-slate-200">{COMPANY_NAP.email}</span>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                  <span>{COMPANY_NAP.openingHours}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Cidades e Regiões Atendidas em SP (SEO Local Cobertura) */}
            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3.5 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Cidades Atendidas em SP</span>
              </div>
              <p className="text-slate-400 text-xs mb-3">
                Estruturamos canais e prestamos consultoria presencial e remota na macrorregião:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_NAP.serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[11px] hover:border-[#60A5FA]/40 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#60A5FA]" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Structural Area */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center">
              <VectioLogo size="sm" variant="dark" />
            </a>
            <span className="w-px h-3.5 bg-white/15" />
            <span className="tracking-wide text-slate-400">Agência de Posicionamento &amp; Canais Digitais em Marília e Região</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#solucoes" className="hover:text-white transition-colors duration-200 font-medium min-h-[44px] inline-flex items-center py-2">
              Soluções
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200 font-medium min-h-[44px] inline-flex items-center py-2">
              Termos &amp; Privacidade
            </a>
          </div>

          <span className="tracking-wide text-slate-400">
            © {new Date().getFullYear()} {COMPANY_NAP.legalName}. Marília/SP. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
