import "./config/env.js"
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Bank Transaction System API" });
});

app.use(errorHandler);

export default app;