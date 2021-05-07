import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MouseContextProvider from "./context/mouse-context";

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App /> 
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
