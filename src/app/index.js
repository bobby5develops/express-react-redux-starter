import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
const rootEnty = document.getElementById('react-root');

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path="/bio" component={Bio} />
		<Route path="/projects" component={Projects} />
		<Route path="/contact" component={Contact} />
      </Route>
    </Router>
  </Provider>
  , rootEnty);
