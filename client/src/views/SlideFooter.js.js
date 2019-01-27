import React, { Component } from 'react';
import { FaArrowCircleLeft as LeftIcon } from 'react-icons/fa';
import { FaArrowCircleRight as RightIcon } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 100px;
  opacity: 0.2;
  width: 100vw;
  padding-right: 20px;
  padding-left: 20px;

  .RightIcon {
    float: right;
  }
`;

class SlideFooter extends Component {
  render() {
    let currentSlide = Number(this.props.currentSlide);

    const back = currentSlide > 1 ? `/slide${currentSlide - 1}` : '/';
    const forward = currentSlide < 4 ? `/slide${currentSlide + 1}` : '/';

    return (
      <Footer>
        {currentSlide > 1 && (
          <Link to={back}>
            <LeftIcon className="leftIcon" />
          </Link>
        )}
        <Link to={forward}>
          <RightIcon className="RightIcon" />
        </Link>
      </Footer>
    );
  }
}

export default SlideFooter;
