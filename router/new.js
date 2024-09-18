const express = require("express");
const { measureMemory } = require("vm");
const newRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

newRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});
newRouter.get("/new", (req, res) => {
  res.render("form", {});
});
newRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});
newRouter.get("/:index", (req, res) => {
  const { index } = req.params;
  const messageDetails = messages.find((msg, arrayIndex) => {
    return arrayIndex == index;
  });

  res.render("message", { message: messageDetails });
});
module.exports = newRouter;
