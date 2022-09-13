const express = require("express");

const app = express();

app.use(require("./routes/index"));
app.use(require("./routes/time"));

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = app;
