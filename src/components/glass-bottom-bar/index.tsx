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
import { useScrollDirection } from '../../shared/hooks';
import { MiniPlayer } from '../mini-player';
import { MainNavBar } from '../main-nav-bar';

export const GlassBottomBar = () => {
  const location = useLocation();
  const current = location.pathname;

  const isSearch = location.pathname === '/search';

  const scrollDirection = useScrollDirection(100);

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  React.useEffect(() => {
    setIsCollapsed(scrollDirection === 'DOWN');
  }, [scrollDirection]);

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full justify-between px-3 flex z-50 gap-2">
      <MiniPlayer isCollapsed={isCollapsed} />

      <MainNavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Link
        key={'search'}
        to={'/search'}
        className={`relative flex flex-col items-center justify-center  text-xs text-gray-200  bg-zinc-800/30 backdrop-blur-sm rounded-full transition-all min-w-[70px] min-h-[70px] border border-white/20
          ${isCollapsed && !isSearch ? 'scale-80' : ''}
          ${isSearch ? 'w-full flex-1 items-start' : ''}
          `}
      >
        {!isSearch ? (
          <span>
            <SearchIcon size={28} />
          </span>
        ) : (
          <div className="flex gap-1 items-center px-3">
            <SearchIcon size={24} />
            <input className="p-4" placeholder="아티스트, 노래, 가사 등" />
          </div>
        )}
      </Link>
    </footer>
  );
};
