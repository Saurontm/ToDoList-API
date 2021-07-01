const tasks = require("../../tasks");

exports.tasksFetch = (req, res) => {
  res.json(tasks);
};
