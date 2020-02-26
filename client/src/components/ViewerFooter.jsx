import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div`
color: white;
position: absolute;
height: 5%;
width: 100%;
top: 95%;
text-align: center;
`;

const ViewerFooter = ({ status, price, beds, baths, area }) => (
  <Foot>{`${status}: $${price} (${beds} beds, ${baths} baths, ${area} sqft)`}</Foot>
);

export default ViewerFooter;
