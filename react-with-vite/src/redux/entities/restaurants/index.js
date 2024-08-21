import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurant } from "./get-restaurant";

const entityAdapter = createEntityAdapter();

export const restarauntsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.
    addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }).
    addCase(getRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload);
    }),
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurantsIds, selectRestaurantById } = restarauntsSlice.selectors;
               