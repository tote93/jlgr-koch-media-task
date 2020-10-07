import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "editContent",
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
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEditable = (state) => state.editContent;

export default actionSlice.reducer;
