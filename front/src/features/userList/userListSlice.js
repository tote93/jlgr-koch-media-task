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
        return user.email !== action.payload.email;
      });
    },
    addToList: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    editUserOnList: (state, action) => {
      state.list = state.list.map((user, id) => {
        return action.payload.id === id ? action.payload.user : user;
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
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUserList = (state) => state.userList.list;

export default userListSlice.reducer;
