import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/canvas.styl';
import './assets/styles/tools.styl';
import './assets/styles/chatSystem.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
