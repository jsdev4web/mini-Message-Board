const express = require('express')
const router = express.Router()
const messages = require('../app');
const links = require('../app');


//response to server request
router.get("/", (req, res, next) => {
    console.log(messages)
    res.render("new");
  });


router.post("/", (req, res, next) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect("/")
  });

router.get("/:id", (req, res) => { 
  const id = req.params.id
  console.log(id)
      res.render('details', { messages: messages[id] })
})

module.exports = router;