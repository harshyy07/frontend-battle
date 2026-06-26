import { useScrollReveal } from '../hooks/useScrollReveal';

export const DashboardMockup = () => {
  const revealRef = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div ref={revealRef} className="relative w-full max-w-5xl mx-auto mt-20 perspective-1000 opacity-0 translate-y-12 transition-all duration-500 ease-out z-10 hidden md:block">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-forsythia opacity-10 blur-3xl rounded-full z-0 pointer-events-none mix-blend-screen"></div>
      
      {/* 3D Tilted Glass Pane */}
      <div 
        className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        style={{ transform: 'rotateX(15deg) rotateY(0deg) scale(0.9)', transformStyle: 'preserve-3d', boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(255, 200, 1, 0.1)' }}
      >
        {/* Mac-style Window Header */}
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-xs text-mystic-mint/60 font-mono tracking-widest uppercase">DataMatrix Intelligence Core</div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 grid grid-cols-12 gap-6 h-[400px]">
          
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-4">
            <div className="h-8 w-full bg-white/5 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-white/5 rounded"></div>
            <div className="h-4 w-2/3 bg-white/5 rounded"></div>
            <div className="h-4 w-5/6 bg-white/5 rounded"></div>
            <div className="h-20 w-full bg-forsythia/10 border border-forsythia/20 rounded-xl mt-8 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-forsythia animate-ping"></div>
                <span className="text-xs text-forsythia font-mono">Syncing...</span>
              </div>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="col-span-9 flex flex-col gap-6">
            <div className="flex justify-between items-end h-48 bg-white/5 rounded-xl border border-white/10 p-6 pb-0 overflow-hidden relative">
              <div className="absolute top-4 left-4 text-xs font-mono text-mystic-mint">Throughput (TB/s)</div>
              {/* Fake Bar Chart */}
              {[40, 70, 45, 90, 60, 100, 80, 50, 75].map((h, i) => (
                <div key={i} className="w-8 bg-gradient-to-t from-deep-saffron to-forsythia rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            
            {/* Bottom Metrics */}
            <div className="grid grid-cols-3 gap-6 flex-1">
              <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-center">
                <div className="text-xs text-mystic-mint font-mono mb-1">Latency</div>
                <div className="text-2xl font-bold text-arctic-powder">12ms</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-center">
                <div className="text-xs text-mystic-mint font-mono mb-1">Active Nodes</div>
                <div className="text-2xl font-bold text-arctic-powder">4,289</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-center">
                <div className="text-xs text-mystic-mint font-mono mb-1">Error Rate</div>
                <div className="text-2xl font-bold text-arctic-powder">0.001%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
