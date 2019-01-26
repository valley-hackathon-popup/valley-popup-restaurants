import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const REACT_APP_MAP_KEY = 'AIzaSyCtIwqEnsFLIwz2vtW9HArwxatLnK0z1fo';

const GoogleMap = ({ children, ...props }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: REACT_APP_MAP_KEY,
        libraries: ['places', 'geometry'],
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Wrapper>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
