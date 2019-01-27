import React, { Component } from 'react';
import Wrapper from './SlideWrapper';
import SlideFooter from './SlideFooter.js';

class Slide3 extends Component {
  render() {
    return (
      <Wrapper>
        <div className="img-container">
          <img
            src="https://i1.wp.com/bakemydayhappy.com/wp-content/uploads/2018/10/lebanese-food-table.jpg?resize=1320%2C880&ssl=1"
            alt=""
          />
        </div>
        <div className="text-container">
          <h2>
            Our app, Home Cooking, connects users with home chefs in the local
            community who offer home-cooked meals. Home Cooking has the
            potential to have a positive impact on low-income families and/or
            individuals with a passion for cooking. Grandparents have cooked
            phenomenal food for years. Using our app to expose their services to
            potential clients will allow them to increase their income.
          </h2>
        </div>

        <SlideFooter currentSlide="3" />
      </Wrapper>
    );
  }
}

export default Slide3;
