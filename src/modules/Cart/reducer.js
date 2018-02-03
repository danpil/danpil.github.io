import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS } from './actionTypes';
import findProductIndex from './../../utils/findProductIndex';

export default function cartReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      let existingIndex = findProductIndex(state, action.payload.id);
      if (existingIndex !== -1) {
        state[existingIndex].units += 1;
        return [...state];
      }
      state.push(action.payload);
      return [...state];

    case UPDATE_ITEM_UNITS:
      let existingItemIndex = findProductIndex(state, action.payload.id);

      if (state[existingItemIndex].units === 1 && action.payload.units === -1) {
        return [...state.slice(0, existingItemIndex), ...state.slice(existingItemIndex + 1)];
      }
      state[existingItemIndex].units += action.payload.units;
      return [...state];

    case DELETE_FROM_CART:
      let indexToDel = findProductIndex(state, action.payload.id);
      return [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];

    default:
      return state;
  }
}
