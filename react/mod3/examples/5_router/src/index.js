import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';
import App from './App';
import List from './screens/List';
import Add from './screens/Add';
import Edit from './screens/Edit';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/list' component={List}/>
      <Route path='/add' component={Add}/>
      <Route path='/edit/:idx' component={Edit}/>
    </Route>
  </Router>, document.getElementById('start'));
