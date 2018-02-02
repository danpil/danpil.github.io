export default function saveStoreToLocalStore(store) {
  localStorage.setItem('cart', JSON.stringify(store));
}
