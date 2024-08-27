import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurant } from "./get-restaurant";
import { getMenu } from "../menu/get-menu";
import { getReviews } from "../reviews/get-reviews";

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
    })
    .addCase(getMenu.fulfilled, (state, {meta}) => {
      state.entities[meta.arg].isMenuAvailable = true;
    })
    .addCase(getReviews.fulfilled, (state, {meta}) => {
      state.entities[meta.arg].isReviewsAvailable = true;
    }),
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
    isMenuAvailable: (state, id) => state.entities[id].isMenuAvailable ?? false,
    isReviewAvailable: (state, id) => state.entities[id].isReviewsAvailable ?? false,
  },
});

export const { selectRestaurantsIds, selectRestaurantById, isMenuAvailable, isReviewAvailable } = restarauntsSlice.selectors;
               