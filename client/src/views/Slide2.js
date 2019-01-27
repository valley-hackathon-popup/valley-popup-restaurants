import React, { Component } from 'react';
import SlideFooter from './SlideFooter.js';
import Wrapper from './SlideWrapper';

class Slide2 extends Component {
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

        <SlideFooter currentSlide="2" />
      </Wrapper>
    );
  }
}

export default Slide2;
