import React from 'react';
import styled from 'styled-components';
import { FaStar as Star } from 'react-icons/fa';

const Wrapper = styled.div`
  height: 120px;
  display: flex;
  border: 1px #cccccc solid;
  border-radius: 5px;
  margin: 15px;

  &:hover {
    border: 1px red solid;
  }

  .image {
    height: 120px;
    width: 120px;
    object-fit: cover;
    padding: 15px;
  }

  .info-container > div {
    display: block;
    padding-bottom: 10px;
  }

  .info-container {
    padding: 15px;
  }

  .rating-container > div {
    float: left;
  }

  .rating {
    width: 20px;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
  }

  .category {
    border: 1px #cccccc solid;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    text-align: center;
    color: white;
    background-color: red;
  }

  .red {
    color: red;
  }
`;

export default function RestaurantCard({ restaurant }) {
  return (
    <Wrapper className="card">
      <img
        className="image"
        src={restaurant.photos.url}
        alt={restaurant.name}
      />
      <div className="info-container">
        <div className="name">{restaurant.name}</div>
        <div>
          <p className="category">{restaurant.category}</p>
        </div>
        <div className="rating-container">
          <div className="rating red">{restaurant.rating}</div>
          <div className="red">
            <Star />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
