import {
  HomeIcon,
  RadioIcon,
  MusicIcon,
  SearchIcon,
  SkipForwardIcon,
  PlayIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

export const GlassBottomBar = () => {
  const location = useLocation();
  const current = location.pathname;

  const navItems = [
    { to: '/', label: '홈', icon: HomeIcon },
    { to: '/radio', label: '라디오', icon: RadioIcon },
    { to: '/library', label: '보관함', icon: MusicIcon },
  ];

  const isSearch = location.pathname === '/search';
  const [isSettled, setIsSettled] = React.useState(false);

  React.useEffect(() => {
    setIsSettled(false);
  }, [current]);

  const scrollDirection = useScrollDirection(100);

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // ✅ 2) 스크롤 방향이 바뀔 때마다 업데이트
  React.useEffect(() => {
    setIsCollapsed(scrollDirection === 'DOWN');
  }, [scrollDirection]);

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full justify-between px-3 flex z-50 gap-2">
      <MiniPlayer isCollapsed={isCollapsed} />

      <motion.nav
        key={current}
        animate={{
          scale: isCollapsed ? 0.85 : 1.02,
        }}
        initial={{ scale: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.3,
        }}
        className={`relative flex items-center justify-between border rounded-full border-white/20 p-1 
          ${isCollapsed ? 'flex-0' : 'flex-1'}
          `}
      >
        <div className="bg-zinc-800/30 backdrop-blur-md w-full h-full absolute rounded-full top-0 left-0" />
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = current === item.to;

          if (isCollapsed && !isActive) return null;

          return (
            <Link
              onClick={() => {
                setIsCollapsed(false);
              }}
              key={item.to}
              to={item.to}
              className="relative flex flex-col items-center justify-center w-full px-4 h-full text-xs"
            >
              {isActive && !isCollapsed && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full z-0 bg-neutral-500/50"
                  initial={{ scale: 1.3, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <motion.div
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="relative z-10 flex flex-col items-center"
              >
                <Icon
                  size={isCollapsed ? 28 : 32}
                  className={isActive ? 'text-primary' : 'text-white'}
                />
                {!isCollapsed && (
                  <span
                    className={`mt-0.5 ${
                      isActive ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>

      <Link
        key={'search'}
        to={'/search'}
        className={`relative flex flex-col items-center justify-center min-w-[70px] min-h-[70px] text-xs text-gray-200  bg-zinc-800/30 backdrop-blur-sm rounded-full transition-all
          ${isCollapsed ? 'scale-80' : 'scale-100'}`}
      >
        <span>
          <SearchIcon size={28} />
        </span>
      </Link>
    </footer>
  );
};

interface MiniPlayerProps {
  isCollapsed: boolean;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({ isCollapsed }) => {
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2  px-4 py-2 min-[70px] bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between text-white transition-all duration-300
    ${isCollapsed ? 'bottom-2 w-7/12' : 'bottom-20 w-11/12'}
    `}
    >
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sCEcVG6Oet4mJBuDF8oiV-YgBPohttBDxA&s"
          alt="Cover"
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold truncate max-w-[90px]">
            곡 제목 곡 제목 곡 제목
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300">아티스트명</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <PlayIcon size={20} />
        </button>
        <button>
          <SkipForwardIcon size={20} />
        </button>
      </div>
    </div>
  );
};

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
