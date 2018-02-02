import { ADD_PRODUCT, UPDATE_PRODUCT } from './actionTypes';

export function addProduct({ id, title, description, price }) {
  return {
    type: ADD_PRODUCT,
    payload: { id, title, description, price },
  };
}
export function updateProduct({ id, title }) {
  return {
    type: UPDATE_PRODUCT,
    payload: { id, title },
  };
}
