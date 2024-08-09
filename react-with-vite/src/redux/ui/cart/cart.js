import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  selectors: {
    selectAmountById: (state, id) => state[id] || 0,
    selectCartState: (state) =>
      Object.keys(state).map((menuId) => {
        return { itemId: menuId, amount: state[menuId] };
      }),
  },
  reducers: {
    addMenuItem: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeMenuItem: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
});

export const { selectAmountById, selectCartState } = cartSlice.selectors;
export const { addMenuItem, removeMenuItem } = cartSlice.actions;
