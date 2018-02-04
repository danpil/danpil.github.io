import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Products from './../modules/Products';
import Cart from './../modules/Cart';
import saveCartToLocalStore from '../utils/saveCartToLocalStore';

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

const initialState = {};

if (localStorage.getItem('cart')) {
  initialState.cart = JSON.parse(localStorage.getItem('cart'));
}

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleWare)));

store.subscribe(() => {
  saveCartToLocalStore(store.getState().cart);
});

export default store;
