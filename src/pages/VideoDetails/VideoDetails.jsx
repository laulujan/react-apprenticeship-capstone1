import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { Container } from './VideoDetails.styled';

const VideoDetails = () => {
  return (
    <Container>
      <VideoPlayer />
      <RelatedVideos />
    </Container>
  );
};

export default VideoDetails;
