import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../views/Logo';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(20%);

  .logo-container {
    position: relative;
    top: 30%;
    left: calc(50% - 220px);
    z-index: 1;
  }

  .linkWrapper {
    position: relative;
    background-color: white;
    border-radius: 15px;
    width: 440px;
    height: 75px;
    font-size: 30px;
    top: 40%;
    left: calc(50% - 220px);
    z-index: 1;
    text-align: center;
    opacity: 0.8;

    a {
      margin: 10px;
      padding-top: 20px;
      text-decoration: none;
      color: red;
      padding-bottom: 10px;
      margin-bottom: 10px;
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
    setInterval(() => {
      this.setState(state => {
        console.log({ state });
        return {
          currentImage: (state.currentImage + 1) % images.length,
        };
      });
    }, 10000);
  }

  render() {
    return (
      <Wrapper backgroundImage={images[this.state.currentImage]}>
        <div className="logo-container">
          <Logo
            textColor="#FFF"
            logoHeight="100px"
            logoWidth="100px"
            fontSize="50px"
            lineHeight="110px"
          />
        </div>

        <div className="linkWrapper">
          <Link to="/results/Modesto">Modesto</Link>
          <Link to="/results/Turlock">Turlock</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Results;
