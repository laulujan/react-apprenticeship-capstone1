export const getVideos = () => {
  return fetch(
    'https://raw.githubusercontent.com/wizelineacademy/react-gist/main/capstone-project-1/mocks/youtube-videos-mock.json'
  ).then((response) => response.json());
};
