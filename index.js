const express = require("express");
const poems = require("./data/db.json");
const path = require("path");

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

const PORT = 5000 || process.env.PORT;

app.listen(PORT);
