import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSpotlight } from '../hooks/useSpotlight';

const features = [
  { id: 1, title: 'AI Automation', desc: 'Self-learning algorithms that adapt to your workflows.' },
  { id: 2, title: 'Real-time Sync', desc: 'Instantaneous data replication across multiple regions and cloud providers.' },
  { id: 3, title: 'Deep Analytics', desc: 'Predictive insights generated from your historical data.' },
  { id: 4, title: 'Security First', desc: 'End-to-end encryption with zero-trust architecture.' },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const revealRef = useScrollReveal<HTMLDivElement>(0.1);
  const spotlightRef = useSpotlight<HTMLDivElement>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section aria-label="Platform Features" className="py-24 bg-arctic-powder text-oceanic-noir relative z-20 overflow-hidden">
      <div ref={revealRef} className="container mx-auto px-6 max-w-6xl opacity-0 translate-y-12 transition-all duration-700 ease-out">
        <h2 className="text-5xl font-bold text-center mb-16 text-nocturnal-expedition font-mono">Platform Features</h2>
        
        {isMobile ? (
          <div className="flex flex-col gap-4" role="tablist" aria-orientation="vertical">
            {features.map((feat, idx) => (
              <div 
                key={feat.id} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ease-in-out border-2 ${activeIndex === idx ? 'border-deep-saffron shadow-lg' : 'border-mystic-mint border-opacity-50 bg-white'}`}
              >
                <button 
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-expanded={activeIndex === idx}
                  aria-controls={`panel-${feat.id}`}
                  id={`tab-${feat.id}`}
                  className="w-full px-6 py-5 text-left font-bold text-xl flex justify-between items-center bg-white focus:outline-none focus:ring-4 focus:ring-deep-saffron"
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                >
                  <span className="font-mono">{feat.title}</span>
                  <span className={`transform transition-transform duration-200 ease-out ${activeIndex === idx ? 'rotate-180 text-deep-saffron' : 'text-nocturnal-expedition'}`}>
                    ▼
                  </span>
                </button>
                <div 
                  id={`panel-${feat.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${feat.id}`}
                  className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-nocturnal-expedition leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div ref={spotlightRef} className="grid grid-cols-4 grid-rows-2 gap-6 h-[500px]" role="list" aria-label="Feature highlight grid">
            {features.map((feat, idx) => {
              let gridClass = '';
              let bgClass = 'bg-white';
              let textClass = 'text-oceanic-noir';
              let titleClass = 'text-nocturnal-expedition';
              
              if (idx === 0) {
                gridClass = 'col-span-2 row-span-2';
                bgClass = 'bg-nocturnal-expedition';
                textClass = 'text-mystic-mint';
                titleClass = 'text-forsythia';
              } else if (idx === 1) {
                gridClass = 'col-span-2 row-span-1';
              } else {
                gridClass = 'col-span-1 row-span-1';
              }

              const isActive = activeIndex === idx;

              return (
                <div 
                  key={feat.id}
                  role="listitem"
                  tabIndex={0}
                  aria-labelledby={`bento-title-${feat.id}`}
                  aria-describedby={`bento-desc-${feat.id}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onBlur={handleMouseLeave}
                  className={`spotlight-card relative p-8 rounded-3xl overflow-hidden transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-deep-saffron
                    ${gridClass} ${bgClass} 
                    ${isActive && idx !== 0 ? 'ring-4 ring-deep-saffron ring-opacity-50 shadow-2xl z-10' : 'shadow-xl'}
                    ${isActive && idx === 0 ? 'shadow-2xl z-10 ring-4 ring-forsythia ring-opacity-50' : ''}
                    cursor-default`}
                  style={{ transition: 'transform 0.1s ease-out, box-shadow 0.2s ease-out' }}
                >
                  <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20 transition-all duration-300 ease-in-out ${isActive ? 'scale-150' : 'scale-100'} ${idx === 0 ? 'bg-forsythia' : 'bg-deep-saffron'}`}></div>
                  <h3 id={`bento-title-${feat.id}`} className={`text-3xl font-bold mb-4 font-mono ${titleClass}`}>{feat.title}</h3>
                  <p id={`bento-desc-${feat.id}`} className={`text-lg leading-relaxed ${textClass}`}>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
