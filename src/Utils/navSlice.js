import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navToggle",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
      state.isMenuOpen = false;
    }
  },
});

export default navSlice.reducer;
export const { toggleMenu,closeMenu } = navSlice.actions;
