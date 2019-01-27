import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../views/HomeLogo';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(20%);

  .logo-container {
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
  }

  .linkWrapper {
    position: relative;
    background-color: white;
    border-radius: 15px;
    width: 440px;
    height: 75px;
    font-size: 30px;
    left: calc(50% - 220px);
    z-index: 1;
    text-align: center;
    opacity: 0.8;
    margin-bottom: 15px;

    a {
      text-decoration: none;
      color: red;
      line-height: 45px;
    }
    a:visited {
      text-decoration: none;
    }
    a:hover {
      border-bottom: 1px red solid;
    }
    padding: 15px;
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

    setInterval(function() {}, 2000);
  }

  render() {
    return (
      <Wrapper backgroundImage={images[this.state.currentImage]}>
        <div className="logo-container">
          <Logo
            textColor="#FFF"
            logoHeight="200px"
            logoWidth="200px"
            fontSize="75px"
            lineHeight="75px"
          />
        </div>

        <div className="linkWrapper">
          <Link to="/results/Modesto">Modesto</Link>
        </div>
        <div className="linkWrapper">
          <Link to="/results/Turlock">Turlock</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Results;
