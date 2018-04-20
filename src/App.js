import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import './Main.css';

import Header from './Header';
import Menu from './Menu';

const App = () => (
  <Router>
    <div>
      <Header />
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
