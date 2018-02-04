export default function saveCartToLocalStore(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}
