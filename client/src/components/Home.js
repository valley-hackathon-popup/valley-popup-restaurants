import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBox from './SearchBoxTemp';
import Logo from '../views/Logo';

const Wrapper = styled.div`
  .background {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(20%);
  }

  .logo-container {
    position: relative;
    top: 50vh;
    left: 15vh;
    z-index: 1;
  }

  .search-container {
    position: relative;
    left: 8vh;
  }
`;

const images = [
  'https://i.redd.it/3c341g37kqfy.jpg',
  'https://www.modernhoney.com/wp-content/uploads/2017/05/DSC_0678-1-copy.jpg',
  'https://lifeandpr.files.wordpress.com/2012/11/themeal.jpg',
];

class Results extends Component {
  state = {
    currentImage: 0,
  };

  componentDidMount() {
    // let last = images.length;

    setInterval(() => {
      this.setState(state => {
        console.log({ state });
        return {
          currentImage: (state.currentImage + 1) % images.length,
        };
      });
    }, 5000);
  }

  render() {
    console.log(this.state.currentImage);
    return (
      <Wrapper>
        <div className="logo-container">
          <Logo
            textColor="#FFF"
            logoHeight="100px"
            logoWidth="100px"
            fontSize="50px"
            lineHeight="110px"
          />
        </div>
        <div className="search-container">
          <SearchBox />
        </div>
        <div
          className="background"
          style={{ backgroundImage: `url(${images[this.state.currentImage]})` }}
        >
          <Link to="/results">More to Component</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Results;
