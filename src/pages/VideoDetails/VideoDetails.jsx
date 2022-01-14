import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { Container } from './VideoDetails.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const VideoDetails = () => {
  const { video, relatedVideos, fetchRelatedVideos } = useVideo();
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
          <RelatedVideos videosList={relatedVideos} />
        ) : (
          <div>No videos found</div>
        )}
      </>
    </Container>
  );
};

export default VideoDetails;
