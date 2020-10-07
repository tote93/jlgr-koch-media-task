import express from "express";
import cors from "cors";
import { API_VERSION } from "./config.js";
import api from "./routers/api.js";

const app = express();
app.use(express.json());

// Configure Header HTTP Cors
app.use(cors());

// Router Basic
app.use(`/api/${API_VERSION}`, api);

export default app;
