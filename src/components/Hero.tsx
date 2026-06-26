import { HeroCanvas } from './HeroCanvas';

export const Hero = () => {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center bg-oceanic-noir overflow-hidden">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-br from-nocturnal-expedition/80 to-transparent opacity-60 pointer-events-none z-0"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-forsythia mb-6 animate-fade-in-up">
          Automate Data. <br/> <span className="text-arctic-powder">Scale Faster.</span>
        </h1>
        <p className="text-xl md:text-2xl text-mystic-mint max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          The most advanced AI-driven platform for connecting, synchronizing, and optimizing your operational data.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-deep-saffron hover:bg-forsythia text-oceanic-noir font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
            Start Free Trial
          </button>
          <button className="bg-transparent border-2 border-mystic-mint text-mystic-mint hover:bg-mystic-mint hover:text-oceanic-noir font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg">
            Book a Demo
          </button>
        </div>
      </div>
      {/* Decorative SVG */}
      <svg className="absolute bottom-0 w-full h-auto text-arctic-powder fill-current" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </header>
  );
};
