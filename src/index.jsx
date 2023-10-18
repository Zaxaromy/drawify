import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/canvas-page.styl';
import './assets/styles/underbar.styl';
import './assets/styles/chat-system.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
