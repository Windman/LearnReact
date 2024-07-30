import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mocks";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaraunts",
  initialState,
  selectors: {
    selectRestarauntById: (state, id) => state.entities[id],
    selectestarauntIds: (state) => state.ids,
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  restaurantsSlice.selectors;