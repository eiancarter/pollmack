import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';

const store = createStore(reducer , applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

