import { ADD_PRODUCT } from './actionTypes';

export function addProduct({ id, title, description, price }) {
  return {
    type: ADD_PRODUCT,
    payload: { id, title, description, price },
  };
}
