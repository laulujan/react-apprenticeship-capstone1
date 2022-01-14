export const getVideos = async (searchQuery) => {
  const part = ['snippet', 'id'];
  const maxResults = 25;
  const { result } = await window.gapi.client.youtube.search.list({
    maxResults,
    part,
    q: searchQuery,
  });
  return result.items;
};

export const getRelatedVideos = async (id) => {
  const part = ['snippet', 'id'];
  const type = 'video';
  const maxResults = 5;
  const { result } = await window.gapi.client.youtube.search.list({
    part,
    maxResults,
    relatedToVideoId: id,
    type,
  });

  return result.items;
};
