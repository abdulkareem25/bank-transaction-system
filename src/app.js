import "./config/env.js"
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Bank Transaction System API" });
});

app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;