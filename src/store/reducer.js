let store = {
  products: [],
  carts: {}
};

export default function productReduc3er(state = store, action) {
  let newState = { products: [...state.products], carts: { ...state.carts } };
  switch (action.type) {
    case "LOAD_PRODUCTS":
      newState.products = action.payload.products;
      return newState;
    case "ADD_TO_CART":
      if (!(action.payload.id in newState.carts)) {
        newState.carts[action.payload.id] = 1;
      }
      return newState;
    case "REMOVE_FROM_CART":
      if (action.payload.id in newState.carts) {
        delete newState.carts[action.payload.id];
      }

      return newState;
    case "INCREASE_QUANTITY_IN_CART":
      if (action.payload.id in newState.carts) {
        newState.carts[action.payload.id] += 1;
      } else {
        newState.carts[action.payload.id] = 1;
      }
      return newState;
    case "DECREASE_QUANTITY_IN_CART":
      if (action.payload.id in newState.carts) {
        if (newState.carts[action.payload.id] > 1) {
          newState.carts[action.payload.id] -= 1;
        } else {
          delete newState.carts[action.payload.id];
        }
      }

      return newState;
    default:
      return state;
  }
}
