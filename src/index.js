/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers';
import './assets/scss/base.scss';
import ListingContainer from './containers/ListingContainer';
import DetailContainer from './containers/DetailContainer';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './scrollToTop';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Route path="/detail/:id" component={DetailContainer} />
        <Route exact path="/" component={ListingContainer} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
