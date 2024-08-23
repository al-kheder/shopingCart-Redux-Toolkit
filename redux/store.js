// store/store.js      store is composed of the entire application's state
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/slice/cartSlice";

export const store = configureStore({
  // slices goes here inside the reducer so we have to create the slices
  reducer: {
    cart: cartSlice,
  },
});

export default store;

// connect the  store to the entire app
