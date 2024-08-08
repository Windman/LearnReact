import { configureStore } from "@reduxjs/toolkit";
import { restarauntsSlice } from "./entities/restaraunts/index";
import { menuSlice } from "./entities/menu/index";
import { reviewSlice} from "./entities/reviews/index";
import { usersSlice} from "./entities/users/index";
import { cartSlice } from "./entities/cart";

export const store = configureStore({
  reducer: {
    [restarauntsSlice.name]: restarauntsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  },
});


// how to reser store?