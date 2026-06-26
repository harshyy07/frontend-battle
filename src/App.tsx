
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <main className="font-sans min-h-screen bg-arctic-powder">
      <Hero />
      <Features />
      <Pricing />
      <footer className="py-10 bg-oceanic-noir text-center text-mystic-mint border-t border-nocturnal-expedition">
        <p className="font-mono text-sm opacity-80">&copy; {new Date().getFullYear()} AI Automation Platform. Built for the Hackathon.</p>
      </footer>
    </main>
  );
}

export default App;
