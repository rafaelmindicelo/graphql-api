const ProfileService = require('../../../services/ProfileService');

module.exports = {
  Query: {
    profiles: async () => ProfileService.listProfiles()
  },
  Mutation: {
    createProfile: async (_, { data: { description } }) => ProfileService.createProfile(description)
  }
}