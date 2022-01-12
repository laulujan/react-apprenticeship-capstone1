import React, { useState } from 'react';
import {
  VideoContainer,
  VideoContent,
  VideoTitle,
  VideoDescription,
  VideoBox,
  FavoriteButton,
  FavIcon,
  UnFavIcon,
} from './VideoPlayer.styled';

const VideoPlayer = ({ video }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <VideoContainer>
      <iframe
        width="100%"
        height="534px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        title="title"
      />
      <VideoContent>
        <VideoBox>
          <VideoTitle>{video.title}</VideoTitle>
          <FavoriteButton onClick={handleClick}>
            {isFavorite ? <FavIcon /> : <UnFavIcon />}
          </FavoriteButton>
        </VideoBox>
        <VideoDescription>{video.description}</VideoDescription>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoPlayer;
