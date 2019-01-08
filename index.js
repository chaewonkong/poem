const express = require("express");
const poems = require("./data/db.json");

const app = express();

app.get("/api/poems", (req, res) => {
  res.send(poems);
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT);
