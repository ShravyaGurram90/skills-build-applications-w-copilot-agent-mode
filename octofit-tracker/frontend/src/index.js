import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set REACT_APP_CODESPACE_NAME from environment if available
if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('app.github.dev')) {
  const match = window.location.hostname.match(/^(.*?)-8000\.app\.github\.dev$/);
  if (match) {
    process.env.REACT_APP_CODESPACE_NAME = match[1];
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
