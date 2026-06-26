import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        // Hardware accelerated transform bypassing React state completely
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = window.getComputedStyle(target).cursor === 'pointer' || 
                            target.tagName.toLowerCase() === 'button' || 
                            target.tagName.toLowerCase() === 'a';
                            
      if (cursorRef.current && dotRef.current) {
        if (isInteractive) {
          cursorRef.current.classList.add('w-12', 'h-12', 'bg-forsythia', 'opacity-30', 'blur-sm', 'scale-150');
          cursorRef.current.classList.remove('w-6', 'h-6', 'border-2', 'border-mystic-mint', 'opacity-50', 'scale-100');
          dotRef.current.classList.add('w-2', 'h-2', 'bg-forsythia');
          dotRef.current.classList.remove('w-1', 'h-1', 'bg-mystic-mint');
        } else {
          cursorRef.current.classList.remove('w-12', 'h-12', 'bg-forsythia', 'opacity-30', 'blur-sm', 'scale-150');
          cursorRef.current.classList.add('w-6', 'h-6', 'border-2', 'border-mystic-mint', 'opacity-50', 'scale-100');
          dotRef.current.classList.remove('w-2', 'h-2', 'bg-forsythia');
          dotRef.current.classList.add('w-1', 'h-1', 'bg-mystic-mint');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-[width,height,background-color,border,opacity,transform] duration-150 ease-out mix-blend-screen w-6 h-6 border-2 border-mystic-mint opacity-50 scale-100 rounded-full"
      style={{ willChange: 'transform' }}
    >
      <div 
        ref={dotRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out w-1 h-1 bg-mystic-mint"
      ></div>
    </div>
  );
};
