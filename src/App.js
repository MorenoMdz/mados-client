import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import './App.css';

import store from './store';

import Header from './components/Header';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer autoClose={3000} pauseOnHover={false} />
        <Header />
        <Routes />
      </Provider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
