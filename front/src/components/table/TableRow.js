import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonCell from "../buttonCell/ButtonCell";
import { editUserOnList } from "../../features/userList/userListSlice";
import {
  validateForm,
  isNumberPhone,
  controlSelectedRow,
} from "../../functions";
import { TextField } from "@material-ui/core";
import generateMessage from "../generateMessage";
import axios from "../../axios";

function TableRow({ user }) {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const editUser = () => {
    setIsEditable(!isEditable);
  };

  const saveUser = async () => {
    const json = {
      id: user.id,
      name: name,
      phone: phone,
      email: email,
    };
    const error = validateForm(json);
    if (Object.keys(error).length === 0) {
      const response = await axios.put("/updateUser", json);
      generateMessage(response);
      dispatch(editUserOnList(user.id));
      setErrors({});
      setIsEditable(!isEditable);
    } else {
      setErrors(error);
    }
  };

  const handleChangePhone = (e) => {
    const input = e.target.value;
    isNumberPhone(input) ? setPhone(input) : setPhone(phone);
  };
  const handleClickSelect = (e) => {
    const tagName = e.target.tagName;
    const allowedTags = ["TD", "TH", "INPUT"];
    if (allowedTags.includes(tagName)) controlSelectedRow(user.id);
  };

  return (
    <tr id={user.id} onClick={handleClickSelect} className="row">
      <th scope="row" data-label="name">
        <TextField
          margin="dense"
          type="text"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          helperText={errors.name}
          error={Boolean(errors.name)}
          disabled={isEditable ? false : true}
        />
      </th>
      <td data-label="email" onClick={handleClickSelect}>
        <TextField
          margin="dense"
          type="text"
          fullWidth
          onChange={(e) => setEmail(e.target.value.replace(/\s/g, "_"))}
          value={email}
          error={Boolean(errors.email)}
          helperText={errors.email}
          disabled={isEditable ? false : true}
        />
      </td>
      <td data-label="phone" onClick={handleClickSelect}>
        <TextField
          margin="dense"
          type="text"
          fullWidth
          disabled={isEditable ? false : true}
          onChange={handleChangePhone}
          value={phone}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />
      </td>
      <td data-label="actions">
        <ButtonCell
          user={user}
          onSaveUser={saveUser}
          isEditable={isEditable}
          onEditUser={editUser}
        />
      </td>
    </tr>
  );
}

export default TableRow;
