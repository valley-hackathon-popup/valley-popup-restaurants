import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// components:
import Marker from '../components/Marker';
import RestaurantCard from '../components/RestaurantCard';

// examples:
import GoogleMap from '../components/GoogleMap';

const query = gql`
  query locationsInCity($cityName: String) {
    allCities(filter: { name: $cityName }) {
      name
      locations {
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
    }
  }
`;

class Explorer extends Component {
  render() {
    return (
      <Query query={query} variables={{ cityName: this.props.city }}>
        {({ loading, error, data }) => {
          console.log({ data });
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {JSON.stringify(error)}</p>;
          const { allLocations: restaurants } = data;

          return (
            <div className="container">
              <GoogleMap
                defaultZoom={12}
                defaultCenter={[37.65, -121.025358]}
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
