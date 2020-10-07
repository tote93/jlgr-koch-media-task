import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { isNumberPhone, validateForm } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import {
  addToList,
  selectUserList,
} from "../../features/userList/userListSlice";
import axios from "../../axios";

import generateMessage from "../generateMessage";
function AddUserForm() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const userList = useSelector(selectUserList);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setName("");
    setPhone("");
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = {
      id: userList.length,
      name: name,
      phone: phone,
      email: email,
    };
    const error = validateForm(json);
    if (Object.keys(error).length === 0) {
      const response = await axios.post("/createUser", json);
      generateMessage(response);
      dispatch(addToList(json));
      handleClose();
    } else {
      setErrors(error);
    }
  };
  const handleChangePhone = (e) => {
    const input = e.target.value;
    isNumberPhone(input) ? setPhone(input) : setPhone(phone);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add New User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a new user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new user, please fill in the information detailed below.
          </DialogContentText>
          <form autoComplete="off">
            <TextField
              autoFocus
              label="Name"
              margin="dense"
              type="text"
              fullWidth
              value={name}
              helperText={errors.name}
              error={Boolean(errors.name)}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value.replace(/\s/g, "_"))}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="text"
              fullWidth
              value={phone}
              onChange={handleChangePhone}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleSubmit} color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default AddUserForm;
