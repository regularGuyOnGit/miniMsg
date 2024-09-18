const express = require("express");
const app = express();
const path = require("node:path");
const logger = require("morgan");
const newRouter = require("./router/new");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger());
app.use(express.urlencoded({ extended: true }));

app.use("/", newRouter);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
