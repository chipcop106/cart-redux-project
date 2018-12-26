import * as types from "./../constants/ActionTypes";
var data = JSON.parse(localStorage.getItem("cart"));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var { product, quantity, id, value } = action;
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART: {
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case types.DELETE_PRODUCT_IN_CART: {
      index = findProductById(state, id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case types.UPDATE_QUANTITY: {
      index = findProductById(state, id);
      if (index !== -1) {
        if (value === 0 && state[index].quantity > 1) {
          state[index].quantity -= 1;
          return [...state];
        }
        if (value === 1) {
          state[index].quantity += 1;
          return [...state];
        }
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    cart.map((item, indexes) => {
      if (item.product.id === product.id) {
        index = indexes;
      }
      return index;
    });
  }
  return index;
};
var findProductById = (cart, id) => {
  var index = -1;
  if (cart.length > 0) {
    cart.map((item, indexes) => {
      if (item.product.id === id) {
        index = indexes;
      }
      return index;
    });
  }
  return index;
};

export default cart;
