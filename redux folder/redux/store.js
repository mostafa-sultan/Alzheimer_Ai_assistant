import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { moviesReducer, authReducer } from './reducers';

const rootReducer = combineReducers({ moviesReducer, authReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
