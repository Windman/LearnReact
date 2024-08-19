import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurant } from "./get-restaurant";

const entityAdapter = createEntityAdapter();

export const restarauntSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload);
    }),
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantById } = restarauntSlice.selectors;
               