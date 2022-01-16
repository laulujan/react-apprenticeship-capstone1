import { fetchVideos } from './fetchVideos';

const mock = require('../__mocks__/mockYouTubeAPI');

jest.mock('./youtubeAPI', () => ({
  getVideos() {
    return mock.getVideos();
  },
}));
describe('<RelatedVideos />', () => {
  test('Render Video image', async () => {
    const res = await fetchVideos('test');

    expect(res.length).toBeGreaterThan(0);
  });
});
