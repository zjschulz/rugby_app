import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);