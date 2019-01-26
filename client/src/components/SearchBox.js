import React, { Component } from 'react';
import styled from 'styled-components';
import { FaSearch as Search } from 'react-icons/fa';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;

  input {
    display: inline;
    border: 0 white solid;
    height: 100%;
    width: 80%;
    margin-left: 10px;
  }

  input:focus {
    outline: 0px solid red;
  }

  .search-container {
    position: absolute;
    top: -55px;
    left: calc(100% - 220px);
    width: 200px;
    border: 1px #cccccc solid;
    border-radius: 25px;
    padding: 10px;
    transition-property: left width;
    transition-duration: 0.75s;
  }

  .search-container:focus-within {
    left: calc(100% - 500px);
    width: 480px;
    transition-property: left width;
    transition-duration: 0.75s;
  }

  Search {
    margin-top: 5px;
  }
`;

class SearchBox extends Component {
  componentDidMount({ map, mapApi } = this.props) {
    this.searchBox = new mapApi.places.SearchBox(this.searchInput);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
    this.searchBox.bindTo('bounds', map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlacesChanged = ({ map } = this.props) => {
    const selected = this.searchBox.getPlaces();
    const { 0: place } = selected;

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    this.searchInput.blur();
  };

  clearSearchBox = () => {
    this.searchInput.value = '';
  };

  render() {
    return (
      <Wrapper>
        <div className="search-container">
          <Search />
          <input
            ref={ref => {
              this.searchInput = ref;
            }}
            type="text"
            onFocus={this.clearSearchBox}
            placeholder="Search"
          />
        </div>
      </Wrapper>
    );
  }
}

export default SearchBox;
