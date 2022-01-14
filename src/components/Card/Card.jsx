import React from 'react';
import { useHistory } from 'react-router';
import {
  MyCard,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
} from './Card.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const Card = ({ video }) => {
  const history = useHistory();
  const { setCurrentVideo } = useVideo();

  const handleClick = () => {
    setCurrentVideo(video);
    history.push(`/video/${video.id}`);
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
