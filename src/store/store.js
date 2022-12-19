import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer";

export default () => {
  return configureStore({
    reducer: {
      _store: productReducer
    }
  });
};
