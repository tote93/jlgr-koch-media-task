import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonCell from "../buttonCell/ButtonCell";
import { setEditable } from "../../features/actions/actionsSlice";
import { editUserOnList } from "../../features/userList/userListSlice";
import { validateForm, isNumberPhone } from "../../functions";
import { TextField } from "@material-ui/core";

function TableRow({ user, id }) {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleClickBackground = (e) => {
    //e.target.parentElement.style.background = "#738CE9";
  };
  const editUser = () => {
    setIsEditable(!isEditable);
  };

  const saveUser = () => {
    const json = {
      user: { name: name, phone: phone, email: email },
      id: id,
    };
    const error = validateForm(json);
    if (Object.keys(error).length === 0) {
      dispatch(editUserOnList(json, user));
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

  return (
    <tr key={user.email} onClick={handleClickBackground}>
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
      <td data-label="email">
        <TextField
          margin="dense"
          type="text"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={Boolean(errors.email)}
          helperText={errors.email}
          disabled={isEditable ? false : true}
        />
      </td>
      <td data-label="phone">
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
