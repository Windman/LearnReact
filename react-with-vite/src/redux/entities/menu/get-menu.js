import { createAsyncThunk } from "@reduxjs/toolkit";
import { isMenuAvailable } from "../restaurants";

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async (restId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes/?restaurantId=${restId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (restId, { getState }) => {
      return !isMenuAvailable(getState(), restId);
    },
  }
);
