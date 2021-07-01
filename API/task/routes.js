const express = require("express");

//contoller
const { tasksFetch, createTask, deleteTask } = require("./controllers");

const router = express.Router();

//get tasks
router.get("/", tasksFetch);

//create tasks
router.post("/", createTask);

//delete task
router.delete("/:taskID", deleteTask);

module.exports = router;
