import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home, Login, Register } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>, document.getElementById('root')
);