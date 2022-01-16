const getVideos = () => {
  return [
    {
      kind: 'youtube#searchResult',
      etag: 'hhesYkmBJ6ItQxio6ikS4g2XPTc',
      id: {
        kind: 'youtube#video',
        videoId: 'HYyRZiwBWc8',
      },
      snippet: {
        publishedAt: '2019-04-18T18:48:04Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-04-18T18:48:04Z',
      },
    },
  ];
};

exports.getVideos = getVideos;
