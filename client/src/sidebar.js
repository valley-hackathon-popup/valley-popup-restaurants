import React, { Component } from 'react';
import Location from './location'


class App extends Component {
  render() {
    return (
        <div className="sidebar">
            {this.props.data.map(location => <Location key={location.id} location={location}/>)}
        </div>
    );
  }
}

export default App;
