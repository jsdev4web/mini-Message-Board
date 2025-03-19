require('dotenv').config()
const pool = require("../.env")

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessages(text, users, date) {
  await pool.query("INSERT INTO messages (text, users, date) VALUES ($1, $2, $3)", [text, users, date]);
}

module.exports = {
  getAllMessages,
  insertMessages
};
