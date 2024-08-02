import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mocks";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restarauntsSlice = createSlice({
  name: "restaraunts",
  initialState,
  selectors: {
    selectRestarauntById: (state, id) => state.entities[id],
    selectRestaurantIds: (state) => state.ids,
  },
});

export const { selectRestarauntById, selectRestaurantIds } =
  restarauntsSlice.selectors;
