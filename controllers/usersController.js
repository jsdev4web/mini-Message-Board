const db = require("../db/queries");
//const links = require('../app');

//navbar links setup
const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);
  console.log(links)
  res.render("index", {
    links: links,
    messages: messages,
  })
  //res.send(messages.map(message => message.users + 
    //"<br>" + message.text + "<br>" + message.date).join(", <br><br>"));
}

async function createMessageGet(req, res) {
  res.render("new")
}

async function createMessagePost(req, res) {
  const { text, users, date } = req.body;
  await db.insertMessages(text, users, date);
  res.redirect("/");
}

async function singleMessageGet (req, res) { 
    const id = req.params.id
    console.log(id)
    const messages = await db.getAllMessages();
        res.render('details', { messages: messages[id] })
  }


module.exports = {
       getMessages,
  createMessageGet,
  createMessagePost,
  singleMessageGet
};