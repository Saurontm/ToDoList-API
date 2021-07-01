const express = require("express");

//contoller
const { tasksFetch } = require("./controllers");

const router = express.Router();

//get tasks
router.get("/", tasksFetch);

module.exports = router;
