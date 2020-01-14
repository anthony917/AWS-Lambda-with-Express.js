const express = require("express");
const router = express.Router(); //using router

router.get("/time", (req, res) => {
  let timeNow = Date(Date.now());
  res.status(200).send(timeNow.toString());
});

module.exports = router; //export router for other file using
