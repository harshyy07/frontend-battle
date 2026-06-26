
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="font-sans text-arctic-powder bg-oceanic-noir min-h-screen selection:bg-forsythia selection:text-oceanic-noir">
      <ScrollProgress />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
