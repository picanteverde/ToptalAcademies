import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ReactDom from 'react-dom';
import App from './App';
import ListContainer from './containers/List';
import AddContainer from './containers/Add';
import EditContainer from './containers/Edit';
//import DevTools from './containers/DevTools';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='/list' component={ListContainer}/>
          <Route path='/add' component={AddContainer}/>
          <Route path='/edit/:idx' component={EditContainer}/>
        </Route>
      </Router>
    </div>
  </Provider>, document.getElementById('start'));

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools').default;
  showDevTools(store);
}
