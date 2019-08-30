import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Authentification from './auth/googlesignin'
import FormInscription from './auth/signup'
import FormLogin from './auth/signin'
import Forgot from './auth/forgotpassword'

class App extends React.Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Firebase Authentification</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/signup'} className="nav-link">Inscription</Link></li>
            <li><Link to={'/signingoogle'} className="nav-link">Login using Google</Link></li>
            <li><Link to={'/forgot'} className="nav-link">Password Forgotten</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={FormLogin} />
              <Route path='/signup' component={FormInscription} />
              <Route path='/signingoogle' component={Authentification} />
              <Route path='/forgot' component={Forgot} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

