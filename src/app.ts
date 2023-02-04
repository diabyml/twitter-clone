import express from "express";
import cors from "cors";
import { mySession } from "./utils/cookies";
import { __prod__ } from "./constants";

const app = express();

app.use(
  cors({
    origin: __prod__ ? process.env.CORS_ORIGIN : "http://localhost:3000",
    credentials: true,
  })
);

app.use(mySession);

app.use("/home", (_, res) => res.send("<h2>Testing express app</h2>"));

export default app;
