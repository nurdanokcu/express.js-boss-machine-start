const express = require("express");
const apiRouter = express.Router();
const minionRouter = require("./routes/minions");


apiRouter.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

apiRouter.use('/minions', minionRouter);
module.exports = apiRouter;
