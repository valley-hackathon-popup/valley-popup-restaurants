import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import places from './places';

// components:
import Marker from '../components/Marker';
import RestaurantCard from '../components/RestaurantCard';

// examples:
import GoogleMap from '../components/GoogleMap';
import SearchBox from '../components/SearchBox';

const query = gql`
  {
    allLocations(first: 10) {
      id
      createdAt
      name
      category {
        name
        id
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
`;

class Explorer extends Component {
  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places,
    currentSelectedLocation: null,
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = place => {
    const places = [...this.state.places];
    places.push(place);
  };

  render() {
    // const { places, mapApiLoaded } = this.state; //Not using places, now using API data
    const { mapApiLoaded, mapInstance, mapApi } = this.state;

    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;

          const { allLocations: restaurants } = data;

          return (
            <div className="container">
              <GoogleMap
                defaultZoom={12}
                defaultCenter={[37.65, -121.025358]}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  this.apiHasLoaded(map, maps)
                }
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
              <div>
                {mapApiLoaded && (
                  <SearchBox
                    className="search"
                    map={mapInstance}
                    mapApi={mapApi}
                    addplace={this.addPlace}
                  />
                )}

                {restaurants.map(restaurant => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Explorer;
