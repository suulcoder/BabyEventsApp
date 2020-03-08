import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
