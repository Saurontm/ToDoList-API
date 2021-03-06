let tasks = require("../../tasks");

exports.tasksFetch = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  //this is to help avoid having two objects with the same id
  const id = tasks[tasks.length-1].id+1;
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

exports.updateTask = (req, res) => {
  const { taskID } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskID);
  if (foundTask) {
    foundTask.done = !foundTask.done;
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task Not Found." });
  }
};
