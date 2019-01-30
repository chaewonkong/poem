const express = require("express");
const poems = require("./data/db.json");
const path = require("path");
const _ = require("lodash");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
