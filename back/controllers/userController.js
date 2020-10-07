import {
  buildResponseMessage,
  readJsonFile,
  writeInFile,
} from "../functions.js";

export const getUserList = (req, res) => {
  const jsonUsers = readJsonFile(res);
  res
    .status(200)
    .send(
      buildResponseMessage(200, `Success retrieving the users!`, jsonUsers)
    );
};

export const createUser = (req, res) => {
  const user = req.body;
  const jsonList = readJsonFile(res);
  jsonList.push(user);
  writeInFile(res, jsonList, "creating");
};

export const updateUser = (req, res) => {
  const userModified = req.body;
  const action = "updating";
  const idUser = userModified.id;
  const json = readJsonFile(res);
  modifyJsonByAction(res, json, idUser, action, userModified);
};

export const deleteUser = (req, res) => {
  const action = "deleting";
  const userToBeDeleted = req.body;
  const json = readJsonFile(res);
  const idUser = userToBeDeleted.id;
  modifyJsonByAction(res, json, idUser, action, null);
};

const modifyJsonByAction = (res, json, id, action, newUser) => {
  const foundIndex = json.findIndex(
    (item) => parseInt(item.id) === parseInt(id)
  );

  if (foundIndex >= 0) {
    if (action === "deleting") json.splice(foundIndex, 1);
    else json.splice(foundIndex, 1, newUser);
    writeInFile(res, json, action);
  } else {
    res
      .status(500)
      .send(buildResponseMessage(500, `ERROR ${action} the user!`, null));
  }
};
