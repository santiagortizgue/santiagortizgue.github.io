import React from 'react';
import { HashRouter } from 'react-router-dom';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import WebMenu from '../components/WebMenu/WebMenu';
import Footer from '../components/Footer/Footer';

//notification system
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (
          <AppContext.Provider value={initialState}>
            <HashRouter>
              <WebMenu />
              <Routes />
              <Footer />
              <ToastContainer />
            </HashRouter>
          </AppContext.Provider>
      )
        :
        <h1>Cargando...</h1>
      }
    </>
  );
}

export default App;