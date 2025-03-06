const express = require("express");
const path = require("node:path")
const assetsPath = path.join(__dirname, "public");


const app = express();

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//navbar links setup
const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New" },
  ];

//response to server request
app.get("/", (req, res) => {
    res.render("index", { message: "EJS views setup, Hello, dynamic text", 
                        links: links });
  });

//response to server request
app.get("/new", (req, res) => {
    res.render("new", { message: "EJS New Page", 
                        links: links });
  });

const PORT = process.env.DEV_PORT || 3000;
// port browsers listens on
app.listen(PORT, () => {
    console.log(`listing on port ${PORT}!`);
});