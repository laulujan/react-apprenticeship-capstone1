const maxResults = 25;

export const getVideos = async (searchQuery) => {
  const part = ['snippet', 'id'];
  const { result } = await window.gapi.client.youtube.search.list({
    maxResults,
    part,
    q: searchQuery,
  });
  return result.items;
};
