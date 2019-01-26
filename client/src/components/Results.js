import React, { Component } from 'react';
import Explorer from '../views/Explorer';
import Header from '../views/Header';
import _get from 'lodash/get';

class Results extends Component {
  render() {
    const city = _get(this, 'props.match.params.city', 'Modesto');
    return (
      <>
        <Header />

        <Explorer city={city} />
      </>
    );
  }
}

export default Results;
