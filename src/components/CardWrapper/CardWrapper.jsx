import React from 'react';
import { CardContainer } from './CardWrapper.styled.js';
import Card from '../Card/Card';

const CardWrapper = ({ videos }) => {
  return (
    <CardContainer className="card-container">
      {videos.map((video) => (
        <Card video={video} key={video.id} />
      ))}
    </CardContainer>
  );
};

export default CardWrapper;
