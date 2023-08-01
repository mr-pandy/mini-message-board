var express = require("express");
var router = express.Router();

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

/* GET home page. */
router
  .get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
  })
  .post("/new", (req, res) => {
    const authorName = req.body.author;
    const authorMsg = req.body.message;
    messages.push({ text: authorMsg, user: authorName, added: new Date() });
    console.log(res.statusCode);
    res.redirect("/");
  });

module.exports = router;
