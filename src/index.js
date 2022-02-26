import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackInfo = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return { ...state, feeling: action.payload };
            break;
        case 'ADD_UNDERSTANDING':
            return { ...state, understanding: action.payload };
            break;
        case 'ADD_SUPPORTED':
            return { ...state, support: action.payload };
            break;
        case 'ADD_COMMENTS':
            return { ...state, comments: action.payload };
            break;
        case 'RESET':
            return { feeling: 0, understanding: 0, support: 0, comments:''};
            break;
        default:
            console.log('Default');

    }

    return state;
}




const storeInstance = createStore(
    combineReducers({
        feedbackInfo
    }), applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
