import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import places from './places';
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
  render() {
    return (
      <Query query={query} variables={{ cityName: this.props.city }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {JSON.stringify(error)}</p>;
          const { allLocations: restaurants } = data;
          const city = data.allCities[0];
          console.log(city.name);
          return (
            <div className="container">
              <GoogleMap
                defaultZoom={12}
                center={[Number(city.latitude), Number(city.longitude)]}
                yesIWantToUseGoogleMapApiInternals
              >
                {!isEmpty(restaurants) &&
                  restaurants.map(restaurants => (
                    <Marker
                      key={restaurants.id}
                      text={restaurants.name}
                      lat={restaurants.latitude}
                      lng={restaurants.longitude}
                      name={restaurants.name}
                    />
                  ))}
              </GoogleMap>
              {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Explorer;
