import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './assets/components/Menu';
import CanvasPage from './assets/components/CanvasPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CanvasPage />} />
        <Route path="/src/components/Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
