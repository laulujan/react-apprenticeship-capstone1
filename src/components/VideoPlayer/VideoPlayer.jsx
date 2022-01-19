import React from 'react';
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
import { useAuth } from '../../providers/Auth/provider';
import { useVideo } from '../../providers/Video/provider';

const VideoPlayer = ({ video }) => {
  const { isFavorite, addFavorite, removeFavorite } = useVideo();
  const { isLoggedIn } = useAuth();

  const AddVideo = () => {
    addFavorite(video);
  };

  const RemoveVideo = () => {
    removeFavorite(video);
  };

  return (
    <VideoContainer data-testid="video-player-container">
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
          {isLoggedIn &&
            (isFavorite(video) ? (
              <FavoriteButton onClick={RemoveVideo} title="is favorite">
                <FavIcon />
              </FavoriteButton>
            ) : (
              <FavoriteButton onClick={AddVideo} title="is not favorite">
                <UnFavIcon />
              </FavoriteButton>
            ))}
        </VideoBox>
        <VideoDescription>{video.description}</VideoDescription>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoPlayer;
