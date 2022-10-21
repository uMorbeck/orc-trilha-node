const routes = require("express").Router();
const taskController = require("../controllers/taskController");

routes.get("/", taskController.getAllTasks);
routes.get("/search/:id/:method", taskController.searchTask);
routes.get("/deleteTask/:id", taskController.deleteOneTask);
routes.get("/check/:id", taskController.taskCheck);
routes.post("/create", taskController.createTask);
routes.post("/update/:id", taskController.updateOneTask);

module.exports = routes;
