export const ADD_CART = "ADD_CART";

export const addToCart = (product) => {
  return { type: ADD_CART, product: product };
};
