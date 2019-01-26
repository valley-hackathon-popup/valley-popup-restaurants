import React, { Component } from 'react';
import Logo from './Logo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
`;

const query = gql`
  {
    allCities(first: 10) {
      name
      latitude
      longitude
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Query query={query} variables={{ cityName: this.props.city }}>
        {({ loading, error, data: { allCities } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {JSON.stringify(error)}</p>;

          return (
            <StyledHeader>
              <Logo styles={{ float: 'left' }} />

              <div className="menu">
                {allCities.map(city => (
                  <Link to={`/results/${city.name}`} key={city.name}>
                    {city.name}
                  </Link>
                ))}
              </div>
            </StyledHeader>
          );
        }}
      </Query>
    );
  }
}

export default Header;
