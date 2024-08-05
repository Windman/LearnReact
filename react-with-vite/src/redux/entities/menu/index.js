import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../materials/normalized-mocks";

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  selectors: {
    selectMenuById: (state, id) => state.entities[id],
    selectMenuIds: (state) => state.ids,
  },
});

export const { selectMenuById, selectMenuIds } =
  menuSlice.selectors;
