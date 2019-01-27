import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

// components:
import Marker from '../components/Marker';
import RestaurantCard from '../components/RestaurantCard';

// examples:
import GoogleMap from '../components/GoogleMap';

const Wrapper = styled.div`
  .sidebar {
    overflow-y: scroll;
  }
`;

const query = gql`
  query filteredLocations($cityName: String, $category: String) {
    allLocations(
      filter: { city: { name: $cityName }, category: { name: $category } }
    ) {
      id
      createdAt
      name
      category {
        name
        id
      }
      city {
        name
      }
      description
      latitude
      longitude
      address
      rating
      reviews {
        body
        rating
        username
      }
      photos {
        url
        caption
      }
      openTimespans {
        closeTime
        openTime
      }
    }
    allCities(filter: { name: $cityName }) {
      name
      latitude
      longitude
    }
  }
`;

class Explorer extends Component {
  state = {
    activeRestaurantId: null,
  };

  toggleActive = restaurantId => () =>
    this.setState({
      activeRestaurantId:
        restaurantId === this.state.activeRestaurantId ? null : restaurantId,
    });

  render() {
    const { activeRestaurantId } = this.state;

    return (
      <Query query={query} variables={{ cityName: this.props.city }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {JSON.stringify(error)}</p>;
          const { allLocations: restaurants } = data;
          const city = data.allCities[0];

          const activeRestaurant = restaurants.find(
            ({ id }) => id === activeRestaurantId,
          );

          return (
            <Wrapper>
              <div className="container">
                <GoogleMap
                  defaultZoom={12}
                  center={
                    activeRestaurant
                      ? [
                          Number(activeRestaurant.latitude),
                          Number(activeRestaurant.longitude),
                        ]
                      : [Number(city.latitude), Number(city.longitude)]
                  }
                  yesIWantToUseGoogleMapApiInternals
                >
                  {!isEmpty(restaurants) &&
                    restaurants.map(restaurant => (
                      <Marker
                        key={restaurant.id}
                        text={restaurant.name}
                        lat={restaurant.latitude}
                        lng={restaurant.longitude}
                        name={restaurant.name}
                        active={restaurant.id === activeRestaurantId}
                        onClick={this.toggleActive(restaurant.id)}
                      />
                    ))}
                </GoogleMap>
                <div className="sidebar">
                  {restaurants.map(restaurant => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      active={restaurant.id === activeRestaurantId}
                      onClick={this.toggleActive(restaurant.id)}
                    />
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default Explorer;
