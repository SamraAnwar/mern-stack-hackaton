import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Router import
import App from './App.jsx';
import './index.css'; // TailwindCSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
);
