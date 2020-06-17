import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

client.query({
  query: gql`
  {
    rooms {
      id
      title
      desc
    }
  }
  `
})
.then(result => console.log(result.data));

export default client;