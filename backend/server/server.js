const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/main',
    { useNewUrlParser: true, useUnifiedTopology: true}
)

// Mongoose Schema
let roomSchema = new mongoose.Schema({
    title: String,
    description: String
})

let roomModel = mongoose.model('Room', roomSchema)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Successfully connected to MongoDB!')

}) 

const app = express();
app.use(cors());

// GraphQL Schema
const typeDefs = buildSchema(`
    type Query {
    hello: String
    rooms: [Room!]
  }
  type Room {
    id: ID!
    title: String
    description: String
  }

`);
// GraphQL Root Resolver functions
const root = {
    hello: () => {
      return 'Hello World';
    },
    rooms: async function() {
        const documents = await roomModel.find()
        return documents;
    }

};

app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: root,
    graphiql: true,
  }));

app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
})