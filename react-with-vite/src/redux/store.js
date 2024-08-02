import { configureStore } from "@reduxjs/toolkit";
import { restarauntsSlice } from "./entities/restaraunts/index";
import { menuSlice } from "./entities/menu/index";

export const store = configureStore({
  reducer: {
    [restarauntsSlice.name]: restarauntsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
  },
});