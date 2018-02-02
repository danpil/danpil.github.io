export default function findProductIndex(products, id) {
  return products.findIndex(p => p.id === id);
}
