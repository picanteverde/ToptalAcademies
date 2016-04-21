import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import ReactDom from 'react-dom';
import App from './App';
import ListContainer from './containers/List';
import AddContainer from './containers/Add';
import EditContainer from './containers/Edit';

ReactDom.render(
  <Provider store={configureStore()}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/list' component={ListContainer}/>
        <Route path='/add' component={AddContainer}/>
        <Route path='/edit/:idx' component={EditContainer}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('start'));
