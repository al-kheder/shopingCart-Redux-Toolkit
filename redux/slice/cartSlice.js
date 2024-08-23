// A slice is made up of several steps:
// 1- Define the initial state
// 2- Create a slice with a name, initial state, and reducers
// 3- Export the action creators and the reducer

import { createSlice } from "@reduxjs/toolkit";

// 1. Define the initial state
const initialState = [];

// 2. Create the slice
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducers to manipulate the state
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, image, price, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
    incrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem && existingItem.qty > 1) {
      
        existingItem.qty -= 1;
      } else {
       
        return state.filter((item) => item.id !== id);
      }
    },
  },
});



export const { addToCart, removeFromCart, incrementQty,  decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
