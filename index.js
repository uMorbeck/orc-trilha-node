require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const port = process.env.PORT;

connectToDb();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
