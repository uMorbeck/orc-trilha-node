const mongoose = require("mongoose");
require("dotenv").config();

const DB_connectionString = process.env.DB_URI;

const connectToDb = () => {
  mongoose
    .connect(DB_connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
