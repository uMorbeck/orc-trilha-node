const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const User = require("../models/user");

const routes = express.Router();

let message = "";
let type = "";

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

routes.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
    type = "";
  }, 2000);

  res.render("login", { message, type });
});

routes.get("/createAccount", (req, res) => {
  setTimeout(() => {
    message = "";
    type = "";
  }, 2000);

  res.render("register", { message, type });
});

routes.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      message = "Email já registrado";
      type = "danger";
      return res.redirect("/createAccount");
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.redirect(`/todolist/${user._id}`);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

routes.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    message = "Usuário não encontrado";
    type = "danger";
    return res.redirect("/");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    message = "Senha incorreta";
    type = "danger";
    return res.redirect("/");
  }

  user.password = undefined;

  res.redirect(`/todolist/${user._id}`);
  // {
  //   user: user._id,
  //   token: generateToken({ id: user._id }),
  // }
});

module.exports = (app) => app.use("/", routes);
