import React from "react";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { checkStatusCode } from "../functions";

function generateMessage(response) {
  const errorFetch = checkStatusCode(response.data);
  if (errorFetch) {
    NotificationManager.error(`${errorFetch.message}`, `Errors found!`, 2000);
    return;
  } else {
    NotificationManager.success(`${response.data.message}`, `Success!`, 2000);
  }
}

export default generateMessage;
