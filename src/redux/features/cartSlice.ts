import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// // export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
