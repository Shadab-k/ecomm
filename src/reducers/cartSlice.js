import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "counter",
  initialState: {
    cart:[],
    value: 0,
  },
  reducers: {
    addCart: (state, action) => {
  
      state.value += 1;

      console.log("Added to cart: ", action.payload);
    },

    removeCart: (state, action) => {
      if (state.value !== 0) {
        state.value -= 1;
        console.log("Removed from cart: ", action.payload);

      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  
  },
});

export const { addCart, removeCart, incrementByAmount, decrementByAmount } =
  cartSlice.actions;
export default cartSlice.reducer;