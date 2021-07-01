const tasks = require("../../tasks");

exports.tasksFetch = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req,res)=> {
const id = tasks.length +1;
const newTask = {
  id : id,
  done : false,
  ...req.body,
};
tasks.push(newTask);
res.status(201).json(newTask);
};
