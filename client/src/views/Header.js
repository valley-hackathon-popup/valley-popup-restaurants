import React, { Component } from 'react';
import Logo from './Logo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { underline } from 'ansi-colors';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  .logoContainer {
    text-decoration: none;
    flex-grow: 1;
  }

  .menu {
    margin-right: 30px;
    margin-top: 10px;
    a {
      margin: 10px;
      padding-top: 20px;
      text-decoration: none;
      color: red;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    a:visited {
      text-decoration: none;
    }
    a:hover,
    .underlined {
      border-bottom: 1px red solid;
    }

    padding: 15px;
  }
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
              <Link className="logoContainer" to="/">
                <Logo styles={{ float: 'left' }} />
              </Link>

              <div className="menu">
                {allCities.map(city => (
                  <Link
                    className={city.name === this.props.city && 'underlined'}
                    to={`/results/${city.name}`}
                    key={city.name}
                  >
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
