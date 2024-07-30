import { configureStore } from "@reduxjs/toolkit";
import { restarauntsSlice } from "./entities/restaraunts";

export const store = configureStore({
  reducer: {
    [restarauntsSlice.name]: restarauntsSlice.reducer,
  },
});