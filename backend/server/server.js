const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/main',
    { useNewUrlParser: true, useUnifiedTopology: true}
)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Successfully connected to MongoDB!')
})

// Mongoose Room Schema
const roomSchema = new mongoose.Schema({
  owner: String,
  group: String,
  title: String,
  description: String
});
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  group: String,
  role: String,
});

const roomModel = mongoose.model('Room', roomSchema)
const userModel = mongoose.model('User', userSchema)

 

const app = express();
app.use(cors());

// GraphQL Schema
const typeDefs = buildSchema(`
  type Query {
    rooms: [Room!]
    users: [User!]
    user(name: String! password: String!): [User!]
    userRooms(name: String!): [Room!]
    editRoom(title: String! description: String! group: String! owner: String!): Room!

  }

  type Mutation {
    addUser(name: String! password: String! group: String! role: String!): User!
    addRoom(owner: String! group: String! title: String! description: String!): Room!
    deleteUser(name: String! password: String!): User!
    deleteRoom(owner: String! title: String!) : Room!
  } 

  type Room {
    id: ID!
    owner: String!
    group: String!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    name: String!
    password: String!
    group: String!
    role: String!
  }

`);

// GraphQL Root Resolver functions
const root = {
  rooms: async () => {
    const documents = await roomModel.find()
    console.log(documents)
    return documents;
  },
  users:  async () => {
    const documents = await userModel.find()
    console.log(documents)
    return documents;
  },
  user: async ({name, password}) => {
      const document = await userModel.find({name: name, password: password})
      console.log(document);
      return document;
    },
  userRooms: async ({name}) => {
    const documents = await roomModel.find({owner: name})
    console.log(documents);
    return documents;
  },
  editRoom: async ({title, description, group, owner}) => {
    const query = {owner: owner, group:group, title:title, description:description}
    const previousDocument = await roomModel.find(query)
    
    console.log(previousDocument);
    return previousDocument[0]
  },
  addUser: async ({name, password, group, role}) => {
    const document = new userModel({name: name, password: password, group: group, role: role})
    await document.save((err, user) => {
      if(err) return console.error(err);
      console.log(`${user.name} Added to database`);
    })
    return document;
  },
  deleteUser: async ({name, password}) => {
      const document = await userModel.findOneAndDelete({name: name, password: password})
      console.log(`${name} deleted from database`);
      return document;
  },
  addRoom: async({owner, group, title, description}) => {
    const document = new roomModel({owner: owner, group: group, title: title, description: description});
    await document.save((err, room) => {
      if(err) return console.error(err);
      console.log(`${room.title} Added to database`);
    })
    return document;
  },

  
}

app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: root,
    graphiql: true,
  }));

app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
})