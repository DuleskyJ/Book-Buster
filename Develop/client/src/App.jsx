import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Set up the HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up the context for the Apollo client to include the user's token in each request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="*" element={<SearchBooks />} />
        <Route path="/saved" element={<SavedBooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;