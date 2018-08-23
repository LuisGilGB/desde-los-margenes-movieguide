import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
