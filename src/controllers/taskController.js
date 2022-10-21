const Task = require("../models/Task");
const routes = require("express").Router();

let message = "";
let type = "";

//getAllTasks
routes.get("/:user", async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
      type = "";
    }, 2000);

    const user = req.params.user;

    const tasksList = await Task.find({ owner: user });

    return res.render("index", {
      tasksList,
      task: null,
      taskDelete: null,
      message,
      type,
      user,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//searchTask
routes.get("/:user/search/:id/:method", async (req, res) => {
  const user = req.params.user;

  try {
    const tasksList = await Task.find({ owner: user });

    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", {
        tasksList,
        task,
        taskDelete: null,
        message,
        type,
        user,
      });
    } else if (req.params.method == "delete") {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", {
        tasksList,
        task: null,
        taskDelete,
        message,
        type,
        user,
      });
    } else {
      res.redirect(`/todolist/${user}`);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//createTask
routes.post("/:user/create", async (req, res) => {
  const task = req.body;
  const user = req.params.user;
  task.owner = user;

  if (!task.task) {
    message = "Insira um texto, antes de adicionar a tarefa";
    type = "danger";
    return res.redirect(`/todolist/${user}`);
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso";
    type = "success";

    return res.redirect(`/todolist/${user}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//updateOneTask
routes.post("/:user/update/:id", async (req, res) => {
  const user = req.params.user;

  try {
    const task = req.body;

    if (!task.edited) {
      task.edited = true;
    }

    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso";
    type = "success";

    res.redirect(`/todolist/${user}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//deleteOneTask
routes.get("/:user/deleteTask/:id", async (req, res) => {
  const user = req.params.user;

  try {
    await Task.deleteOne({ _id: req.params.id });

    message = "Tarefa apagada com sucesso";
    type = "success";

    res.redirect(`/todolist/${user}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//taskCheck
routes.get("/:user/check/:id", async (req, res) => {
  const user = req.params.user;

  try {
    const task = await Task.findOne({ _id: req.params.id });

    task.check ? (task.check = false) : (task.check = true);

    await Task.updateOne({ _id: req.params.id }, task);

    res.redirect(`/todolist/${user}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = (app) => app.use("/todolist", routes);
