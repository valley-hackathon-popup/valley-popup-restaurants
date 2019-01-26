import './App.css';

import React, { Component } from 'react';
import Explorer from './views/Explorer';
import dotenv from 'dotenv';
// import Search from './search';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

dotenv.config();

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjrd2efqtc9wi01794swtqqgw',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <header>
          <div className="logo" />
          <div className="search">
            <input />
          </div>
          <div className="menu" />
        </header>
        <div className="container">
          <Explorer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
