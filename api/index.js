import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000!");
});

// Api route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Api is working",
//   });
// });

app.use("/api/user/", userRouter);
