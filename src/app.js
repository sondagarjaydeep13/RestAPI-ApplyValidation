require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;
const dburl = process.env.DBURL;
app.use(express.json());
const userrouter = require("../router/userrouter");
app.use("/", userrouter);
app.listen(port, () => {
  console.log("Server running on port :" + port);
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("restAPI05_04 DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
