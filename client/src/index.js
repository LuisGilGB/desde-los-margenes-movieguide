import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStoreAndHistory from './store';
import registerServiceWorker from './registerServiceWorker';

const {store, history} = createStoreAndHistory();

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
registerServiceWorker();
