import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Portfolio from '../containers/Portfolio/Portfolio';
import About from '../containers/About/About';
import Project from '../containers/Project/Project';
import Contact from '../containers/Contact/Contact';
import NotFound from '../containers/NotFound/NotFound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import WebMenu from '../components/WebMenu/WebMenu';
import Footer from '../components/Footer/Footer';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (<AppContext.Provider value={initialState}>
        <HashRouter>
          <WebMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/project/:id" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer/>
        </HashRouter>
      </AppContext.Provider>)
        :
        <h1>Cargando...</h1>
      }
    </>
  );
}

export default App;