import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles.css';
import { Provider } from 'react-redux';
import AppState from './components/AppState'
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div className="body">
        <div className="header">
            <div className="tittle">
                <h1>
                    {'BABY EVENTS'}
                </h1>
            </div>
            <div className="author">
                <h2>
                    {'Made By: SuulCoder'}
                </h2>
            </div>
        </div>
        <div className="empty"></div>
        <div className="bar"></div>
        <AppState></AppState>
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
