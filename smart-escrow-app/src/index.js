import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='div_body'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
