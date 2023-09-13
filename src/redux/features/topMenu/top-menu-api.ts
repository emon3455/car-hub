import { createSlice } from "@reduxjs/toolkit";

type topMenuState = {
  menuToggle: boolean;
};

const initialState = {
  menuToggle: true,
} as topMenuState;

export const topMenuSlice = createSlice({
  name: "topMenuSlice",
  initialState,
  reducers: {
    setMenuToggle: (state, action) => {
      state.menuToggle = action.payload;
    },
  },
});

export const { setMenuToggle } = topMenuSlice.actions;

export default topMenuSlice.reducer;
