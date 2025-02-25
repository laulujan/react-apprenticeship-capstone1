import { ACTIONS } from './actions';

export const initialState = {
  loading: false,
  error: false,
  videos: [],
  video: null,
  searchItem: 'wizeline',
  favorites: [],
};

export function videoReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.FETCH_VIDEOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload.videos,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.FETCH_RELATED_VIDEOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        relatedVideos: payload.relatedVideos,
      };
    case ACTIONS.FETCH_RELATED_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.SET_SEARCH_ITEM:
      return {
        ...state,
        searchItem: payload.searchItem,
      };
    case ACTIONS.SET_CURRENT_VIDEO:
      return {
        ...state,
        video: payload.video,
      };
    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload.video],
      };
    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (video) => video.id !== payload.video.id
        ),
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
