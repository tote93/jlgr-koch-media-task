import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/userList/userListSlice";
import userReducer from "../features/user/userSlice";
import editableReducer from "../features/actions/actionsSlice";

export default configureStore({
  reducer: {
    userList: userListReducer,
    user: userReducer,
    editable: editableReducer,
  },
});
