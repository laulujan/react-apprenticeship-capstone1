import React from 'react';

import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { useVideo } from '../../providers/Video/provider';

function HomePage() {
  const { videos } = useVideo();
  return (
    <>
      {videos ? (
        <CardWrapper videos={videos} isFavorites={false} />
      ) : (
        <div>No videos found</div>
      )}
    </>
  );
}

export default HomePage;
