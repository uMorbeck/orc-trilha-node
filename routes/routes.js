const routes = require("express").Router();
const TaskController = require("../controllers/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/search/:id/:method", TaskController.searchTask);
routes.post("/update/:id", TaskController.updateOneTask);
routes.get("/deleteTask/:id", TaskController.deleteOneTask);

module.exports = routes;
