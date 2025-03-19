const { Router } = require("express")
const usersController = require("../controllers/usersController")
const newRouter = Router()

newRouter.get("/", usersController.getMessages)
newRouter.get("/:id", usersController.singleMessageGet)
newRouter.get("/new", usersController.createMessageGet)
newRouter.post("/new", usersController.createMessagePost)


module.exports = newRouter;


//commmands to create db so far
//CREATE DATABASE mini_messages_board;
/* 
mini_messages_board=# CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 )
  ); */
  