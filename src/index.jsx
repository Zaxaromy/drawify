import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/canvas.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
