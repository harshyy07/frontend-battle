import { useScrollReveal } from '../hooks/useScrollReveal';

export const DataPipeline = () => {
  const revealRef = useScrollReveal<HTMLElement>(0.2);

  return (
    <section ref={revealRef} aria-label="Data Pipeline Visualization" className="py-24 bg-nocturnal-expedition border-y border-oceanic-noir/50 relative overflow-hidden opacity-0 translate-y-12 transition-all duration-700 ease-out z-10">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono text-arctic-powder mb-4">Continuous Data Velocity</h2>
          <p className="text-mystic-mint max-w-2xl mx-auto">Watch your unstructured chaos transform into optimized, sync-ready intelligence in milliseconds.</p>
        </div>

        <div className="relative w-full h-64 md:h-96 flex items-center justify-center mt-12">
          {/* Main Pipeline SVG */}
          <svg className="absolute w-full h-full text-mystic-mint/20" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            {/* Background Paths */}
            <path id="path1" d="M 100 200 C 300 200, 300 100, 500 100 C 700 100, 700 200, 900 200" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
            <path id="path2" d="M 100 200 C 300 200, 300 300, 500 300 C 700 300, 700 200, 900 200" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
            <path id="path3" d="M 100 200 L 900 200" fill="none" stroke="currentColor" strokeWidth="2" />

            {/* Glowing Data Packets moving along paths using CSS animations */}
            <circle cx="0" cy="0" r="6" fill="#FFC801" className="animate-data-flow-1" style={{ filter: 'drop-shadow(0 0 8px #FFC801)' }} />
            <circle cx="0" cy="0" r="6" fill="#FFC801" className="animate-data-flow-1" style={{ filter: 'drop-shadow(0 0 8px #FFC801)', animationDelay: '1.5s' }} />
            
            <circle cx="0" cy="0" r="6" fill="#FF9932" className="animate-data-flow-2" style={{ filter: 'drop-shadow(0 0 8px #FF9932)', animationDelay: '0.7s' }} />
            <circle cx="0" cy="0" r="6" fill="#FF9932" className="animate-data-flow-2" style={{ filter: 'drop-shadow(0 0 8px #FF9932)', animationDelay: '2.2s' }} />

            <circle cx="0" cy="0" r="4" fill="#D9E8E2" className="animate-data-flow-3" style={{ filter: 'drop-shadow(0 0 5px #D9E8E2)', animationDelay: '0.3s' }} />
            <circle cx="0" cy="0" r="4" fill="#D9E8E2" className="animate-data-flow-3" style={{ filter: 'drop-shadow(0 0 5px #D9E8E2)', animationDelay: '1.8s' }} />
          </svg>

          {/* Nodes placed over SVG */}
          <div className="absolute left-[10%] w-24 h-24 bg-oceanic-noir border-4 border-mystic-mint rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(217,232,226,0.2)] z-10 transform -translate-x-1/2">
            <span className="font-mono text-sm font-bold text-arctic-powder">Source</span>
          </div>

          <div className="absolute left-[50%] top-[25%] w-20 h-20 bg-oceanic-noir border-4 border-forsythia rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,200,1,0.2)] z-10 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <span className="font-mono text-xs font-bold text-forsythia">AI Core</span>
          </div>

          <div className="absolute left-[50%] top-[75%] w-20 h-20 bg-oceanic-noir border-4 border-deep-saffron rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,153,50,0.2)] z-10 transform -translate-x-1/2 -translate-y-1/2">
            <span className="font-mono text-xs font-bold text-deep-saffron">Sync</span>
          </div>

          <div className="absolute left-[90%] w-24 h-24 bg-arctic-powder border-4 border-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] z-10 transform -translate-x-1/2">
            <span className="font-mono text-sm font-bold text-oceanic-noir">Target</span>
          </div>
        </div>
      </div>
    </section>
  );
};
