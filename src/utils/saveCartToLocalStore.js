export default function saveCartToLocalStore(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
