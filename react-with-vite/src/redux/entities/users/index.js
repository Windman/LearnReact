import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUserIds: (state) => state.ids,
  },
});

export const { selectUserById, selectUserIds } = usersSlice.selectors;
