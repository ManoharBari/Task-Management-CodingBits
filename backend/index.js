import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.route.js";
import authRoutes from "./src/routes/auth.route.js";
import tasks from "./src/routes/TaskRouter.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log("idhr#######", err);
  });
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Listening on server 3000 !!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/tasks", tasks);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
