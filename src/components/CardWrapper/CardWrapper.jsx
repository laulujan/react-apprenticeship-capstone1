import React from 'react';
import { CardContainer } from './CardWrapper.styled';
import Card from '../Card/Card';

const CardWrapper = () => {
  return (
    <CardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardContainer>
  );
};

export default CardWrapper;
