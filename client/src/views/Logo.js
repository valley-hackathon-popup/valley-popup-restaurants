import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div>
        <img
          className="logo"
          src="https://cdn2.vectorstock.com/i/thumbs/50/11/chef-hat-and-spoon-fork-knife-sign-vector-13415011.jpg"
          alt="logo"
        />
        <h3 className="title">Home Cooked</h3>
      </div>
    );
  }
}

export default Logo;
