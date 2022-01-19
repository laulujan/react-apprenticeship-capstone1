import React from 'react';
import { useHistory } from 'react-router';
import {
  MyCard,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
} from './Card.styled';
import { useVideo } from '../../providers/Video/provider';

const Card = ({ video, isFavoritesPage }) => {
  const history = useHistory();
  const { setCurrentVideo } = useVideo();

  const handleClick = () => {
    setCurrentVideo(video);

    let location = `/video/${video.id}`;
    if (isFavoritesPage) {
      location = `/favorites/${video.id}`;
    }

    history.push(location);
  };
  return (
    <MyCard className="card" onClick={handleClick}>
      <CardImage src={video.image} alt={video.title} />
      <CardContent>
        <CardTitle>{video.title}</CardTitle>
        <CardDescription>{video.description}</CardDescription>
      </CardContent>
    </MyCard>
  );
};

export default Card;
