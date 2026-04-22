import React, { useMemo } from 'react';

export const BackgroundDots: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const dots = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: i % 20 === 0 ? (Math.random() * 8 + 6) * scale : (Math.random() * 3 + 1) * scale,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -30,
      opacity: i % 20 === 0 ? Math.random() * 0.4 + 0.3 : Math.random() * 0.3 + 0.1,
      glow: i % 20 === 0
    }));
  }, [scale]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map(dot => (
        <div 
          key={dot.id}
          className={`floating-dot ${dot.glow ? 'bg-[#FDB623] blur-[2px]' : 'bg-white'}`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: dot.opacity,
            '--duration': `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
            boxShadow: dot.glow ? '0 0 15px rgba(253, 182, 35, 0.4)' : 'none'
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
