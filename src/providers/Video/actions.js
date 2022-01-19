import { getVideos, getRelatedVideos } from '../../api/youtubeAPI';

const ACTIONS = {
  FETCH_VIDEOS: 'FETCH_VIDEOS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  FETCH_RELATED_VIDEOS: 'FETCH_RELATED_VIDEOS',
  FETCH_RELATED_SUCCESS: 'FETCH_RELATED_SUCCESS',
  FETCH_RELATED_ERROR: 'FETCH_RELATED_ERROR',
  SET_SEARCH_ITEM: 'SET_SEARCH_ITEM',
  SET_CURRENT_VIDEO: 'SET_CURRENT_VIDEO',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

function dataFormat(videoData) {
  const { snippet, id } = videoData;

  const videoTitle = snippet.title || '';
  const videoDescription = snippet.description || '';

  return {
    id: id.videoId,
    image: snippet.thumbnails.medium.url || '',
    title: videoTitle,
    description: videoDescription,
    publishTime: snippet?.publishTime,
  };
}

const fetchVideos = (dispatch) => async (searchItem) => {
  dispatch({ type: ACTIONS.FETCH_VIDEOS });
  try {
    const result = await getVideos(searchItem);
    const videos = result
      .filter((video) => video.id.kind === 'youtube#video')
      .map(dataFormat);

    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { videos } });
    return videos;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_ERROR,
      payload: { error: error.result.error.message },
    });
    return null;
  }
};
const fetchRelatedVideos = (dispatch) => async (id) => {
  dispatch({ type: ACTIONS.FETCH_RELATED_VIDEOS });
  try {
    const result = await getRelatedVideos(id);
    const relatedVideos = result
      .filter(
        (video) =>
          video.id.kind === 'youtube#video' &&
          Object.prototype.hasOwnProperty.call(video, 'snippet')
      )
      .map(dataFormat);
    dispatch({
      type: ACTIONS.FETCH_RELATED_SUCCESS,
      payload: { relatedVideos },
    });
    return relatedVideos;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_RELATED_ERROR,
      payload: { error: error.result.error.message },
    });
    return null;
  }
};

const setSearchItem = (dispatch) => (searchItem) => {
  dispatch({ type: ACTIONS.SET_SEARCH_ITEM, payload: { searchItem } });
};

const setCurrentVideo = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.SET_CURRENT_VIDEO, payload: { video } });
};

const addFavorite = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.ADD_FAVORITE, payload: { video } });
};

const removeFavorite = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.REMOVE_FAVORITE, payload: { video } });
};

export {
  ACTIONS,
  fetchVideos,
  fetchRelatedVideos,
  setSearchItem,
  setCurrentVideo,
  addFavorite,
  removeFavorite,
};
