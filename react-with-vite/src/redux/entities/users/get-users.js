import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from ".";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
        `http://localhost:3001/api/users`
      );
  
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUserIds(getState()).length === 0;
    },
  }
);