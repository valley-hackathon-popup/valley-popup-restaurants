import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />

        <div className="menu" />
      </header>
    );
  }
}

export default Header;
