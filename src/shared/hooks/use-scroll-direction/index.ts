import { useEffect, useState } from 'react';

export type ScrollDirection = 'UP' | 'DOWN' | 'NONE';

export const useScrollDirection = (threshold = 50): ScrollDirection => {
  const [direction, setDirection] = useState<ScrollDirection>('NONE');

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastY);

      if (diff < threshold) return;

      if (currentY > lastY) {
        setDirection('DOWN');
      } else {
        setDirection('UP');
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
};
