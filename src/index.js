import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './static/iconfont/iconfont.js';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <GlobalStyleIcon />
    <App />
  </React.Fragment>
  ,
  document.getElementById('root')
);

