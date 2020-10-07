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
import { useDispatch } from "react-redux";
import { addToList } from "../../features/userList/userListSlice";

function AddUserForm() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setName("");
    setPhone("");
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = {
      user: { name: name, phone: phone, email: email },
    };
    const error = validateForm(json);
    if (Object.keys(error).length === 0) {
      dispatch(addToList(json.user));
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
    <div>
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
              id="name"
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
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="text"
              fullWidth
              value={phone}
              onChange={handleChangePhone}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleSubmit} color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddUserForm;
