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
          <div>
            <img
              className="logo"
              src="https://cdn2.vectorstock.com/i/thumbs/50/11/chef-hat-and-spoon-fork-knife-sign-vector-13415011.jpg"
              alt="logo"
            />
            <h3 className="title">Home Cooked</h3>
          </div>
          {/* <div className="search">
            <input />
          </div> */}
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
