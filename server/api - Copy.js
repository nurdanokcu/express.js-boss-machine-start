const express = require("express");
const apiRouter = express.Router();
const db = require("./db");

// Logging Middleware
apiRouter.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// ============= MINIONS ROUTES =============

// GET /api/minions - Get all minions
apiRouter.get("/minions", (req, res) => {
  const allMinions = db.getAllFromDatabase("minions");
  res.send(allMinions);
});

// POST /api/minions - Create new minion
apiRouter.post("/minions", (req, res) => {
  // TODO: Get minion from request body, add to database, send back
});

// GET /api/minions/:minionId - Get single minion
apiRouter.get("/minions/:minionId", (req, res) => {
  // TODO: Get minion by id from request params
});

// PUT /api/minions/:minionId - Update single minion
apiRouter.put("/minions/:minionId", (req, res) => {
  // TODO: Update minion with new data from request body
});

// DELETE /api/minions/:minionId - Delete single minion
apiRouter.delete("/minions/:minionId", (req, res) => {
  // TODO: Delete minion by id
});

// ============= IDEAS ROUTES =============

// GET /api/ideas - Get all ideas
apiRouter.get("/ideas", (req, res) => {
  // TODO: Copy pattern from GET /minions
});

// POST /api/ideas - Create new idea
apiRouter.post("/ideas", (req, res) => {
  // TODO: Similar pattern to POST /minions
});

// GET /api/ideas/:ideaId - Get single idea
apiRouter.get("/ideas/:ideaId", (req, res) => {
  // TODO: Similar pattern to GET /minions/:minionId
});

// PUT /api/ideas/:ideaId - Update single idea
apiRouter.put("/ideas/:ideaId", (req, res) => {
  // TODO: Similar pattern to PUT /minions/:minionId
});

// DELETE /api/ideas/:ideaId - Delete single idea
apiRouter.delete("/ideas/:ideaId", (req, res) => {
  // TODO: Similar pattern to DELETE /minions/:minionId
});

// ============= MEETINGS ROUTES =============

// GET /api/meetings - Get all meetings
apiRouter.get("/meetings", (req, res) => {
  // TODO: Get all meetings from database
});

// POST /api/meetings - Create new meeting (auto-generated)
apiRouter.post("/meetings", (req, res) => {
  // TODO: Use db.createMeeting() to create, then add to database
});

// DELETE /api/meetings - Delete all meetings
apiRouter.delete("/meetings", (req, res) => {
  // TODO: Delete all meetings from database
});

module.exports = apiRouter;
