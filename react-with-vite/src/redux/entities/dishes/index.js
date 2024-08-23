import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getDish.fulfilled, (state, { payload }) => {
      entityAdapter.addOne(state, payload);
    }),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishIds: (state) => state.ids,
  },
});

export const { selectDishById, selectDishIds } = dishSlice.selectors;
               
