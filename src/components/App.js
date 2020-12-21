import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Fragment>
  );
}


export default App;
