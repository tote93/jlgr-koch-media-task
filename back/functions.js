import { __dirname } from "./config.js";
const fileURL = __dirname + "/db/userModel.json";
import fs from "fs";
/* CheckMail
  --> Input: statusCode - The response statusCode
  --> Input: message - Message to be sent to the front-end
  --> Input: data - Object with the data to be sent to the front-end
  --> Output: Object with StatusCode - message and data
*/
export const buildResponseMessage = (statusCode, message, data) => {
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
};

/* CheckMail
  --> Input: res - the response that will be used to send messages to the front-end
  --> Output: Object with the user list read from file
*/
export const readJsonFile = (res) => {
  try {
    const rawdata = fs.readFileSync(fileURL);
    const users = JSON.parse(rawdata);
    return users;
  } catch (error) {
    res
      .status(500)
      .send(buildResponseMessage(500, `ERROR Reading the user list!`, null));
  }
};
/* CheckMail
  --> Input: res - the response that will be used to send messages to the front-end
  --> Input: json - The JSON object to be written in the file
  --> Input: action - Action that determines what will be used to send the message to the user
  --> Output: Send the response to the front-end
*/
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
