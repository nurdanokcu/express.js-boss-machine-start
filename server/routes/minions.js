const express = require("express");
const minionRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabaseById
} = require("../db");

// GET / - Get all minions
minionRouter.get("/", (req, res) => {
  const allMinions = getAllFromDatabase("minions");
  res.send(allMinions);
});
minionRouter.post("/", (req, res) => {
  const newMinion = req.body;
  const addedMinion = addToDatabase("minions", newMinion);
  if (addedMinion) {
    res.status(201).send(addedMinion);
  } else {
    res.status(400).send();
  }
});
minionRouter.get("/:minionId", (req, res) => {
  const minionId = req.params.minionId;
  const minion = getFromDatabaseById("minions", minionId);
  if (minion) {
    res.status(200).send(minion);
  } else {
    res.status(404).send();
  }
});
minionRouter.put("/:minionId", (req, res) => {
  const minionId = req.params.minionId;
  const minionToUpdate = req.body;
  minionToUpdate.id = minionId;
  const updatedMinion = updateInstanceInDatabase("minions", minionToUpdate);
  if (updatedMinion) {
    res.status(200).send(updatedMinion);
  } else {
    res.status(400).send();
  }
});
minionRouter.delete("/:minionId", (req, res) => {
  const minionId = req.params.minionId;
  const deleted = deleteFromDatabaseById("minions", minionId);
  if (deleted) {
    res.status(200).send({ message: 'Minion deleted successfully' });
  } else {
    res.status(404).send();
  }
});

module.exports = minionRouter;
