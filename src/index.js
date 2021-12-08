import React from 'react';
import ReactDOM from 'react-dom';
import './KoiraTyylit.css';
import reportWebVitals from './reportWebVitals';
import KoiraApp from "./components/KoiraApp"; 


ReactDOM.render(
  <React.StrictMode>
    <KoiraApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
