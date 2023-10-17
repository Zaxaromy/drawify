import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/canvas.styl';
import './assets/styles/tools.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
