const routes = require("express").Router();
const TaskController = require("../controllers/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/search/:id/:method", TaskController.searchTask);
routes.get("/deleteTask/:id", TaskController.deleteOneTask);
routes.get("/check/:id", TaskController.taskCheck);
routes.post("/create", TaskController.createTask);
routes.post("/update/:id", TaskController.updateOneTask);

module.exports = routes;
