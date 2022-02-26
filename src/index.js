import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const feedbackInfo = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comment:''
    }, action) => {
    switch(action.type){
        case'ADD_FEEDBACK':
        return {...state, feeling:action.payload};
        break;
        
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedBackInfo
    }), applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
