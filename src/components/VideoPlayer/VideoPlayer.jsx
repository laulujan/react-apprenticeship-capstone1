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

const VideoPlayer = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <VideoContainer>
      <iframe
        width="100%"
        height="534px"
        src="https://www.youtube.com/embed/GNCd_ERZvZM"
        frameBorder="0"
        title="title"
      />
      <VideoContent>
        <VideoBox>
          <VideoTitle>
            some super big video title goes here and i want to se how it looks
            when i render it
          </VideoTitle>
          <FavoriteButton onClick={handleClick}>
            {isFavorite ? <FavIcon /> : <UnFavIcon />}
          </FavoriteButton>
        </VideoBox>
        <VideoDescription>Some video description</VideoDescription>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoPlayer;
