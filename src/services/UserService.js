const db = require("../db");
const findUser = require("../helpers/findUser");

class UserService {
  createUser = async (data) => {
    const { email } = data;

    const users = await findUser({ email });

    if (users.length > 0) throw new Error("User already exists")

    //await (await db("users").insert(data).returning("*"))[0]
    await db("users")
      .insert(data)

    const user = await (await findUser({ email }))[0];

    return user
  }

  updateUser = async (id, data) => {
    const users = await findUser({ id });

    if (users.length === 0) throw new Error("User not found")

    await db("users")
      .where({ id })
      .update(data)

    const user = await (await findUser({ id }))[0];

    return user
  }

  deleteUser = async ({ filter }) => {
    const { id, email } = filter;
    const users = await findUser(id ? { id } : { email });

    if (users.length === 0) throw new Error("User not found")

    await db("users")
      .where("id", users[0].id)
      .del()

    return "User successfully deleted"
  }

  listUsers = async (last_name) => {
    if(last_name) return await findUser({ last_name })      

    return await db("users")
  }

  listUser = async (filter) => {
    const users = await findUser(filter);

    if(users.length === 0) throw new Error("User not found")

    const user = await (await findUser({ id: users[0].id }))[0];

    return user
  }
}

module.exports = new UserService();