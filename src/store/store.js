import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const middleWares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
