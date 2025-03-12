import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Add font awesome script to head
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
fontAwesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeScript);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);