import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  RelatedContent,
  VideoItem,
  Image,
  Title,
} from './RelatedVideos.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const RelatedVideos = ({ videosList }) => {
  const { setCurrentVideo, fetchRelatedVideos } = useVideo();
  const history = useHistory();

  const handleClick = (video) => {
    setCurrentVideo(video);
    fetchRelatedVideos(video.id);
    history.push(`/video/${video.id}`);
  };
  return (
    <RelatedContent>
      {videosList.map((video) => (
        <VideoItem key={video.id} onClick={() => handleClick(video)}>
          <Image src={video.image} alt={video.title} />
          <Title>{video.title}</Title>
        </VideoItem>
      ))}
    </RelatedContent>
  );
};

export default RelatedVideos;
