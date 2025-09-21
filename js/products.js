
let productsData = {};


export async function loadProducts() {
  const response = await fetch('/api/products.json');
  const productsArray = await response.json();
  productsData = {};
  productsArray.forEach(product => {
    productsData[String(product.id)] = product;
  });
}


export function getProductById(id) {
  return productsData[String(id)] || null;
}