import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './assets/css/animate.css'
import './assets/css/style.css'
import './assets/css/flaticon.css'
import './assets/css/fontawesome-all.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


