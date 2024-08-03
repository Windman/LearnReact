import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  selectors: {
    selectCartByUserId: (state, id) => {
      if (!state.entities[id]) {
        return {};
      }

      return state.entities[id];
    },
  },
  reducers: {
    addCartItem: (state, action) => {
      const {userId, menuId} = action.payload;
      if (!state.entities[userId]) {
        state.entities[userId] = {menuId, count: 1};
      } else {
        const current = state.entities[userId];
        current.count = current.count + 1;
      }
    },
    removeCartItem: (state, action) => {
      throw new Error("not implemented")
    },
  },
});

export const { selectCartByUserId } = cartSlice.selectors;
export const { addCartItem, removeCartItem } = cartSlice.actions;
