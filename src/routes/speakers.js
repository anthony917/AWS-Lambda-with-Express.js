const express = require("express");
const router = express.Router(); //using router
const dataFile = require("../data/data.json");
const speakers = dataFile.speakers;

router.get("/speakers", function(req, res) {
  res.status(200).json(speakers);
});

router.post("/speakers", (req, res) => {
  const name = req.body.name;
  const response = `Hello ${name}`;
  console.info(response);
  res.status(200).send(response);
});

router.get("/speakers/:speakerid", function(req, res) {
  let speakerId = req.params.speakerid;
  const response = speakers.find(speaker => {
    return speaker.id == speakerId;
  });
  res.status(200).send(response);
});

module.exports = router; //export router for other file using
