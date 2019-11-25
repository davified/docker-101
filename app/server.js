const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("Containerize me!");
});

const server = app.listen(PORT, () => {
  console.log(
    `Listening to the smooth sounds of port ${server.address().port}...`
  );
});
