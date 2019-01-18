const express = require("express");
const poems = require("./data/db.json");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.post("/api/poems/new", (req, res) => {
  const { title, content, id } = req.body;
  const newPoems = [...poems.poems, { title, content, id }];
  fs.writeFile("./data/db.json", JSON.stringify({ poems: newPoems }), err => {
    if (err) throw err;
    res.status(200).send({ title, content, id });
  });
});

app.get("/api/poems", (req, res) => {
  res.send(poems);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
