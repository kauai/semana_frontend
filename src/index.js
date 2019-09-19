import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer01 from './reducer/counter01'
import reducer02 from './reducer/counter02'
const rootReducer = combineReducers({ reducer:reducer01, count2:reducer02 })
    
const store = createStore(rootReducer)

ReactDOM.render(
      <Provider store={ store }>
         <App/>
      </Provider>,
 document.getElementById('root')
);