require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const connectToDb = require("./database/db");

const port = process.env.PORT;

connectToDb();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

require("./controllers/authController")(app);
require("./controllers/taskController")(app);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
