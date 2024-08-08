import { configureStore } from "@reduxjs/toolkit";
import { restarauntsSlice } from "./entities/restaraunts/index";
import { menuSlice } from "./entities/menu/index";
import { reviewSlice } from "./entities/reviews/index";
import { usersSlice } from "./entities/users/index";
import { cartSlice } from "./ui/cart/cart";
import { dishesSlice } from "./entities/dishes";

export const store = configureStore({
  reducer: {
    [restarauntsSlice.name]: restarauntsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
  },
});

// Questions
// How to reset store?
