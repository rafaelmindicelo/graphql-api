const db = require("../db");
const findProfile = require("../helpers/findProfile");

class ProfileService {
  createProfile = async (description) => {
    const profiles = await findProfile({ description });
    
    if (profiles.length > 0) throw new Error("Profile already exists")

    await db("profiles")
      .insert({
        description
      }
    )

    const profile = await (await findProfile({ description }))[0];

    return profile;
  }

  listProfiles = async () => db("profiles")
}

module.exports = new ProfileService();