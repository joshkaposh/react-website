const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const getStartedRoute = require('./routes/get-started')
const docsRoute = require('./routes/docs')
const downloadRoute = require('./routes/download')
const contactUsRoute = require('./routes/contact-us')
const readMoreRoute = require('./routes/read-more')
// Routes for components

const { buildSchema } = require('graphql');

const POSTS = [
  { title: "Family", desc: "Daily Call"},
  { title: "Onlince School", desc: "AGR 801"},
  { title: "Friends", desc: "Group Chat"},
  { title: "Highschool Reunion", desc: "See your old friends!"},
  { title: "Incoming Call", desc: "Fred Fernandez"},
  { title: "Prayer Group", desc: "Weekly Call"},

];

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    rooms: [Post]
    room(id: ID!): Post
  }
  type Post {
    id: ID
    title: String
    desc: String
  }
`);

const mapRoom = (room, id) => room && ({ id, ...room });
// Maps room var to unique id

const root = {
  rooms: () => POSTS.map(mapRoom),
  room: ({ id }) => mapRoom(POSTS[id], id),

};
// Root queries

const app = express();

// Middleware
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));


// Middleware routes
app.use('/get-started', getStartedRoute)
app.use('/docs', docsRoute)
app.use('/download', downloadRoute)
app.use('/contact-us', contactUsRoute)
app.use('/read-more', readMoreRoute)



// Starts server
const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);