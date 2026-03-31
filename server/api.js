const express = require("express");
const apiRouter = express.Router();
const minionRouter = require("./routes/minions");
const ideaRouter = require("./routes/ideas");
const meetingRouter = require("./routes/meetings");



apiRouter.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});


apiRouter.use('/minions', minionRouter);
apiRouter.use('/ideas', ideaRouter);
apiRouter.use('/meetings', meetingRouter);


module.exports = apiRouter;
