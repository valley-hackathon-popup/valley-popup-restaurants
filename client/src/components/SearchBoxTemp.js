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
    width: 80%;
    margin-left: 10px;
  }

  input:focus {
    outline: 0px solid red;
  }

  .search-container {
    position: absolute;
    top: 50vh;
    left: 50vw:
    left: calc(100% - 220px);
    width: 200px;
    border: 1px #cccccc solid;
    border-radius: 25px;
    padding: 10px;
    transition-property: left width;
    transition-duration: 0.75s;
    z-index: 1;
    background-color: white;
  }

  .search-container:focus-within {
    left: 0;
    width: 480px;
    transition-property: left width;
    transition-duration: 0.75s;
  }

  Search {
    margin-top: 5px;
  }
`;

class SearchBox extends Component {
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
            placeholder="Search"
          />
        </div>
      </Wrapper>
    );
  }
}

export default SearchBox;
