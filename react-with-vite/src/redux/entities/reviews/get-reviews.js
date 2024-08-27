import { createAsyncThunk } from "@reduxjs/toolkit";
import { isReviewAvailable } from "../restaurants";

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
    condition: (restId, { getState }) => {
      return !isReviewAvailable(getState(), restId);
    },
  }
);