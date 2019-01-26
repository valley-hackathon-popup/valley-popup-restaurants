import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import Slide1 from './views/Slide1';
import Slide2 from './views/Slide2';
import Slide3 from './views/Slide3';
import Slide4 from './views/Slide4';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

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
            <Route exact path="/results/:city" component={Results} />
            <Route exact path="/slide1" component={Slide1} />
            <Route exact path="/slide2" component={Slide2} />
            <Route exact path="/slide3" component={Slide3} />
            <Route exact path="/slide4" component={Slide4} />
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
