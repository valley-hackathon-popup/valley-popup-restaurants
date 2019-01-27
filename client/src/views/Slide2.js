import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Wrapper = styled.div`
  .img-container {
    height: 50vh;
    width: 100vw;
    overflow: hidden;
  }
  .text-container {
    height: 50vh;
    width: 100vw;
  }

  h2 {
    margin: 25px;
    font-size: 20px;
    line-height: 35px;
  }

  img {
    height: 100vh;
    width: 100vw;
    position: relative;
    top: -50px;
  }
`;

class Explorer extends Component {
  render() {
    return (
      <Wrapper>
        <div className="img-container">
          <img
            src="https://thetoastedpinenut.com/wp-content/uploads/2018/04/IMG_3149-1.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <h2>
            When you’re hungry and you don’t have time, or the skill, to cook,
            why not get authentic home-cooked food? The only option currently
            available is to get fast food or something through Uber Eats or
            Doordash, which usually isn’t healthy.
          </h2>
        </div>
      </Wrapper>
    );
  }
}

export default Explorer;
