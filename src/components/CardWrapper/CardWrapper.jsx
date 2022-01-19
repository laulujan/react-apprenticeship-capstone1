import React from 'react';
import { CardContainer } from './CardWrapper.styled.js';
import Card from '../Card/Card';

const CardWrapper = ({ videos, isFavoritesPage }) => {
  return (
    <CardContainer className="card-container">
      {videos.map((video) => (
        <Card video={video} key={video.id} isFavoritesPage={isFavoritesPage} />
      ))}
    </CardContainer>
  );
};

export default CardWrapper;
