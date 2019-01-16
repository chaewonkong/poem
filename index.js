const express = require("express");
const poems = require("./data/db.json");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/api/poems", (req, res) => {
  res.send(poems);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/poems/new", (req, res) => {
  // req.params
  console.log(req.params);
  res.redirect("/");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT);
