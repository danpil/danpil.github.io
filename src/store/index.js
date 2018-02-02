import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Products from './../modules/Products';
import Cart from './../modules/Cart';

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

//const initialState = {};
// const enhancers = [];
// const middleware = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//     //enhancers.push(logger);
//   }
// }

//const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

//export default createStore(rootReducer, initialState, composedEnhancers);

const store = createStore(reducers, {}, compose(applyMiddleware(...middleWare)));
export default store;
