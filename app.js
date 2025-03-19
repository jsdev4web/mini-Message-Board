const express = require("express");
const app = express();

const path = require("node:path")
const assetsPath = path.join(__dirname, "public");
const newRouter = require("./routes/new")


app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", newRouter);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")


  

const PORT = process.env.DEV_PORT || 3000;
// port browsers listens on
app.listen(PORT, () => {
    console.log(`listing on port ${PORT}!`);
});

