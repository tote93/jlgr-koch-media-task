import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "actions",
  initialState: {
    editable: true,
  },
  reducers: {
    setEditable: (state) => {
      state.editable = !state.editable;
    },
  },
});

export const { setEditable } = actionSlice.actions;

export const selectEditable = (state) => state.actions.editable;

export default actionSlice.reducer;
