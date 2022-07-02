require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");
const app = express();

require("./config")(app);


const capitalized = require("./utils/capitalized");
const projectName = "adopted";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

require("./config/session.config")(app)

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app;
