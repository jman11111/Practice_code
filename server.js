const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
var { buildSchema } = require('graphql');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    currUser(ida: ID!): User
  }, type User {
    "user info"
    id: ID
    name: String
    password: String
  },
  type Mutation {
    signUp(email: String!,password: String!): User!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    currUser: () => {
      return {
        id: "90",
        name: "jack",
      
      }
    }
  },
  Mutation: {
    signUp: (parent,args) => {
      return {
        name: args.email,
        password: args.password
      }
    }
  }
};

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)