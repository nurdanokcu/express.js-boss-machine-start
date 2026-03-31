const express = require("express");
const meetingRouter = express.Router();
const {
  getAllFromDatabase,
  addToDatabase,
  createMeeting,
  deleteFromDatabaseById,
  deleteAllFromDatabase
} = require("../db");

// GET / - Get all meetings
meetingRouter.get("/", (req, res) => {
  const allMeetings = getAllFromDatabase("meetings");
  res.send(allMeetings);
});
meetingRouter.post("/", (req, res) => {
  const newMeeting = createMeeting();
  const { addToDatabase } = require("../db");
  const addedMeeting = addToDatabase("meetings", newMeeting);
  if (addedMeeting) {
    res.status(201).send(addedMeeting);
  } else {
    res.status(400).send();
  }
});
meetingRouter.delete("/", (req, res) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send();
});

module.exports = meetingRouter;
