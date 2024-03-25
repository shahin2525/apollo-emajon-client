import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemes: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleThemes } = themeSlice.actions;

export default themeSlice.reducer;
