export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: {...product, quantity:1}
    }
};

export const updateQuantity = (productId, quantity) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: { productId, quantity }
    };
  };

export const removeFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId,
    }
};