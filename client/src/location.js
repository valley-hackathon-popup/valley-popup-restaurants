import React, { Component } from 'react';

class App extends Component {
  render() {
      console.log(this.props.location);
    return (
        <div className="sidebar">
            name: {this.props.location.name}
        </div>
    );
  }
}

export default App;
