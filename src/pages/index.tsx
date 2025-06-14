import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { fadeVariants, slideVariants } from '@/app/motion';

import { HomePage } from './home-page';
import { RadioPage } from './radio-page';
import { LibraryPage } from './library-page';
import { SearchPage } from './search-page';

export const Routing = () => {
  const location = useLocation();

  const allRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/radio', element: <RadioPage /> },
    { path: '/library', element: <LibraryPage /> },
    { path: '/search', element: <SearchPage /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {allRoutes.map(({ path, element }) => {
          const variants = path === '/search' ? slideVariants : fadeVariants;

          return (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="h-full w-full"
                >
                  {element}
                </motion.div>
              }
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
};
