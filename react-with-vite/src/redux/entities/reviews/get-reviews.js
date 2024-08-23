import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restId, { rejectWithValue }) => {
    const response = await fetch(
        `http://localhost:3001/api/reviews/?restaurantId=${restId}`
      );
  
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return true;
    },
  }
);