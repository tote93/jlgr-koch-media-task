import app from "./app.js";
const port = process.env.PORT || 9000;
import { API_VERSION, IP_SERVER } from "./config.js";

app.listen(port, () => {
  console.log(
    `Listening on url:port --> http://${IP_SERVER}:${port}/api/${API_VERSION}/`
  );
});
