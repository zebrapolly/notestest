import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux'
import confStore from './store'
import 'bootstrap/dist/css/bootstrap.css';
import '../public/dist/css/cosmo.css';

const store = confStore()

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
