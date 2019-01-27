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

  .category-on {
    border: 1px #cccccc solid;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    text-align: center;
    color: white;
    background-color: red;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 15px;
  }

  .category-off {
    border: 1px red solid;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    text-align: center;
    color: red;
    background-color: white;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 15px;
  }
`;

const query = gql`
  query filteredLocations($cityName: String, $categories: [String!]) {
    allLocations(
      filter: { city: { name: $cityName }, category: { name_in: $categories } }
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
    allCategories(first: 10) {
      name
    }
  }
`;

class Explorer extends Component {
  state = {
    activeRestaurantId: null,
    categoryFilter: [],
  };

  toggleActive = restaurantId => () =>
    this.setState({
      activeRestaurantId:
        restaurantId === this.state.activeRestaurantId ? null : restaurantId,
    });

  render() {
    const { activeRestaurantId } = this.state;

    return (
      <Query
        query={query}
        variables={{
          cityName: this.props.city,
          categories:
            this.state.categoryFilter.length === 0
              ? undefined
              : this.state.categoryFilter,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {JSON.stringify(error)}</p>;
          const { allLocations: restaurants } = data;
          const city = data.allCities[0];
          const categories = data.allCategories;
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
                  <div className="category-container">
                    {!isEmpty(categories) &&
                      categories.map(category => {
                        const isInArray = this.state.categoryFilter.includes(
                          category.name,
                        );

                        return (
                          <p
                            className={
                              isInArray ? 'category-on' : 'category-off'
                            }
                            onClick={() =>
                              this.setState(state => ({
                                categoryFilter: [
                                  ...state.categoryFilter.filter(
                                    item => item !== category.name,
                                  ),
                                  ...(isInArray ? [] : [category.name]),
                                ],
                              }))
                            }
                          >
                            {category.name}
                          </p>
                        );
                      })}
                  </div>
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
