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
            src="https://cdn.vox-cdn.com/thumbor/2-bt9DA_NJoMFlMigYBEMm1XU7U=/0x0:826x618/1200x900/filters:focal(347x243:479x375)/cdn.vox-cdn.com/uploads/chorus_image/image/54701669/Screen_Shot_2019_01_14_at_11.20.28_AM.1526937238.png"
            alt=""
          />
        </div>
        <div className="text-container">
          <h2>
            The 2018 Homemade Food Operations Act, also known as Assembly Bill
            626, is a new law that just went into effect in the state of
            California on January 6th. This law allows anyone who wants to start
            a “microenterprise home kitchen operation” to apply for a permit
            that will allow them to sell meals out of their private home
            kitchen.
          </h2>
        </div>
      </Wrapper>
    );
  }
}

export default Explorer;
