import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  .background {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(20%);
  }
`;

let currentImage = 0;

const images = [
  'https://i.redd.it/3c341g37kqfy.jpg',
  'https://www.modernhoney.com/wp-content/uploads/2017/05/DSC_0678-1-copy.jpg',
];

class Results extends Component {
  componentDidMount() {
    // let last = images.length;

    setInterval(function() {
      console.log(currentImage++);
    }, 2000);
  }

  render() {
    return (
      <Wrapper>
        <div
          className="background"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <Link to="/results">More to Component</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Results;
