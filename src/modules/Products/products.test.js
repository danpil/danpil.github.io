import { ADD_PRODUCT } from './actionTypes';
import { addProduct } from './actions';
import reducer from './reducer';

describe('>>>A C T I O N --- Test products action', () => {
  let product, state;

  beforeEach(() => {
    product = {
      id: 1,
      title: 'Apples',
      description: 'some red apples',
      price: 30,
    };
    state = [];
  });

  it('+++ action addProduct', () => {
    const add = addProduct(product);
    expect(add).toEqual({ type: ADD_PRODUCT, payload: product });
  });
});

describe('>>>R E D U C E R --- Test productsReducer', () => {
  let product, state;

  beforeEach(() => {
    product = {
      id: 1,
      title: 'Apples',
      description: 'some red apples',
      price: 30,
    };
    state = [];
  });

  it('+++ reducer for ADD_PRODUCT', () => {
    state = reducer(state, { type: ADD_PRODUCT, payload: product });
    expect(state).toEqual([product]);
  });
});
