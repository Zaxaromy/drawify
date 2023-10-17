import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './assets/components/Menu';
import ServerConnection from './assets/components/ServerConnection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ServerConnection />} />
        <Route path="/src/components/Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
