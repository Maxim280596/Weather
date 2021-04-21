import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Container from '@material-ui/core/Container';

import Home from './Components/Home';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/',
  });
  return (
    <ApolloProvider client={client}>
      <Container maxWidth="md">
        <Home />
      </Container>
    </ApolloProvider>
  );
}

export default App;
