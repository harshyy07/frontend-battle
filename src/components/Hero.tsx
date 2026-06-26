import { useState, useEffect, useRef } from 'react';
import { HeroCanvas } from './HeroCanvas';
import { DashboardMockup } from './DashboardMockup';

const MagneticButton = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  
  const handleMouseLeave = () => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transform = `translate(0px, 0px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className}`}
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      {children}
    </button>
  );
};

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "The most advanced AI-driven platform for connecting, synchronizing, and optimizing your operational data.";
  
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    
    // Target ~400ms for full typing effect to meet 500ms initial load constraints
    const intervalTime = 400 / fullText.length;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full min-h-screen flex items-center justify-center bg-oceanic-noir overflow-hidden">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-br from-nocturnal-expedition/80 to-transparent opacity-60 pointer-events-none z-0"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-forsythia mb-6 animate-fade-in-up">
          Automate Data. <br/> <span className="text-arctic-powder">Scale Faster.</span>
        </h1>
        <p className="text-xl md:text-2xl text-mystic-mint max-w-2xl mx-auto mb-10 font-sans leading-relaxed min-h-[64px]">
          {typedText}
          <span className="inline-block w-[2px] h-6 bg-mystic-mint ml-1 animate-pulse align-middle"></span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticButton className="bg-deep-saffron hover:bg-forsythia text-oceanic-noir font-bold py-4 px-10 rounded-full shadow-xl text-lg hover:shadow-[0_0_20px_rgba(255,200,1,0.4)]">
            Start Free Trial
          </MagneticButton>
          <MagneticButton className="bg-transparent border-2 border-mystic-mint text-mystic-mint hover:bg-mystic-mint hover:text-oceanic-noir font-bold py-4 px-10 rounded-full text-lg">
            Book a Demo
          </MagneticButton>
        </div>
        
        <DashboardMockup />
      </div>
      {/* Decorative SVG */}
      <svg className="absolute bottom-0 w-full h-auto text-arctic-powder fill-current" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </header>
  );
};
