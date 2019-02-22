const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
var { buildSchema } = require('graphql');
var { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');
const app = express()
const port = 3000
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).catch((err)=>{
  console.log(err);
});
// A map of functions which return data for the schema.
const jesolvers = require('./src/resolvers');
<<<<<<< HEAD
console.log(jesolvers);
const resolvers = {
  Query: {
  findUser: async(parent,args) => {
    let user = {
      email: 'test'
    }
    console.log(user.email)
    return user
  }
}
}
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  password: String
});

var Usermodel = mongoose.model('Usermodel', userSchema);

app.get('/', (req, res) => res.send('Hello World!'))

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    currUser(ida: ID!): User,
    findUser(email: String!): User
  }, type User {
    "user info"
    id: ID
    email: String
    password: String
  },
  type Mutation {
    signUp(email: String!,password: String!): User!
  }
`;

=======

app.get('/', (req, res) => res.send('Hello World!'));
>>>>>>> 9cf377569f324dc0c028b9b353ce827454c44979
 
const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)