import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());
app.use("/books", booksRoute);

app.get("/", (req, res) => {
  return res.status(234).send("Welcome");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to the DB");

    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
