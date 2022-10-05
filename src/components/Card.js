/* eslint-disable react/prop-types */
import React from 'react';
import { StyledCard } from './styles/StyledCard.styled';

const Card = ({ item: { title, body, image } }) => (
  <StyledCard>
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    <div>
      <img src={`./images/${image}`} alt="" />
    </div>
  </StyledCard>
);

export default Card;
