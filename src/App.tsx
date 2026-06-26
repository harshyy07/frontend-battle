
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { DataPipeline } from './components/DataPipeline';

function App() {
  return (
    <div className="font-sans text-arctic-powder bg-oceanic-noir min-h-screen selection:bg-forsythia selection:text-oceanic-noir cursor-none-global">
      <CustomCursor />
      <ScrollProgress />
      <main>
        <Hero />
        <DataPipeline />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
