import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
