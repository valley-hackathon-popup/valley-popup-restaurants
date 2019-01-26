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
            src="https://www.crosbys.com/wp-content/uploads/2012/06/Cajun-shrimp.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <h2>
            Our vision for the future of Home Cooking would be creating a
            delivery service such as Uber Eats and Door Dash to allow drivers to
            deliver home cooked meals to users.
          </h2>
        </div>
      </Wrapper>
    );
  }
}

export default Explorer;
