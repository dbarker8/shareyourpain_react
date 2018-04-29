import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/new-age.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers,{}, window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
