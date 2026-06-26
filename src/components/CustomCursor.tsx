import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = window.getComputedStyle(target).cursor === 'pointer' || target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a';
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out mix-blend-screen
        ${isHovering ? 'w-12 h-12 bg-forsythia opacity-30 blur-sm scale-150' : 'w-6 h-6 border-2 border-mystic-mint opacity-50 scale-100'} rounded-full`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out
        ${isHovering ? 'w-2 h-2 bg-forsythia' : 'w-1 h-1 bg-mystic-mint'}`}></div>
    </div>
  );
};
