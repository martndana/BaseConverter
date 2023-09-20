import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CalculatorProvider } from './store/calc-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>
);
