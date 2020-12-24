import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; 		// react-router-dom
import App from './App';
import * as serviceWorker from './serviceWorker';

// NOT Strict Mode
ReactDOM.render(
  
  <BrowserRouter>
  	<App />
  </BrowserRouter>,
  document.getElementById('root')
);


// Strict Mode - causes double rendering, double api function calls, double constructor calls,... double lots of things..
//
// ReactDOM.render(
//   <React.StrictMode>
//   	<BrowserRouter>
//     	<App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Removing some of the stock stuff.
// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')