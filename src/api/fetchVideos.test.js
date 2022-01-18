import { fetchVideos } from './fetchVideos';

const mock = require('../__mocks__/mockYouTubeAPI');

jest.mock('./youtubeAPI', () => ({
  getVideos() {
    return mock.getVideos();
  },
}));
describe('Fetch videos', () => {
  test('return array ', async () => {
    const res = await fetchVideos('test');

    expect(res.length).toBeGreaterThan(0);
  });

  test('error ', async () => {
    try {
      await fetchVideos();
    } catch (e) {
      expect(e).toEqual({
        error: 'Username or password invalid',
      });
    }
  });
});
