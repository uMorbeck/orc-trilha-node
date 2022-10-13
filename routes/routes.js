const routes = require("express").Router();
const TaskController = require("../controllers/TaskController");

routes.get("/", TaskController.getAll);

module.exports = routes;
