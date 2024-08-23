import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewIds: (state) => state.ids,
  },
});

export const { selectReviewById, selectReviewIds } =
reviewSlice.selectors;
