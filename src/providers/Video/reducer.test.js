import { videoReducer } from './reducer';
import { ACTIONS } from './actions';
import { waitFor } from '@testing-library/react';

const {
  FETCH_VIDEOS,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_RELATED_VIDEOS,
  FETCH_RELATED_SUCCESS,
  FETCH_RELATED_ERROR,
  SET_SEARCH_ITEM,
  SET_CURRENT_VIDEO,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} = ACTIONS;

describe('Reducer function test', () => {
  const userState = {
    loading: false,
    error: false,
    videos: [],
    video: null,
    searchItem: 'wizeline',
    favorites: [],
  };
  test('should set loadding when fetch action is dispatched', () => {
    const action = {
      type: FETCH_VIDEOS,
      payload: {
        loading: true,
        error: false,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.loading).toEqual(true);
  });
  test('should send error on fetch error action is dispatched', () => {
    const action = {
      type: FETCH_ERROR,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.error).toBe(true);
  });
  test('should send videos on fetch  action is dispatched', () => {
    const action = {
      type: FETCH_RELATED_SUCCESS,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
        relatedVideos: [{ id: 'test' }],
      },
    };
    const updatedState = videoReducer(userState, action);
    waitFor(() => {
      expect(updatedState.relatedVideos.length).toBe(1);
    });
  });

  test('should set loadding when fetch related action is dispatched', () => {
    const action = {
      type: FETCH_RELATED_VIDEOS,
      payload: {
        loading: true,
        error: false,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.loading).toEqual(true);
  });
  test('should send error on fetch error action is dispatched', () => {
    const action = {
      type: FETCH_RELATED_ERROR,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.error).toBe(true);
  });
  test('should send videos on fetch  action is dispatched', () => {
    const action = {
      type: FETCH_SUCCESS,
      payload: {
        loading: false,
        error: true,
        videos: [{ id: 'test' }],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    waitFor(() => {
      expect(updatedState.videos.length).toBe(1);
    });
  });

  test('should set search item when  action is dispatched', () => {
    const action = {
      type: SET_SEARCH_ITEM,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: null,
        searchItem: 'test',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.searchItem).toMatch('test');
  });
  test('should set current video  when  action is dispatched', () => {
    const action = {
      type: SET_CURRENT_VIDEO,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: { id: 'test' },
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.video.id).toMatch('test');
  });
  test('should add favorite when  action is dispatched', () => {
    const action = {
      type: ADD_FAVORITE,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: { id: 'test' },
        searchItem: 'wizeline',
        favorites: [{ id: 'test' }],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.favorites.length).toBe(1);
  });
  test('should remove favorite when  action is dispatched', () => {
    const action = {
      type: REMOVE_FAVORITE,
      payload: {
        loading: false,
        error: true,
        videos: [],
        video: null,
        searchItem: 'wizeline',
        favorites: [],
      },
    };
    const updatedState = videoReducer(userState, action);
    expect(updatedState.favorites.length).toBe(0);
  });
});
