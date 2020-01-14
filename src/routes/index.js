const express = require("express");
const router = express.Router(); //using router

router.get("/index", function(req, res) {
  res.status(200).send("hello world!");
});

module.exports = router; //export router for other file using
