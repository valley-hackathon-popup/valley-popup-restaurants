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
        src={
          restaurant.photos[0]
            ? restaurant.photos[0].url
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'
        }
        alt={restaurant.name}
      />
      <div className="info-container">
        <div className="name">{restaurant.name}</div>
        <div>
          <p className="category">{restaurant.category.name}</p>
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
