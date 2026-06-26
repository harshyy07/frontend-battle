import { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (scrollTotal > 0) {
        setScrollWidth((currentScroll / scrollTotal) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-oceanic-noir w-full z-50">
      <div 
        className="h-full bg-forsythia transition-all duration-100 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};
