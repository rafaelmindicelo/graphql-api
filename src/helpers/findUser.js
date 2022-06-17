const db = require("../db");

module.exports = async function findUser(filter) {
  const key = Object.keys(filter)[0];
  const value = Object.values(filter)[0];

  const user = await db("users").where(key, value);

  return user
}

