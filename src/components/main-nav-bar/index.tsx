import { HomeIcon, MusicIcon, RadioIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

interface MainNavBarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const MainNavBar: React.FC<MainNavBarProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const location = useLocation();
  const current = location.pathname;

  const [prevpath, setPrevpath] = React.useState('/');

  const isSearch = current === '/search';

  const navItems = [
    { to: '/', label: '홈', icon: HomeIcon },
    { to: '/radio', label: '라디오', icon: RadioIcon },
    { to: '/library', label: '보관함', icon: MusicIcon },
  ];

  React.useEffect(() => {
    if (current !== '/search') setPrevpath(current);
    console.log(prevpath);
  }, [current]);

  return (
    <motion.nav
      key={current}
      animate={{
        scale: isCollapsed && !isSearch ? 0.85 : 1.02,
      }}
      initial={{ scale: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className={`relative flex items-center justify-between border border-white/20 rounded-full  p-1 
        ${isCollapsed || isSearch ? 'flex-0' : 'flex-1'}
        `}
    >
      <div className="bg-zinc-800/30 backdrop-blur-md w-full h-full absolute rounded-full top-0 left-0" />
      {navItems.map((item) => {
        const Icon = item.icon;
        const getIsActive = () => {
          if (current === '/search') return item.to === prevpath;
          return current === item.to;
        };

        const isActive = getIsActive();

        if (isCollapsed && !isActive) return null;

        if (isSearch && !isActive) return null;

        return (
          <Link
            onClick={() => {
              setIsCollapsed(false);
            }}
            key={item.to}
            to={item.to}
            className="relative flex flex-col items-center justify-center w-full px-4 h-full text-xs"
          >
            {isActive && !isCollapsed && !isSearch && (
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
                size={isCollapsed && !isSearch ? 28 : 32}
                className={isActive ? 'text-primary' : 'text-white'}
              />
              {!isCollapsed && !isSearch && (
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
  );
};
