import express from "express";
import {
  createUser,
  getUserList,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { buildResponseMessage } from "../functions.js";

// Config
const api = express.Router();

api.get("/getUserList", getUserList);

api.post("/createUser", createUser);

api.put("/updateUser", updateUser);

api.delete("/deleteUser", deleteUser);

api.get("*", (req, res) => {
  res
    .status(404)
    .send(buildResponseMessage(404, `ERROR non existing route!`, null));
});

api.post("*", (req, res) => {
  res
    .status(404)
    .send(buildResponseMessage(404, `ERROR non existing route!`, null));
});
export default api;
