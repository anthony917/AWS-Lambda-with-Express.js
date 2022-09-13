const express = require("express");
const router = express.Router(); //using router

router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

module.exports = router; //export router for other file using
