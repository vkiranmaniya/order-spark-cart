export const products = (state) => state.products;
export const total = (state) => state.products.reduce((acc, product) => acc + product.price, 0);