import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //mostly from forms
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //mostly from url
app.use(express.static("public"));

// cookie-parser is mostly used to access the user's browser cookies from our
// server and can also set cookies, basically perform CRUD operation

app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
