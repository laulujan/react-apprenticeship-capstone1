import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { Container } from './VideoDetails.styled';
import { useVideo } from '../../providers/Video/provider';

const setPath =
  (location) =>
  ({ id }) => {
    const route = location.pathname.includes('favorites')
      ? '/favorites/'
      : '/video/';
    return route + id;
  };

const VideoDetails = () => {
  const { video, relatedVideos, fetchRelatedVideos, favorites } = useVideo();
  const { location } = useHistory();
  const favoritesList = location.pathname.includes('favorites')
    ? favorites
    : relatedVideos;

  if (!video) {
    return <Redirect to="/" />;
  }
  useEffect(() => {
    fetchRelatedVideos(video.id);
  }, []);

  return (
    <Container>
      <VideoPlayer video={video} />
      <>
        {relatedVideos ? (
          <RelatedVideos
            videosList={favoritesList}
            setPath={setPath(location)}
          />
        ) : (
          <div>No videos found</div>
        )}
      </>
    </Container>
  );
};

export default VideoDetails;
