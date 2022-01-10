export const getVideos = () => {
  return fetch(
    'https://raw.githubusercontent.com/wizelineacademy/react-gist/main/capstone-project-1/mocks/youtube-videos-mock.json'
  ).then((response) => response.json());
};
// export const getVideos = async (url) => {
//   return await fetch(

//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (result) {
//       console.log(result);
//       return result;
//     })
//     .catch((e) => console.log(e));
// };
