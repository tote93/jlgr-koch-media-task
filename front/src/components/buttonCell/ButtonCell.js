import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./ButtonCell.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { deleteUserFromList } from "../../features/userList/userListSlice";
import axios from "../../axios";

import generateMessage from "../generateMessage";
function ButtonCell({ user, onEditUser, isEditable, onSaveUser }) {
  const dispatch = useDispatch();
  const deleteUser = async () => {
    const response = await axios.put("/deleteUser", {
      id: user.id,
    });
    generateMessage(response);
    dispatch(deleteUserFromList(user));
  };

  return (
    <ButtonGroup
      className="buttonCell"
      size="large"
      color="primary"
      aria-label="large outlined primary button group"
    >
      <Button onClick={() => dispatch(setUser(user))}>Read</Button>
      <Button onClick={isEditable ? onSaveUser : onEditUser}>
        {isEditable ? "Save" : "Update"}
      </Button>
      <Button onClick={() => deleteUser()}>Delete</Button>
    </ButtonGroup>
  );
}

export default ButtonCell;
