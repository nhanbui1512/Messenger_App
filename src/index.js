import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>,
  // </React.StrictMode>,
);

reportWebVitals();
