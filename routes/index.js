const express = require("express");
const router = express.Router();

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

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
router.post("/new", (req, res, next) => {
  const authorName = req.body.author;
  const message = req.body.message;
  console.log(authorName, message, req.body);
  messages.push({
    text: message,
    user: authorName,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
