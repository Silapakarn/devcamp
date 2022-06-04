import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "../Component/profileReducer";
import productReducer from "../Component/productReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer
  },
});

export default store;
