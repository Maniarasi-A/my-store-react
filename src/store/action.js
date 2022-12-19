import callApi from "../api/product";

export const loadProducts = (payload) => ({
  type: "LOAD_PRODUCTS",
  payload
});

export const addToCart = (payload) => ({
  type: "ADD_TO_CART",
  payload
});

export const removeFromCart = (payload) => ({
  type: "REMOVE_FROM_CART",
  payload
});

export const increaseQuantityInCart = (payload) => ({
  type: "INCREASE_QUANTITY_IN_CART",
  payload
});

export const decreaseQuantityInCart = (payload) => ({
  type: "DECREASE_QUANTITY_IN_CART",
  payload
});

export const fetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(loadProducts({ products: res.data }));
    });
  };
};
