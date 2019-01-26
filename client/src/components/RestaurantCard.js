import React from 'react';
import styled from 'styled-components';
import { FaStar as Star } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px ${props => (props.active ? '#FEFB19' : '#cccccc')} solid;
  ${props => props.active && 'background-color: #ffffec;'}
  border-radius: 5px;
  margin: 15px;
  padding: 15px;

  &:hover {
    border: 5px red solid;
  }
`;

const MainContent = styled.div`
  display: flex;

  .image {
    height: 120px;
    width: 120px;
    object-fit: cover;
    display: block;
    margin-right: 25px;
  }

  .info-container {
    flex: 1;
    & > div {
      padding-bottom: 10px;
    }
  }
  .rating-container {
    display: flex;
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

  .expand {
    width: 20px;
    height: 20px;
    &.expanded {
      transform: rotate(180deg);
    }
  }
`;

const DetailContent = styled.div`
  div {
    margin-top: 15px;
  }

  .b {
    font-weight: bold;
  }

  .gray {
    color: gray;
  }
`;

export default function RestaurantCard({ restaurant, active, onClick }) {
  return (
    <Wrapper className="card" active={active} onClick={onClick}>
      <MainContent>
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

        <img
          src={require('../assets/expand-button.svg')}
          className={`expand ${active && 'expanded'}`}
        />
      </MainContent>
      {active && (
        <DetailContent>
          <div className="b">{restaurant.description}</div>
          <div className="gray">{restaurant.address}</div>
        </DetailContent>
      )}
    </Wrapper>
  );
}
