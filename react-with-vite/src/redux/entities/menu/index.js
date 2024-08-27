import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";

const entityAdapter = createEntityAdapter();

export const menuSlice = createSlice({
  name: "menu",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getMenu.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  selectors: {
    selectMenuById: (state, id) => state.entities[id],
    selectMenuIds: (state) => state.ids,
  },
});

export const { selectMenuById, selectMenuIds } = menuSlice.selectors;
