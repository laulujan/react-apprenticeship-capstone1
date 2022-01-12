import { getVideos } from './youtubeAPI';

export const fetchVideos = async (searchQuery) => {
  try {
    const result = await getVideos(searchQuery);
    const videos = result.filter((video) => video.id.kind === 'youtube#video');
    return videos;
  } catch (error) {
    console.log(error);
  }
};
