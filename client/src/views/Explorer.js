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

class Searchbox extends Component {
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
    // this.setState({ places });
    console.log(place);
  };

  render() {
    // const { places, mapApiLoaded } = this.state; //Not using places, now using API data
    const { mapApiLoaded, mapInstance, mapApi } = this.state;

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
                defaultZoom={12}
                defaultCenter={[37.65, -121.025358]}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  this.apiHasLoaded(map, maps)
                }
              >
                {
                  //These were the static locations from places.js
                  /* {!isEmpty(places) &&  
                  places.map(place => (
                    <Marker
                      key={place.id}
                      text={place.name}
                      lat={place.geometry.location.lat}
                      lng={place.geometry.location.lng}
                    />
                  ))} */
                }
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
