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
// import SearchBox from '../components/SearchBox';

class Searchbox extends Component {
  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places,
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
    // this.setState({ places });
    console.log(place);
  };

  render() {
    const { places, mapApiLoaded } = this.state;
    return (
      <Query
        query={gql`
          {
            allLocations(first: 10) {
              id
              createdAt
              name
              category
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
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;

          const { allLocations: restaurants } = data;
          return (
            <>
              <GoogleMap
                defaultZoom={10}
                defaultCenter={[37.705588, -121.070358]}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  this.apiHasLoaded(map, maps)
                }
              >
                {!isEmpty(places) &&
                  places.map(place => (
                    <Marker
                      key={place.id}
                      text={place.name}
                      lat={place.geometry.location.lat}
                      lng={place.geometry.location.lng}
                    />
                  ))}
              </GoogleMap>
              <div>
                {mapApiLoaded &&
                  restaurants.map(restaurant => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  ))}
              </div>
            </>
          );
        }}
      </Query>
    );
  }
}

export default Searchbox;
