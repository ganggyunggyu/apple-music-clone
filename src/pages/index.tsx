import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home-page';
import { RadioPage } from './radio-page';
import { LibraryPage } from './library-page';

export const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/radio" element={<RadioPage />} />
      <Route path="/box" element={<LibraryPage />} />
    </Routes>
  );
};
