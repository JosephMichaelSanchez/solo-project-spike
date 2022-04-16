import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




const keyCodeReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_KEYCODE':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
      keyCodeReducer,
    }),
    
    applyMiddleware(logger),
);



ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
