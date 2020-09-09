import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@fortawesome/fontawesome-free/css/all.css';
import 'reveal.js/dist/reveal.css';
import './theme/solarized.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
