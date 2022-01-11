import React from 'react';
import {
  RelatedContent,
  VideoItem,
  Image,
  Title,
} from './RelatedVideos.styled';

const RelatedVideos = () => {
  return (
    <RelatedContent>
      <VideoItem>
        <Image src="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo" />
        <Title>Wizeline</Title>
      </VideoItem>
    </RelatedContent>
  );
};

export default RelatedVideos;
