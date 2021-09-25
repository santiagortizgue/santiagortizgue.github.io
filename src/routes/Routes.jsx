import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/Home';
import Portfolio from '../containers/Portfolio/Portfolio';
import About from '../containers/About/About';
import Project from '../containers/Project/Project';
import Contact from '../containers/Contact/Contact';
import NotFound from '../containers/NotFound/NotFound';
import Blog from '../containers/Blog/Blog';

const Routes = () => {

  return (
    <Switch >
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/project/:id" component={Project} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;