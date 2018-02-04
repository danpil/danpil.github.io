import { ADD_PRODUCT } from './actionTypes';

const INIT_PRODUCTS = [
  { id: 1, title: 'Apples', description: 'some red apples', price: 30 },
  { id: 2, title: 'Oranges', description: "Peale'em all", price: 25 },
  { id: 3, title: 'Bananas', description: 'Some potassium for you', price: 20 },
  { id: 4, title: 'Potatos', description: 'p for potato', price: 20 },
  { id: 5, title: 'Onions', description: 'Damm, you gotta brush', price: 35 },
  { id: 6, title: 'Ginger', description: 'Its good for your liver', price: 10 },
];
export default function productsReducer(state = INIT_PRODUCTS, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      state.push(action.payload);
      return [...state];
    default:
      return state;
  }
}
