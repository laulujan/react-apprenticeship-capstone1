import React, { useState, useEffect } from 'react';
//import { Link, useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { getVideos } from '../../api/mockApi';

//import { useAuth } from '../../providers/Auth';

function HomePage() {
  const [videosResponse, setVideosResponse] = useState([]);

  useEffect(() => {
    getVideos().then((data) => setVideosResponse(data));
  }, []);
  return (
    <>
      <Navbar />
      <CardWrapper videos={videosResponse.items} />
    </>
  );
}

export default HomePage;
