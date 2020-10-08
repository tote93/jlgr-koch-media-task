import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    list: null,
  },
  reducers: {
    createList: (state, action) => {
      state.list = action.payload;
    },
    deleteUserFromList: (state, action) => {
      state.list = state.list.filter((user) => {
        return user.id !== action.payload.id;
      });
    },
    addToList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    editUserOnList: (state, action) => {
      state.list = state.list.map((user) => {
        return action.payload.id === user.id ? action.payload.user : user;
      });
    },
  },
});

export const {
  createList,
  deleteUserFromList,
  addToList,
  editUserOnList,
} = userListSlice.actions;

export const selectUserList = (state) => state.userList.list;

export default userListSlice.reducer;
