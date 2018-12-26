import * as types from "./../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};

export const actChangeMessage = message => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  };
};

export const actDeleteProductInCart = id => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    id
  };
};

export const actUpdateQuantity = (id, value) => {
  return {
    type: types.UPDATE_QUANTITY,
    id,
    value
  };
};
