const express = require("express");

//contoller
const { tasksFetch,createTask } = require("./controllers");

const router = express.Router();

//get tasks
router.get("/", tasksFetch);

//create tasks
router.post("/",createTask);





module.exports = router;
