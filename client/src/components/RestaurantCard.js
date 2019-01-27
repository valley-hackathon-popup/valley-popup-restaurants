import React from 'react';
import styled from 'styled-components';
import { FaStar as Star } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px ${props => (props.active ? '#FEFB19' : '#cccccc')} solid;
  ${props => props.active && 'background-color: #ffffec;'} border-radius: 5px;
  margin: 15px;
  padding: 15px;

  &:hover {
    border: 5px red solid;
  }
`;

const MainContent = styled.div`
  display: flex;

  .flex {
    display: flex;
  }
  .align-bottom {
    align-items: flex-bottom;
  }

  .image {
    height: 120px;
    width: 120px;
    object-fit: cover;
    display: block;
    margin-right: 25px;
  }

  .info-container {
    flex: 1;
    align-self: center;
    & > div {
      padding-bottom: 10px;
    }
  }

  .rating-container {
    display: flex;
    width: 20px;
    justify: flex-end;
    align-items: center;
    & > .rating {
      color: red;
      margin: 5px;
    }
  }

  .name {
    font-size: 28px;
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
    margin-right: 15px;
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

  .description {
    font-weight: bold;
    font-size: 18px;
    line-height: 1.5em;
  }

  .gray {
    color: gray;
  }
`;

export default class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.props.onActive(this.element.current.offsetTop);
    }
  }

  render() {
    const { restaurant, active, onClick } = this.props;

    return (
      <Wrapper
        className="card"
        active={active}
        onClick={onClick}
        ref={this.element}
      >
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
            <div className="flex align-bottom">
              <p className="category">{restaurant.category.name}</p>
              <div className="rating-container">
                <div className="rating">{restaurant.rating}</div>
                <div className="rating">
                  <Star className="star" />
                </div>
              </div>
            </div>
          </div>

          <img
            alt="#"
            src={require('../assets/expand-button.svg')}
            className={`expand ${active && 'expanded'}`}
          />
        </MainContent>
        {active && (
          <DetailContent>
            <div className="description">{restaurant.description}</div>
            <div className="gray">{restaurant.address}</div>
          </DetailContent>
        )}
      </Wrapper>
    );
  }
}
