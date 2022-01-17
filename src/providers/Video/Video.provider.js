import React, { useReducer, createContext, useContext } from 'react';

import {
  fetchVideos,
  setSearchItem,
  setCurrentVideo,
  fetchRelatedVideos,
  addFavorite,
  removeFavorite,
} from './Video.actions';
import { videoReducer, initialState } from './Video.reducer';
import { VideoContext } from './Video.context';

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without an VideoProvider!`);
  }
  return context;
}

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  function isFavorite(video) {
    return state.favorites.find((favorite) => favorite.id === video.id);
  }
  const value = {
    loading: state.loading,
    error: state.error,
    videos: state.videos,
    video: state.video,
    searchItem: state.searchItem,
    relatedVideos: state.relatedVideos,
    fetchVideos: fetchVideos(dispatch),
    fetchRelatedVideos: fetchRelatedVideos(dispatch),
    setSearchItem: setSearchItem(dispatch),
    setCurrentVideo: setCurrentVideo(dispatch),
    favorites: state.favorites,
    isFavorite,
    addFavorite: addFavorite(dispatch),
    removeFavorite: removeFavorite(dispatch),
  };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export { useVideo };
export default VideoProvider;
