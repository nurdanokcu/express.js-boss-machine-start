const express = require("express");
const ideaRouter = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabaseById,
} = require("../db");

const checkMillionDollarIdea = require("../checkMillionDollarIdea");

// Validate :ideaId once for all routes that use it
ideaRouter.param("ideaId", (req, res, next, ideaId) => {
  if (isNaN(ideaId)) {
    return res.sendStatus(404);
  }

  req.ideaId = ideaId; // keep as string
  next();
});

// GET / - Get all ideas
ideaRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("ideas"));
});

// POST / - create idea
ideaRouter.post("/", checkMillionDollarIdea, (req, res) => {
  const addedIdea = addToDatabase("ideas", req.body);
  if (!addedIdea) {
    return res.sendStatus(400);
  }
  res.status(201).send(addedIdea);
});

// GET /:ideaId - one idea
ideaRouter.get("/:ideaId", (req, res) => {
  const idea = getFromDatabaseById("ideas", req.ideaId);
  if (!idea) {
    return res.sendStatus(404);
  }
  res.status(200).send(idea);
});

// PUT /:ideaId - update idea
ideaRouter.put("/:ideaId", (req, res) => {
  const updatedIdea = updateInstanceInDatabase("ideas", {
    ...req.body,
    id: req.ideaId,
  });
  if (!updatedIdea) {
    return res.sendStatus(404);
  }
  res.status(200).send(updatedIdea);
});

// DELETE /:ideaId - delete idea
ideaRouter.delete("/:ideaId", (req, res) => {
  const deleted = deleteFromDatabaseById("ideas", req.ideaId);
  if (!deleted) {
    return res.sendStatus(404);
  }
  res.sendStatus(204);
});

module.exports = ideaRouter;