import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Products from './../modules/Products';
import Cart from './../modules/Cart';
import saveStoretoLocalStore from '../utils/saveStoreToLocalStore';

const reducers = combineReducers({
  products: Products.reducer,
  cart: Cart.reducer,
});

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

middleWare.push(loggerMiddleware);

const initialState = JSON.parse(localStorage.getItem('cart')) || {};

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleWare)));

store.subscribe(() => {
  saveStoretoLocalStore(store.getState());
});

export default store;
