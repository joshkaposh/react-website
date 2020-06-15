import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Boilerplate
import './css/App.css';
import './css/index.css';
import './css/navbar.style.css';
import './css/rooms.style.css';
import './css/banner.style.css';
// CSS Styles

// start of BACKEND *************************
import { BrowserRouter} from 'react-router-dom';
// end of BACKEND *************************



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();