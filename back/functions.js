import { __dirname } from "./config.js";
const fileURL = __dirname + "/db/userMode.json";
import fs from "fs";

export const buildResponseMessage = (statusCode, message, data) => {
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
};

export const readJsonFile = (res) => {
  try {
    const rawdata = fs.readFileSync(fileURL);
    const users = JSON.parse(rawdata);
    return users;
  } catch (error) {
    res
      .status(500)
      .send(buildResponseMessage(500, `ERROR ${action} the user!`, null));
  }
};

export const writeInFile = (res, json, action) => {
  try {
    fs.writeFileSync(fileURL, JSON.stringify(json));
    res
      .status(200)
      .send(buildResponseMessage(200, `Success ${action} the user!`, null));
  } catch (error) {
    res
      .status(500)
      .send(buildResponseMessage(500, `ERROR ${action} the user!`, null));
  }
};
