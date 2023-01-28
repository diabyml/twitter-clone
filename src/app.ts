import express from "express";

const app = express();

app.use("/", (_, res) => res.send(`<h1>Hello, world from Express</h1>`));

export default app;
