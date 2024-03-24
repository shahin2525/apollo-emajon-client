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
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state: any, action) => {
      const products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.products = products.filter((product: any) => product.quantity > 0);
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// // export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
