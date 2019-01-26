import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div className="sidebar">name: {this.props.location.name}</div>;
  }
}

export default App;
