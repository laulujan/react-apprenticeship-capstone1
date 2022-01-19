import React, { useReducer, useContext, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { VIDEO_STORAGE_KEY } from '../../utils/constants';
import { useAuth } from '../Auth/provider';
import {
  fetchVideos,
  setSearchItem,
  setCurrentVideo,
  fetchRelatedVideos,
  addFavorite,
  removeFavorite,
} from './actions';
import { videoReducer, initialState } from './reducer';
import { VideoContext } from './context';

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without an VideoProvider!`);
  }
  return context;
}

function getUserStorageKey(user) {
  return user ? `${VIDEO_STORAGE_KEY}-${user.id}` : '';
}
const retriveStorage = (user) => (state) => {
  const userStorageKey = getUserStorageKey(user);
  const storageObject = storage.get(userStorageKey);

  return {
    ...state,
    ...storageObject,
  };
};

const VideoProvider = ({ children }) => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(
    videoReducer,
    initialState,
    retriveStorage(user)
  );

  function isFavorite(video) {
    return state.favorites.find((favorite) => favorite.id === video.id);
  }
  useEffect(() => {
    const userStorageKey = getUserStorageKey(user);

    storage.set(userStorageKey, {
      favorites: state.favorites,
    });
  }, [user, state.favorites]);

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
