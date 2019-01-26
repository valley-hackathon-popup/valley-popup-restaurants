import React, { Component } from 'react';
import './App.css';
import Map from './map';
import Sidebar from './sidebar'




class App extends Component {
  render() {
    let data = [
      {
        "id": 1,
          "name": "Mama's fish house",
          "lat": 234.6789,
          "lon": 234.678,
          "description": "lorem ipsum junk here",
          "times": [
              {
                  "open": "2019-01-25T13:00:00Z",
                  "close": "2019-01-25T15:00:00Z"
              },
              {
                  "open": "2019-01-26T13:00:00Z",
                  "close": "2019-01-26T15:00:00Z"
              }
          ],
          "photos": [
              {
                  "url": "https://example.com/somephoto.jpg",
                  "description": "lorem ipsum"
              }
          ],
          "reviews": [
              {}
          ],
          "rating": 4.4
      },
      {
        "id": 2,
          "name": "Mama's fish house",
          "lat": 234.6789,
          "lon": 234.678,
          "description": "lorem ipsum junk here",
          "times": [
              {
                  "open": "2019-01-25T13:00:00Z",
                  "close": "2019-01-25T15:00:00Z"
              },
              {
                  "open": "2019-01-26T13:00:00Z",
                  "close": "2019-01-26T15:00:00Z"
              }
          ],
          "photos": [
              {
                  "url": "https://example.com/somephoto.jpg",
                  "description": "lorem ipsum"
              }
          ],
          "reviews": [
              {}
          ],
          "rating": 4.4
      }
    ]

    return (
      <>
        <header>
          <div className="logo"></div>
          <div className="search"><input/></div>
          <div className="menu"></div>

        </header>
        <div className="container">
          <Sidebar data={data}/>
          <div className="map"><Map data={data}/></div>
        </div>
      </>
    );
  }
}

export default App;
