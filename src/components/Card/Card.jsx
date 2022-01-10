import React from 'react';
import {
  MyCard,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
} from './Card.styled';

const Card = ({ video }) => {
  return (
    <MyCard>
      <CardImage src={video.snippet.thumbnails.medium.url} />
      <CardContent>
        <CardTitle>{video.snippet.title}</CardTitle>
        <CardDescription>{video.snippet.description}</CardDescription>
      </CardContent>
    </MyCard>
  );
};

export default Card;
