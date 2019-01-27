import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  .logo {
    height: ${props => props.logoHeight};
    width: ${props => props.logoWidth};
    margin: 10px;
  }

  .title {
    height: ${props => props.lineHeight};
    line-height: ${props => props.lineHeight};
    font-size: ${props => props.fontSize};
    color: ${props => props.textColor};
    font-weight: bold;
  }
`;

class Logo extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <img className="logo" src="/logo.png" alt="logo" />
        <h3 className="title">Home Cooked</h3>
      </Wrapper>
    );
  }
}

Logo.defaultProps = {
  textColor: '#fe0000',
  logoHeight: '50px',
  logoWidth: '50px',
  fontSize: '30px',
  lineHeight: '70px',
};

export default Logo;
