import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  Mic,
  MonitorUp,
  Hand,
  Smile,
  PhoneOff,
  MoreVertical,
  CheckCircle2,
  ShieldCheck,
  Users,
} from 'lucide-react';

interface FloatingReaction {
  id: number;
  emoji: string;
  left: number;
}

export const GoogleMeetSimulator: React.FC = () => {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);
  const [seconds, setSeconds] = useState(28);

  const captions = [
    '« Validando identidade visual, catálogo e fluxos diretos do WhatsApp... »',
    '« Performance mobile homologada com abertura ultrarrápida (<0.8s)! »',
    '« Tudo aprovado! Plataforma 100% pronta para publicação oficial. »',
  ];

  // Rotate closed captions every 3.6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCaptionIndex((prev) => (prev + 1) % captions.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [captions.length]);

  // Subtle live meeting call timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Spawn Google Meet floating reaction emojis
  useEffect(() => {
    const emojiPool = ['👏', '👍', '🚀', '✨', '❤️'];
    const timer = setInterval(() => {
      const newReaction: FloatingReaction = {
        id: Date.now() + Math.random(),
        emoji: emojiPool[Math.floor(Math.random() * emojiPool.length)],
        left: 20 + Math.random() * 60,
      };
      setReactions((prev) => [...prev.slice(-3), newReaction]);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        {/* ===============================================================
            GOOGLE MEET CALL WINDOW
           =============================================================== */}
        <div className="rounded-xl sm:rounded-2xl bg-[#1E1F22] border border-slate-700/80 shadow-2xl overflow-hidden mb-2.5 sm:mb-3">
          {/* Meet Window Top Bar */}
          <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#17181A] border-b border-white/10 flex items-center justify-between gap-1.5 sm:gap-2">
            {/* Left: Google Meet Logo & Meeting Code */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              {/* Authentic Google Meet Camera Icon */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                  <path fill="#00832d" d="M37 24v11c0 2.2-1.8 4-4 4H11c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v11z" />
                  <path fill="#0066da" d="M37 24l8-6v18l-8-6z" />
                  <path fill="#e53935" d="M33 9H15c-2.2 0-4 1.8-4 4v2h26v-2c0-2.2-1.8-4-4-4z" />
                  <path fill="#ffb300" d="M37 29v6c0 2.2-1.8 4-4 4H15c-2.2 0-4-1.8-4-4v-6h26z" />
                  <path fill="#00ac47" d="M11 15h26v14H11z" />
                </svg>
              </div>

              <div className="flex items-center gap-1.5 truncate">
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight">Google Meet</span>
                <span className="hidden xs:inline-block text-[9px] sm:text-[10px] text-slate-400 font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                  vec-homologacao
                </span>
              </div>
            </div>

            {/* Right: REC Indicator, Timer & Participants */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Blinking REC Badge */}
              <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-[9px] sm:text-[10px] font-bold text-red-300">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500" />
                </span>
                <span>REC</span>
              </div>

              {/* Call Timer */}
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 font-semibold">
                14:{seconds < 10 ? `0${seconds}` : seconds}
              </span>

              {/* Participant Pill */}
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-[9px] sm:text-[10px] font-semibold text-slate-300">
                <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#60A5FA]" />
                <span>2</span>
              </div>
            </div>
          </div>

          {/* ===============================================================
              VIDEO TILES DUAL GRID (CONSULTANT + CLIENT)
             =============================================================== */}
          <div className="p-1.5 sm:p-2.5 bg-[#121316]">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
              {/* TILE 1: Consultor Vectio (Active Speaker) */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900 ring-2 ring-emerald-500/90 shadow-[0_0_16px_rgba(16,185,129,0.35)] group">
                <img
                  src="/images/meet-consultant.jpg"
                  alt="Consultor Vectio falando na reunião do Google Meet"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Overlay: Screen Sharing Indicator */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex items-center gap-1 px-1 sm:px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[8px] sm:text-[9px] font-semibold text-[#93C5FD]">
                  <MonitorUp className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#60A5FA] shrink-0" />
                  <span className="truncate">Apresentando</span>
                </div>

                {/* Bottom Overlay: Name & Animated Equalizer Speaking Wave */}
                <div className="absolute bottom-1 sm:bottom-2 inset-x-1 sm:inset-x-2 flex items-center justify-between px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[8.5px] sm:text-[10px]">
                  <div className="flex items-center gap-1 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-bold truncate text-[9px] sm:text-[10.5px]">Consultor</span>
                  </div>

                  {/* Real-time Dancing Audio Waveform */}
                  <div className="flex items-end gap-0.5 h-2.5 sm:h-3 px-1 py-0.5 rounded bg-emerald-500/30 border border-emerald-400/40 shrink-0">
                    <motion.span
                      animate={{ height: ['4px', '10px', '5px', '9px', '4px'] }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-0.5 bg-emerald-400 rounded-full inline-block"
                    />
                    <motion.span
                      animate={{ height: ['8px', '4px', '11px', '5px', '8px'] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                      className="w-0.5 bg-emerald-400 rounded-full inline-block"
                    />
                    <motion.span
                      animate={{ height: ['4px', '11px', '3px', '8px', '4px'] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                      className="w-0.5 bg-emerald-400 rounded-full inline-block"
                    />
                  </div>
                </div>
              </div>

              {/* TILE 2: Você / Sua Empresa (Client) */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900 border border-white/15 group">
                <img
                  src="/images/meet-client.jpg"
                  alt="Você participando da reunião do Google Meet"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Overlay: Connection Quality */}
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex items-center gap-1 px-1 sm:px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[8px] sm:text-[9px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>1080p HD</span>
                </div>

                {/* Floating Emojis Animation (Google Meet Reaction Style) */}
                <AnimatePresence>
                  {reactions.map((r) => (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, y: 10, scale: 0.5 }}
                      animate={{ opacity: [0, 1, 1, 0], y: -40, scale: [0.5, 1.25, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.2, ease: 'easeOut' }}
                      style={{ left: `${r.left}%` }}
                      className="absolute bottom-4 sm:bottom-5 text-sm sm:text-lg pointer-events-none z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] select-none"
                    >
                      {r.emoji}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Bottom Overlay: Client Name & Mic Icon */}
                <div className="absolute bottom-1 sm:bottom-2 inset-x-1 sm:inset-x-2 flex items-center justify-between px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[8.5px] sm:text-[10px]">
                  <span className="font-bold truncate text-[9px] sm:text-[10.5px]">Você (Cliente)</span>
                  <div className="p-0.5 rounded-full bg-white/15 text-slate-200">
                    <Mic className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================================================
                LIVE TRANSCRIPTION / CLOSED CAPTION BAR
               =============================================================== */}
            <div className="mt-1.5 sm:mt-2 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-black/80 border border-white/10 flex items-center gap-1.5 sm:gap-2">
              <span className="text-[8px] sm:text-[9px] font-black text-white bg-[#1A73E8] px-1.5 py-0.2 rounded shrink-0">
                CC
              </span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={captionIndex}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="text-[9.5px] sm:text-[10.5px] text-slate-200 font-medium truncate"
                >
                  <span className="text-[#93C5FD] font-bold">Consultor: </span>
                  {captions[captionIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* ===============================================================
              AUTHENTIC GOOGLE MEET BOTTOM CONTROL BAR
             =============================================================== */}
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-[#17181A] border-t border-white/10 flex items-center justify-center gap-1.5 sm:gap-2.5">
            {/* Mic Button */}
            <div className="p-1 sm:p-2 rounded-full bg-[#3C4043] hover:bg-[#474A4E] text-white transition-colors cursor-pointer" title="Microfone ativo">
              <Mic className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>

            {/* Camera Button */}
            <div className="p-1 sm:p-2 rounded-full bg-[#3C4043] hover:bg-[#474A4E] text-white transition-colors cursor-pointer" title="Câmera ligada">
              <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>

            {/* Screen Share Button (Active Blue) */}
            <div className="p-1 sm:p-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white transition-colors cursor-pointer shadow-xs" title="Apresentando tela">
              <MonitorUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>

            {/* Raise Hand Button */}
            <div className="p-1 sm:p-2 rounded-full bg-[#3C4043] hover:bg-[#474A4E] text-white transition-colors cursor-pointer" title="Levantar a mão">
              <Hand className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>

            {/* Reactions Button */}
            <div className="p-1 sm:p-2 rounded-full bg-[#3C4043] hover:bg-[#474A4E] text-white transition-colors cursor-pointer" title="Reações">
              <Smile className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>

            {/* End Call Button (Google Red) */}
            <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#EA4335] hover:bg-[#D93025] text-white transition-colors cursor-pointer flex items-center justify-center shadow-xs" title="Sair da chamada">
              <PhoneOff className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>
        </div>

        {/* ===============================================================
            HOMOLOGATION APPROVAL MINI-CHECKLIST
           =============================================================== */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#BFD5FE] shadow-sm mb-2.5 sm:mb-3">
          <div className="flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-slate-100 text-xs">
            <span className="font-extrabold text-[#0B1B4F] text-[11px] sm:text-[11.5px]">Itens Homologados em Conjunto</span>
            <span className="text-[9.5px] sm:text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded">
              Alinhamento Concluído
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[9.5px] sm:text-[10px] font-semibold text-[#0B1B4F]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">Identidade &amp; Catálogo</span>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[9.5px] sm:text-[10px] font-semibold text-[#0B1B4F]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">Rotas de WhatsApp</span>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[9.5px] sm:text-[10px] font-semibold text-[#0B1B4F]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">Velocidade &lt;0.8s</span>
            </div>
          </div>

          {/* Status Lockup */}
          <div className="py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg bg-[#2563EB] text-white text-[10.5px] sm:text-xs font-bold flex items-center justify-between gap-1.5">
            <span className="truncate">Status do Projeto: 100% Homologado</span>
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </div>
        </div>
      </div>

      {/* Bottom Stat Pill */}
      <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-1.5 text-xs font-bold">
        <span className="text-[#CBD5E1] text-[10px] sm:text-xs">Segurança de entrega:</span>
        <span className="text-[#93C5FD] text-[10px] sm:text-xs font-black uppercase tracking-wide">Zero surpresas ou lançamentos no escuro</span>
      </div>
    </div>
  );
};
