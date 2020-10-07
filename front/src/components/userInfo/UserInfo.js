import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../features/user/userSlice";
import "./UserInfo.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

function UserInfo() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="userInfo">
      <div className="userInfo__title">
        <h2>Details</h2>
        <IconButton onClick={() => dispatch(setUser(null))}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="userInfo__details">
        <p>Name: {user.name}</p>
        <p>Email Address: {user.email}</p>
        <p>Mobile Number: {user.phone}</p>
      </div>
    </div>
  );
}

export default UserInfo;
