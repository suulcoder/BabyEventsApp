import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles.css';
import { Provider } from 'react-redux';
import AppState from './components/AppState'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
      <Router>
        <Route path='/' component={AppState}/>
      </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
