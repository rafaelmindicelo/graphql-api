const db = require("../db");

module.exports = async function findUser(filter) {
  const key = Object.keys(filter)[0];
  const value = Object.values(filter)[0];

  const profile = await db("profiles").where(key, value);

  return profile
}

