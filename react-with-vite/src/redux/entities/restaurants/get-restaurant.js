import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from ".";

export const getRestaurant = createAsyncThunk(
  "restaurant/getRestaurant",
  async (restId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (restId, { getState }) => {
      return selectRestaurantById(getState(), restId);
    },
  }
);
