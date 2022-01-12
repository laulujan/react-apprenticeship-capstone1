import React from 'react';
import {
  RelatedContent,
  VideoItem,
  Image,
  Title,
} from './RelatedVideos.styled';

const RelatedVideos = ({ videosList }) => {
  return (
    <RelatedContent>
      {videosList.map((video) => (
        <VideoItem key={video.id}>
          <Image src={video.image} alt={video.title} />
          <Title>{video.title}</Title>
        </VideoItem>
      ))}
    </RelatedContent>
  );
};

export default RelatedVideos;
