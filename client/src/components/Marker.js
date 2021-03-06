import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => (props.active ? '30px' : '18px')};
  height: ${props => (props.active ? '30px' : '18px')};
  background-image: url('/logo.png');
  background-size: cover;
  border: ${props => (props.active ? '5px' : '1px')} solid
    ${props => (props.active ? '#FEFB19' : 'red')};
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.name}
    {...(props.onClick ? { onClick: props.onClick } : {})}
    active={props.active}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
