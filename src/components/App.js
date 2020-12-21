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
      </Router>
    </Fragment>
  );
}


export default App;
