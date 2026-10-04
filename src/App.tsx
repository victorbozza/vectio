import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/home/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { AgencyRoleSection } from './components/home/AgencyRoleSection';
import { RetailOpportunitySection } from './components/home/RetailOpportunitySection';
import { RevenueSimulator } from './components/home/RevenueSimulator';
import { DualCoreSolutions } from './components/home/DualCoreSolutions';
import { FooterCTA } from './components/home/FooterCTA';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';

export const App: React.FC = () => {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let animId: number | null = null;

    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        animId = requestAnimationFrame(raf);
      }

      animId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis fallback to native scroll:', err);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#475569] overflow-x-hidden selection:bg-[#EFF4FF] selection:text-[#0B1B4F]">
      <Navbar />

      <main>
        <HeroSection />
        <RetailOpportunitySection />
        <AgencyRoleSection />
        <RevenueSimulator />
        <DualCoreSolutions />
      </main>

      <FooterCTA />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
