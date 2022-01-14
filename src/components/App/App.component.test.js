import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App.component';

jest.mock('../../api/gapi', () => {
  return {
    initGoogle: () => {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  };
});

jest.mock('../../api/youtubeAPI.js', () => {
  return {
    getVideos: () => {
      return [
        {
          kind: 'youtube#searchResult',
          etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
          id: {
            kind: 'youtube#channel',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          },
          snippet: {
            publishedAt: '2014-09-27T01:39:18Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Wizeline',
            description:
              "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
            thumbnails: {
              default: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
              },
              medium: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
              },
              high: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'upcoming',
            publishTime: '2014-09-27T01:39:18Z',
          },
        },
      ];
    },
  };
});

test('Render Navbar', async () => {
  const { container } = render(<App />);

  await waitFor(() => {
    expect(container.getElementsByClassName('navbar').length).toBe(1);
  });
});

test('Render card container', async () => {
  const { container } = render(<App />);

  await waitFor(() => {
    expect(container.getElementsByClassName('card-container').length).toBe(1);
  });
});
