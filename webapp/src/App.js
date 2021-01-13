import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import LandingPage from './components/Landing';

import Footer from './components/Footer';
import * as ROUTES from './constants/routes';
//import "./css/styles.css";

const browserHistory = createBrowserHistory();

const App = () => (
      <Router>
      <div>
      <Navigation />
      <div className="navbar-padding">
        <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </Switch>
        <Footer />
      </div>
      
      </div>
  </Router>
  
);

export default App;

