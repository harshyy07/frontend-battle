import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const DataPipeline = () => {
  const revealRef = useScrollReveal<HTMLElement>(0.2);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate normalized mouse position from -1 to 1
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={revealRef} 
      onMouseMove={handleMouseMove}
      aria-label="Data Pipeline Visualization" 
      className="py-24 bg-nocturnal-expedition border-y border-oceanic-noir/50 relative overflow-hidden opacity-0 translate-y-12 transition-all duration-500 ease-out z-10"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10 pointer-events-none">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono text-arctic-powder mb-4">Continuous Data Velocity</h2>
          <p className="text-mystic-mint max-w-2xl mx-auto">Watch your unstructured chaos transform into optimized, sync-ready intelligence in milliseconds.</p>
        </div>

        <div className="relative w-full h-64 md:h-96 flex items-center justify-center mt-12 pointer-events-auto">
          {/* Main Pipeline SVG */}
          <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="currentColor" />
                <stop offset="80%" stopColor="currentColor" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Core glowing backgrounds (static) */}
            <path d="M 150 200 C 300 200, 300 100, 500 100 C 700 100, 700 200, 850 200" fill="none" stroke="url(#fadeGradient)" className="text-forsythia/10" strokeWidth="12" strokeLinecap="round" />
            <path d="M 150 200 C 300 200, 300 300, 500 300 C 700 300, 700 200, 850 200" fill="none" stroke="url(#fadeGradient)" className="text-deep-saffron/10" strokeWidth="12" strokeLinecap="round" />
            <path d="M 150 200 L 850 200" fill="none" stroke="url(#fadeGradient)" className="text-mystic-mint/10" strokeWidth="6" />

            {/* High-speed data streams (fast, small dashes) */}
            <path className="animate-dash-flow text-forsythia/80 drop-shadow-[0_0_8px_rgba(255,200,1,0.8)]" stroke="url(#fadeGradient)" d="M 150 200 C 300 200, 300 100, 500 100 C 700 100, 700 200, 850 200" fill="none" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 30" style={{ animationDuration: '0.8s' }} />
            <path className="animate-dash-flow text-deep-saffron/80 drop-shadow-[0_0_8px_rgba(255,153,50,0.8)]" stroke="url(#fadeGradient)" d="M 150 200 C 300 200, 300 300, 500 300 C 700 300, 700 200, 850 200" fill="none" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 30" style={{ animationDuration: '0.6s' }} />
            <path className="animate-dash-flow text-mystic-mint/80 drop-shadow-[0_0_5px_rgba(217,232,226,0.6)]" stroke="url(#fadeGradient)" d="M 150 200 L 850 200" fill="none" strokeWidth="1" strokeDasharray="3 20" style={{ animationDuration: '0.5s' }} />

            {/* Thick data packets (slower, large dashes) */}
            <path className="animate-dash-flow text-forsythia/50 drop-shadow-[0_0_12px_rgba(255,200,1,0.6)]" stroke="url(#fadeGradient)" d="M 150 200 C 300 200, 300 100, 500 100 C 700 100, 700 200, 850 200" fill="none" strokeWidth="6" strokeLinecap="round" strokeDasharray="40 120" style={{ animationDuration: '2s' }} />
            <path className="animate-dash-flow text-deep-saffron/50 drop-shadow-[0_0_12px_rgba(255,153,50,0.6)]" stroke="url(#fadeGradient)" d="M 150 200 C 300 200, 300 300, 500 300 C 700 300, 700 200, 850 200" fill="none" strokeWidth="6" strokeLinecap="round" strokeDasharray="40 120" style={{ animationDuration: '2.5s' }} />
          </svg>

          {/* Nodes placed over SVG with Parallax and Hover Effects */}
          <div 
            className="absolute left-[10%] w-24 h-24 bg-oceanic-noir border-4 border-mystic-mint rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(217,232,226,0.2)] z-10 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-[0_0_40px_rgba(217,232,226,0.5)] cursor-crosshair group"
            style={{ transform: `translate(-50%, 0) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
          >
            <span className="font-mono text-sm font-bold text-arctic-powder group-hover:text-mystic-mint transition-colors duration-200">Source</span>
          </div>

          <div 
            className="absolute left-[50%] top-[25%] w-20 h-20 bg-oceanic-noir border-4 border-forsythia rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,200,1,0.2)] z-10 transition-transform duration-300 ease-out hover:scale-125 hover:shadow-[0_0_50px_rgba(255,200,1,0.6)] cursor-crosshair group"
            style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
          >
            <span className="font-mono text-xs font-bold text-forsythia group-hover:text-arctic-powder transition-colors duration-200">AI Core</span>
          </div>

          <div 
            className="absolute left-[50%] top-[75%] w-20 h-20 bg-oceanic-noir border-4 border-deep-saffron rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,153,50,0.2)] z-10 transition-transform duration-300 ease-out hover:scale-125 hover:shadow-[0_0_50px_rgba(255,153,50,0.6)] cursor-crosshair group"
            style={{ transform: `translate(-50%, -50%) translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
          >
            <span className="font-mono text-xs font-bold text-deep-saffron group-hover:text-arctic-powder transition-colors duration-200">Sync</span>
          </div>

          <div 
            className="absolute left-[90%] w-24 h-24 bg-arctic-powder border-4 border-oceanic-noir rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] z-10 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] cursor-crosshair group"
            style={{ transform: `translate(-50%, 0) translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
          >
            <span className="font-mono text-sm font-bold text-oceanic-noir group-hover:text-deep-saffron transition-colors duration-200">Target</span>
          </div>
        </div>
      </div>
    </section>
  );
};
