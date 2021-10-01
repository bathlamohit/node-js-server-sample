const express = require("express");
const app = express();



require("./database")(app);
require("./router")(app);

module.exports = app;