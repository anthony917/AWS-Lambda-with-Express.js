const serverless = require("serverless-http");
const app = require("./src/app");

module.exports.init = serverless(app);
