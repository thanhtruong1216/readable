import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reduxPlayground from './redux_playground';
import { createStore } from 'redux';
import reducer from './reducers/index'

const store = createStore(reducer)
// console.log(store.getState())

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();


reduxPlayground();