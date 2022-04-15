import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='div_body'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  root
);
