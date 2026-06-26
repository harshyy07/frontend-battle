import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSpotlight } from '../hooks/useSpotlight';

type Currency = 'USD' | 'EUR' | 'INR';

const currencyConfig: Record<Currency, { symbol: string; rate: number; tariff: number }> = {
  USD: { symbol: '$', rate: 1, tariff: 0 },
  EUR: { symbol: '€', rate: 0.9, tariff: 5 }, 
  INR: { symbol: '₹', rate: 82, tariff: 500 }, 
};

const tiers = [
  { name: 'Starter', basePriceUSD: 29, features: ['10k API calls/mo', 'Community Support', 'Basic Analytics', '1 Team Member'] },
  { name: 'Pro', basePriceUSD: 99, features: ['100k API calls/mo', 'Priority Support', 'Advanced Analytics', 'Up to 10 Team Members', 'Custom Integrations'], isPopular: true },
  { name: 'Enterprise', basePriceUSD: 299, features: ['Unlimited API calls', '24/7 Phone Support', 'Dedicated Account Manager', 'Unlimited Team Members', 'SSO & Advanced Security'] },
];

export const Pricing = () => {
  const currencyRef = useRef<Currency>('USD');
  const isAnnualRef = useRef<boolean>(true);
  const revealRef = useScrollReveal<HTMLDivElement>(0.1);
  const spotlightRef = useSpotlight<HTMLDivElement>();
  
  // Refs for specific DOM nodes
  const priceNodesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const currencyBtnRefs = useRef<Record<Currency, HTMLButtonElement | null>>({ USD: null, EUR: null, INR: null });
  const toggleBtnRef = useRef<HTMLSpanElement | null>(null);
  const monthlyLabelRef = useRef<HTMLSpanElement | null>(null);
  const annualLabelRef = useRef<HTMLSpanElement | null>(null);

  const calculatePrice = (baseUSD: number, currency: Currency, isAnnual: boolean) => {
    const config = currencyConfig[currency];
    const monthlyPrice = (baseUSD * config.rate) + config.tariff;
    const finalPrice = isAnnual ? monthlyPrice * 0.8 : monthlyPrice;
    return currency === 'INR' ? Math.round(finalPrice).toString() : finalPrice.toFixed(0);
  };

  const updateUI = () => {
    const currency = currencyRef.current;
    const isAnnual = isAnnualRef.current;
    const config = currencyConfig[currency];

    // Update prices
    tiers.forEach((tier, idx) => {
      if (priceNodesRef.current[idx]) {
        priceNodesRef.current[idx]!.textContent = `${config.symbol}${calculatePrice(tier.basePriceUSD, currency, isAnnual)}`;
      }
    });

    // Update currency button active states
    (Object.keys(currencyConfig) as Currency[]).forEach((cur) => {
      const btn = currencyBtnRefs.current[cur];
      if (btn) {
        if (cur === currency) {
          btn.className = 'px-6 py-2 rounded-lg font-bold transition-colors duration-200 ease-out bg-deep-saffron text-oceanic-noir';
        } else {
          btn.className = 'px-6 py-2 rounded-lg font-bold transition-colors duration-200 ease-out text-mystic-mint hover:text-arctic-powder';
        }
      }
    });

    // Update billing toggle states
    if (toggleBtnRef.current) {
      toggleBtnRef.current.className = `inline-block h-6 w-6 transform rounded-full bg-deep-saffron transition-transform duration-200 ease-out ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`;
    }
    
    if (monthlyLabelRef.current) {
      monthlyLabelRef.current.className = `font-bold transition-colors duration-200 ease-out ${!isAnnual ? 'text-forsythia' : 'text-mystic-mint'}`;
    }
    
    if (annualLabelRef.current) {
      annualLabelRef.current.className = `font-bold flex items-center gap-2 transition-colors duration-200 ease-out ${isAnnual ? 'text-forsythia' : 'text-mystic-mint'}`;
    }
  };

  const setCurrency = (cur: Currency) => {
    if (currencyRef.current !== cur) {
      currencyRef.current = cur;
      updateUI();
    }
  };

  const toggleBilling = () => {
    isAnnualRef.current = !isAnnualRef.current;
    updateUI();
  };

  useEffect(() => {
    updateUI();
  }, []);

  return (
    <section id="pricing" aria-label="Pricing Plans" className="py-24 bg-oceanic-noir text-arctic-powder">
      <div ref={revealRef} className="container mx-auto px-6 max-w-7xl opacity-0 translate-y-12 transition-all duration-700 ease-out">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 font-mono text-forsythia">Transparent Pricing</h2>
          <p className="text-xl text-mystic-mint mb-10 max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs. No hidden fees.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="inline-flex bg-nocturnal-expedition p-1 rounded-xl">
              {(Object.keys(currencyConfig) as Currency[]).map((cur) => (
                <button
                  key={cur}
                  aria-label={`Select ${cur} currency`}
                  ref={(el) => { currencyBtnRefs.current[cur] = el; }}
                  onClick={() => setCurrency(cur)}
                  className="px-6 py-2 rounded-lg font-bold transition-colors duration-200 ease-out text-mystic-mint hover:text-arctic-powder"
                >
                  {cur}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span ref={monthlyLabelRef} className="font-bold text-mystic-mint transition-colors duration-200 ease-out">Monthly</span>
              <button 
                onClick={toggleBilling}
                aria-label="Toggle annual billing"
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-nocturnal-expedition transition-colors focus:outline-none focus:ring-4 focus:ring-forsythia"
              >
                <span ref={toggleBtnRef} className="inline-block h-6 w-6 transform rounded-full bg-deep-saffron transition-transform duration-200 ease-out translate-x-9" />
              </button>
              <span ref={annualLabelRef} className="font-bold flex items-center gap-2 text-forsythia transition-colors duration-200 ease-out">
                Annual <span className="text-xs bg-mystic-mint text-oceanic-noir px-2 py-1 rounded-full font-bold">-20%</span>
              </span>
            </div>
          </div>
        </div>

        <div ref={spotlightRef} className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Pricing tiers">
          {tiers.map((tier, idx) => (
            <div 
              key={tier.name}
              role="listitem"
              className={`spotlight-card relative rounded-3xl p-8 transition-transform duration-200 ease-out transform hover:-translate-y-2 flex flex-col backdrop-blur-xl
                ${tier.isPopular ? 'bg-nocturnal-expedition/80 border-2 border-forsythia shadow-[0_0_40px_rgba(255,200,1,0.2)] scale-105 z-10' : 'bg-white/5 border border-white/10 text-arctic-powder shadow-2xl'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-forsythia text-oceanic-noir font-bold px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 font-mono ${tier.isPopular ? 'text-forsythia' : 'text-arctic-powder'}`}>{tier.name}</h3>
              <div className="mb-6 flex items-baseline">
                <span 
                  ref={(el) => { priceNodesRef.current[idx] = el; }} 
                  className={`text-5xl font-bold ${tier.isPopular ? 'text-arctic-powder' : 'text-arctic-powder'}`}
                >
                  {currencyConfig['USD'].symbol}{calculatePrice(tier.basePriceUSD, 'USD', true)}
                </span>
                <span className={`ml-2 text-lg ${tier.isPopular ? 'text-mystic-mint' : 'text-mystic-mint'}`}>/ mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ease-out ${tier.isPopular ? 'text-forsythia' : 'text-deep-saffron'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.isPopular ? 'text-mystic-mint' : 'text-arctic-powder'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                aria-label={`Choose ${tier.name} plan`}
                className={`w-full py-4 rounded-xl font-bold transition-colors duration-200 ease-out text-lg focus:outline-none focus:ring-4 focus:ring-arctic-powder
                ${tier.isPopular ? 'bg-forsythia text-oceanic-noir hover:bg-deep-saffron' : 'bg-nocturnal-expedition text-arctic-powder hover:bg-oceanic-noir'}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
