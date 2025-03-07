const express = require("express");
const path = require("node:path")
const assetsPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//navbar links setup
const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];

  //objects i need to populate via form
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ]

  module.exports = messages, links


//response to server request
app.get("/", (req, res) => {
  
    res.render("index", { links: links, 
                        messages: messages });
  });

const newRouter = require('./routes/new')

app.use('/new', newRouter)

const PORT = process.env.DEV_PORT || 3000;
// port browsers listens on
app.listen(PORT, () => {
    console.log(`listing on port ${PORT}!`);
});

