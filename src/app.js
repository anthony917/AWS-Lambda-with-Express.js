const express = require("express");
const app = express();

app.use(require("./routes/index"));
app.use(require("./routes/speakers"));
app.use(require("./routes/time"));

module.exports = app;
