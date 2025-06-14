import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlassBottomBar } from '../components/glass-bottom-bar';
import { Routing } from '../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
      <GlassBottomBar />
    </BrowserRouter>
  );
};
