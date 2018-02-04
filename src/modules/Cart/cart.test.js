import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS } from './actionTypes';
import { addToCart, deleteFromCart, updateItemUnits } from './actions';
import ls from './../../utils/localStorage';
import reducer from './reducer';

describe('>>>A C T I O N --- Test cart actions', () => {
  it('+++ action addToCart', () => {
    const product = {
      id: 1,
      title: 'Apples',
      description: 'some red apples',
      price: 30,
      units: 1,
    };
    const add = addToCart(product);
    expect(add).toEqual({ type: ADD_TO_CART, payload: product });
  });

  it('+++ action deleteFromCart', () => {
    const id = 1;
    const del = deleteFromCart({ id });
    expect(del).toEqual({ type: DELETE_FROM_CART, payload: { id } });
  });

  it('+++ action updateItemUnits', () => {
    const id = 1;
    const units = 1;
    const update = updateItemUnits({ id, units });
    expect(update).toEqual({ type: UPDATE_ITEM_UNITS, payload: { id, units } });
  });
});

describe('>>>R E D U C E R S --- Test cartReducers', () => {
  let product, state;

  beforeEach(() => {
    product = {
      id: 1,
      title: 'Apples',
      description: 'some red apples',
      price: 30,
      units: 1,
    };
    state = [];
  });

  it('+++ reducer for ADD_TO_CART - the product not exist', () => {
    state = reducer(state, { type: ADD_TO_CART, payload: product });
    expect(state).toEqual([product]);
  });

  it('+++ reducer for ADD_TO_CART - the product exist', () => {
    state.push(product);
    state = reducer(state, { type: ADD_TO_CART, payload: product });
    expect(state).toEqual([
      {
        id: 1,
        title: 'Apples',
        description: 'some red apples',
        price: 30,
        units: 2,
      },
    ]);
  });

  it('+++ reducer for DELETE_FROM_CART', () => {
    const id = 1;
    state.push(product);
    state = reducer(state, { type: DELETE_FROM_CART, payload: { id } });
    expect(state).toEqual([]);
  });

  it('+++ reducer for UPDATE_ITEM_UNITS - units increment', () => {
    const units = 1;
    const id = 1;
    state.push(product);
    state = reducer(state, { type: UPDATE_ITEM_UNITS, payload: { id, units } });
    expect(state).toEqual([
      {
        id: 1,
        title: 'Apples',
        description: 'some red apples',
        price: 30,
        units: 2,
      },
    ]);
  });

  it('+++ reducer for UPDATE_ITEM_UNITS - units decrease', () => {
    const units = -1;
    const id = 1;
    product.units = 2;
    state.push(product);
    state = reducer(state, { type: UPDATE_ITEM_UNITS, payload: { id, units } });
    expect(state).toEqual([
      {
        id: 1,
        title: 'Apples',
        description: 'some red apples',
        price: 30,
        units: 1,
      },
    ]);
  });

  it('+++ reducer for UPDATE_ITEM_UNITS - delete the product', () => {
    const units = -1;
    const id = 1;
    state.push(product);
    state = reducer(state, { type: UPDATE_ITEM_UNITS, payload: { id, units } });
    expect(state).toEqual([]);
  });
});
