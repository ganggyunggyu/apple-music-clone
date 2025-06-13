import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlassBottomBar } from '../components/glass-bottom-bar';
import { Routeing } from '../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routeing />
      <GlassBottomBar />
    </BrowserRouter>
  );
};
