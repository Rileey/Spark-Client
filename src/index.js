import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './authContext/authContext';
import { MovieContextProvider } from './Context/movieContext/movieContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

