let tasks = require("../../tasks");

exports.tasksFetch = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const id = tasks.length + 1;
  const newTask = {
    id: id,
    done: false,
    ...req.body,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const { taskID } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskID);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskID);
    res.status(204).end();
  } else {
    res.status(404).json({ message: `Task not found of ${taskID}` });
  }
};
