const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./API/task/routes");
//routes

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/tasks", taskRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
