import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import dotenv from 'dotenv';
console.log({ dotenv });
dotenv.config();

console.log('app', { process });

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjrd2efqtc9wi01794swtqqgw',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
