import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-koch-media.herokuapp.com/api/v1/",
});
export default instance;
