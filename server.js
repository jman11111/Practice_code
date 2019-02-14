const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
var { buildSchema } = require('graphql');
const app = express()
const port = 3000
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).catch((err)=>{
  console.log(err);
});
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

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    currUser: () => {
      return {
        id: "90",
        
      
      }
    },
    findUser: async(parent,args) => {
      let user = await Usermodel.findOne({ email: args.email });
      console.log(user.email)
      return user
    }
  },
  Mutation: {
    signUp: async(parent,args) => {
      var doc = new Usermodel({ email: '', password: '' });
      doc.email = args.email;
      doc.password = args.password;
      await doc.save();
      console.log(doc);
      return {
        email: doc.email,
        password: doc.password
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