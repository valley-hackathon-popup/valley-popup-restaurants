import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// components:
import Marker from '../components/Marker';

// examples:
import GoogleMap from '../components/GoogleMap';
import SearchBox from '../components/SearchBox';

class Searchbox extends Component {
  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = place => {
    this.setState({ places: place });
  };

  render() {
    const { places, mapApiLoaded, mapInstance, mapApi } = this.state;
    return (
      <Query
        query={gql`
          {
            allLocations(first: 10) {
              id
              createdAt
              name
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
                      lat={place.geometry.location.lat()}
                      lng={place.geometry.location.lng()}
                    />
                  ))}
              </GoogleMap>
              {mapApiLoaded && (
                <SearchBox
                  map={mapInstance}
                  mapApi={mapApi}
                  addplace={this.addPlace}
                />
              )}
            </>
          );
        }}
      </Query>
    );
  }
}

export default Searchbox;
