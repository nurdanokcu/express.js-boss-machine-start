const express = require("express");
const minionRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabaseById,
} = require("../db");

// Validate :minionId once for all routes that use it
minionRouter.param("minionId", (req, res, next, minionId) => {
  if (isNaN(minionId)) {
    return res.sendStatus(404);
  }
  req.minionId = minionId; // keep it as a string
  next();
});

// GET / - Get all minions
minionRouter.get("/", (req, res) => {
  res.json(getAllFromDatabase("minions"));
});

// POST / - create minion
minionRouter.post("/", (req, res) => {
  const addedMinion = addToDatabase("minions", req.body);
  if (!addedMinion) {
    return res.sendStatus(400);
  }
  res.status(201).json(addedMinion);
});

// GET /:minionId - one minion
minionRouter.get("/:minionId", (req, res) => {
  const minion = getFromDatabaseById("minions", req.minionId);
  if (!minion) {
    return res.sendStatus(404);
  }
  res.json(minion);
});


minionRouter.put("/:minionId", (req, res) => {
  const updatedMinion = updateInstanceInDatabase("minions", {
    ...req.body,
    id: req.minionId,
  });
  if (!updatedMinion) {
    return res.sendStatus(404);
  }
  res.json(updatedMinion);
});

// DELETE /:minionId - delete minion
minionRouter.delete("/:minionId", (req, res) => {
  const deleted = deleteFromDatabaseById("minions", req.minionId);
  if (!deleted) {
    return res.sendStatus(404);
  }
  res.sendStatus(204);
});

module.exports = minionRouter;
