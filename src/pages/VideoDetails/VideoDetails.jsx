import React from 'react';
import { Redirect } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { Container } from './VideoDetails.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const VideoDetails = () => {
  const { video, videos } = useVideo();
  if (!video) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <VideoPlayer video={video} />
      <RelatedVideos videosList={videos} />
    </Container>
  );
};

export default VideoDetails;
