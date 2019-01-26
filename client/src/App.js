import React, { Component } from 'react';
import './App.css';
// import Map from './map';
import Sidebar from './sidebar';
import { getLocations } from './data';
import SearchBox from './views/Searchbox';
import dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  state = {
    locations: [],
  };

  componentWillMount() {
    getLocations().then(data => {
      this.setState({ locations: data });
    });
  }

  render() {
    let { locations } = this.state;
    return (
      <>
        <header>
          <div className="logo" />
          <div className="search">
            <input />
          </div>
          <div className="menu" />
        </header>
        <div className="container">
          <Sidebar data={locations} />
          {/* <div className="map">
            <Map data={locations} />
          </div> */}
          <SearchBox />
        </div>
      </>
    );
  }
}

export default App;
