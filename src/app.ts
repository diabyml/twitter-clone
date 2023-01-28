import express from "express";

const app = express();

// app.use("/", (_, res) => res.send(`<h1>Hello, world from Express</h1>`));

app.use("/test", (_, res) => res.send("<h2>Testing express app</h2>"));

export default app;
