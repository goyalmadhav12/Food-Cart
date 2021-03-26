import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import Countreducer from './reducers/countReducer';
const allReducers=combineReducers({
    countReducer:Countreducer,
})
const store=createStore(allReducers);
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));