import React, { Component } from 'react';
import Wrapper from './SlideWrapper';
import SlideFooter from './SlideFooter.js';

class Slide4 extends Component {
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

        <SlideFooter currentSlide="4" />
      </Wrapper>
    );
  }
}

export default Slide4;
