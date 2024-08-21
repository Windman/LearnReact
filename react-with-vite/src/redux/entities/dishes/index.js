import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.
    addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishIds: (state) => state.ids,
  },
});

export const { selectDishById, selectDishIds } = dishesSlice.selectors;
               
