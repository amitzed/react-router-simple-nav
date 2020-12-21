import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import './App.css';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const PageNotFound = () => {
  return (
    <h2 class="ui center aligned icon header">
      <i class="circular home icon"></i>
      404 - Page Not Found
      <p><Link to="/">Go Back Home</Link></p>
    </h2>
  )
}

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}


export default App;
