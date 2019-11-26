const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const DB_URI = "mongodb://localhost:27017/my_app_db";
const MONGOOSE_CONNECTION_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true
};
const app = express();

app.get("/", (req, res) => {
  res.json("Containerize me!");
});

mongoose.connect(DB_URI, MONGOOSE_CONNECTION_OPTIONS, err => {
  if (err) throw err;

  const server = app.listen(PORT, () => {
    console.log(
      `Listening to the smooth sounds of port ${server.address().port}...`
    );
  });
});
