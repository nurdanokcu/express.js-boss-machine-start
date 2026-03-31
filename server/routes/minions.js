const express = require("express");
const minionRouter = express.Router();
const db = require("../db");

// GET / - Get all minions
minionRouter.get("/", (req, res) => {
  const allMinions = db.getAllFromDatabase("minions");
  res.send(allMinions);
});

module.exports = minionRouter;
