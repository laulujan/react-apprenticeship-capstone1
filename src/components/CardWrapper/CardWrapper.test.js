import React from 'react';
import CardWrapper from './CardWrapper';
import { mount } from '../../__mocks__/MountComponent';

const mockVideo = [
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

describe('<CardWrapper />', () => {
  test('Render Cards images', async () => {
    let x = mount(<CardWrapper videos={mockVideo} />);
    expect(await x.findByRole('img')).toBeInTheDocument();
  });

  test('Renders Cards title', async () => {
    let x = mount(<CardWrapper videos={mockVideo} />);
    expect(await x.findByRole('heading')).toBeInTheDocument();
  });
  test('Renders Cards img', async () => {
    let x = mount(<CardWrapper videos={mockVideo} />);
    expect(await x.findByRole('img')).toBeInTheDocument();
  });
});
