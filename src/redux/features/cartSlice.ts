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
    addToCart: (state: any, action: any) => {
      const isExist = state.products.find(
        (product: any) => product.id === action.payload.id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTotalTax(state);
      state.grandTotal = selectGrandTotal(state);
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

      state.selectedItems = selectSelectItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTotalTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeCart: (state: any, action: any) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.selectedItems = selectSelectItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTotalTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
  },
});

export const selectSelectItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);

export const selectTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const selectTotalTax = (state: any) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: any) => {
  return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;
};

export const { addToCart, updateQuantity, removeCart } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// // export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
