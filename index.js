const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

/*
  Scalar Types: Int, Float, String, Boolean, ID
*/

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  formatError: (error) => new Error(error.message)
});

server.listen().then(({url}) => console.log(url));