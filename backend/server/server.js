const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    rooms: [Room!]
  }

  type Room {
      id: Int
      title: String
      description: String
  }

`);



const ROOMS = [
    {id: 1, title: 't1', description: 'd1'},
    {id: 2, title: 't2', description: 'd2'},
    {id: 3, title: 't3', description: 'd3'},
    {id: 4, title: 't4', description: 'd4'},
    {id: 5, title: 't5', description: 'd5'},
    {id: 6, title: 't6', description: 'd6'},

]

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  rooms: () => ROOMS,
};

// Middleware
const app = express();

app.use(cors());



app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');